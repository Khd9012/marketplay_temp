package com.marketplay.api.catalog.repository;

import com.marketplay.api.catalog.domain.CartItem;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartItemRepository extends JpaRepository<CartItem, Long> {

	List<CartItem> findAllByCustomerId(String customerId);

	Optional<CartItem> findByCustomerIdAndProductId(String customerId, Long productId);
}
