package com.marketplay.api.catalog.presentation;

import com.marketplay.api.catalog.dto.CartItemResponse;
import com.marketplay.api.catalog.dto.CartUpsertRequest;
import com.marketplay.api.catalog.dto.ProductResponse;
import com.marketplay.api.catalog.dto.WishlistToggleRequest;
import com.marketplay.api.catalog.dto.WishlistToggleResponse;
import com.marketplay.api.catalog.service.CatalogService;
import com.marketplay.api.common.api.ApiResponse;
import jakarta.validation.Valid;
import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class CatalogController {

	private final CatalogService catalogService;

	public CatalogController(CatalogService catalogService) {
		this.catalogService = catalogService;
	}

	@GetMapping("/products")
	public ResponseEntity<ApiResponse<List<ProductResponse>>> getProducts() {
		return ResponseEntity.ok(ApiResponse.success(catalogService.getProducts()));
	}

	@GetMapping("/products/{slug}")
	public ResponseEntity<ApiResponse<ProductResponse>> getProduct(@PathVariable String slug) {
		return ResponseEntity.ok(ApiResponse.success(catalogService.getProduct(slug)));
	}

	@GetMapping("/wishlist")
	public ResponseEntity<ApiResponse<List<String>>> getWishlist(
		@RequestHeader(name = "X-Customer-Id", defaultValue = "demo-user") String customerId
	) {
		return ResponseEntity.ok(ApiResponse.success(catalogService.getWishlist(customerId)));
	}

	@PostMapping("/wishlist/toggle")
	public ResponseEntity<ApiResponse<WishlistToggleResponse>> toggleWishlist(
		@RequestHeader(name = "X-Customer-Id", defaultValue = "demo-user") String customerId,
		@Valid @RequestBody WishlistToggleRequest request
	) {
		return ResponseEntity.ok(ApiResponse.success(catalogService.toggleWishlist(customerId, request)));
	}

	@GetMapping("/cart")
	public ResponseEntity<ApiResponse<List<CartItemResponse>>> getCart(
		@RequestHeader(name = "X-Customer-Id", defaultValue = "demo-user") String customerId
	) {
		return ResponseEntity.ok(ApiResponse.success(catalogService.getCart(customerId)));
	}

	@PostMapping("/cart")
	public ResponseEntity<ApiResponse<List<CartItemResponse>>> upsertCart(
		@RequestHeader(name = "X-Customer-Id", defaultValue = "demo-user") String customerId,
		@Valid @RequestBody CartUpsertRequest request
	) {
		return ResponseEntity.ok(ApiResponse.success(catalogService.upsertCart(customerId, request)));
	}

	@DeleteMapping("/cart/{slug}")
	public ResponseEntity<ApiResponse<Void>> removeCartItem(
		@RequestHeader(name = "X-Customer-Id", defaultValue = "demo-user") String customerId,
		@PathVariable String slug
	) {
		catalogService.removeCartItem(customerId, slug);
		return ResponseEntity.ok(ApiResponse.success(null));
	}
}
