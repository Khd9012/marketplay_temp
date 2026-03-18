package com.marketplay.api.catalog.service;

import com.marketplay.api.catalog.domain.CartItem;
import com.marketplay.api.catalog.domain.Product;
import com.marketplay.api.catalog.domain.WishlistItem;
import com.marketplay.api.catalog.dto.CartItemResponse;
import com.marketplay.api.catalog.dto.CartUpsertRequest;
import com.marketplay.api.catalog.dto.ProductResponse;
import com.marketplay.api.catalog.dto.WishlistToggleRequest;
import com.marketplay.api.catalog.dto.WishlistToggleResponse;
import com.marketplay.api.catalog.repository.CartItemRepository;
import com.marketplay.api.catalog.repository.ProductRepository;
import com.marketplay.api.catalog.repository.WishlistItemRepository;
import java.util.List;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
public class CatalogService {

	private final ProductRepository productRepository;
	private final WishlistItemRepository wishlistItemRepository;
	private final CartItemRepository cartItemRepository;

	public CatalogService(
		ProductRepository productRepository,
		WishlistItemRepository wishlistItemRepository,
		CartItemRepository cartItemRepository
	) {
		this.productRepository = productRepository;
		this.wishlistItemRepository = wishlistItemRepository;
		this.cartItemRepository = cartItemRepository;
	}

	@Cacheable(cacheNames = "catalog:products")
	public List<ProductResponse> getProducts() {
		return productRepository.findAll().stream().map(ProductResponse::from).toList();
	}

	@Cacheable(cacheNames = "catalog:product", key = "#slug")
	public ProductResponse getProduct(String slug) {
		return ProductResponse.from(findProduct(slug));
	}

	public List<String> getWishlist(String customerId) {
		return wishlistItemRepository.findAllByCustomerId(customerId)
			.stream()
			.map(WishlistItem::getProductId)
			.map(this::findProduct)
			.map(Product::getSlug)
			.toList();
	}

	@Transactional
	public WishlistToggleResponse toggleWishlist(String customerId, WishlistToggleRequest request) {
		Product product = findProduct(request.slug());
		return wishlistItemRepository.findByCustomerIdAndProductId(customerId, product.getId())
			.map(existing -> {
				wishlistItemRepository.delete(existing);
				return new WishlistToggleResponse(product.getSlug(), false);
			})
			.orElseGet(() -> {
				wishlistItemRepository.save(new WishlistItem(customerId, product.getId()));
				return new WishlistToggleResponse(product.getSlug(), true);
			});
	}

	public List<CartItemResponse> getCart(String customerId) {
		return cartItemRepository.findAllByCustomerId(customerId).stream()
			.map(item -> new CartItemResponse(ProductResponse.from(findProduct(item.getProductId())), item.getQuantity()))
			.toList();
	}

	@Transactional
	public List<CartItemResponse> upsertCart(String customerId, CartUpsertRequest request) {
		Product product = findProduct(request.slug());
		cartItemRepository.findByCustomerIdAndProductId(customerId, product.getId())
			.ifPresentOrElse(
				existing -> existing.changeQuantity(request.quantity()),
				() -> cartItemRepository.save(new CartItem(customerId, product.getId(), request.quantity()))
			);
		return getCart(customerId);
	}

	@Transactional
	public void removeCartItem(String customerId, String slug) {
		Product product = findProduct(slug);
		cartItemRepository.findByCustomerIdAndProductId(customerId, product.getId())
			.ifPresent(cartItemRepository::delete);
	}

	private Product findProduct(String slug) {
		return productRepository.findBySlug(slug)
			.orElseThrow(() -> new IllegalArgumentException("상품을 찾을 수 없습니다: " + slug));
	}

	private Product findProduct(Long id) {
		return productRepository.findById(id)
			.orElseThrow(() -> new IllegalArgumentException("상품을 찾을 수 없습니다: " + id));
	}
}
