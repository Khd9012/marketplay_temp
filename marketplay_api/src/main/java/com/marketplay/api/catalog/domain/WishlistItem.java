package com.marketplay.api.catalog.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;
import java.time.LocalDateTime;
import lombok.Getter;

@Getter
@Entity
@Table(
	name = "wishlist_items",
	uniqueConstraints = @UniqueConstraint(name = "uk_wishlist_customer_product", columnNames = {"customer_id", "product_id"})
)
public class WishlistItem {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String customerId;

	private Long productId;

	private LocalDateTime createdAt;

	protected WishlistItem() {
	}

	public WishlistItem(String customerId, Long productId) {
		this.customerId = customerId;
		this.productId = productId;
		this.createdAt = LocalDateTime.now();
	}
}
