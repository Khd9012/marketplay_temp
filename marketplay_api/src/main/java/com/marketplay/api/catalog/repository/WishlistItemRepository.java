package com.marketplay.api.catalog.repository;

import com.marketplay.api.catalog.domain.WishlistItem;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WishlistItemRepository extends JpaRepository<WishlistItem, Long> {

	List<WishlistItem> findAllByCustomerId(String customerId);

	Optional<WishlistItem> findByCustomerIdAndProductId(String customerId, Long productId);
}
