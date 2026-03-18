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
	name = "cart_items",
	uniqueConstraints = @UniqueConstraint(name = "uk_cart_customer_product", columnNames = {"customer_id", "product_id"})
)
public class CartItem {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String customerId;

	private Long productId;

	private Integer quantity;

	private LocalDateTime createdAt;

	private LocalDateTime updatedAt;

	protected CartItem() {
	}

	public CartItem(String customerId, Long productId, Integer quantity) {
		this.customerId = customerId;
		this.productId = productId;
		this.quantity = quantity;
		this.createdAt = LocalDateTime.now();
		this.updatedAt = this.createdAt;
	}

	public void changeQuantity(int quantity) {
		this.quantity = quantity;
		this.updatedAt = LocalDateTime.now();
	}
}
