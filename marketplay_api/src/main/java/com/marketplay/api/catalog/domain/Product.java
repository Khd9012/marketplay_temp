package com.marketplay.api.catalog.domain;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OrderColumn;
import jakarta.persistence.Table;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import lombok.Getter;

@Getter
@Entity
@Table(name = "products")
public class Product {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Column(nullable = false, unique = true, length = 120)
	private String slug;

	@Column(nullable = false, length = 200)
	private String title;

	@Column(nullable = false, length = 80)
	private String category;

	@Column(nullable = false, precision = 12, scale = 0)
	private BigDecimal price;

	@Column(nullable = false, precision = 2, scale = 1)
	private BigDecimal rating;

	@Column(nullable = false, length = 500)
	private String summary;

	@Column(nullable = false, length = 20)
	private String accent;

	@Column(nullable = false, length = 10)
	private String imageCode;

	@ElementCollection(fetch = FetchType.EAGER)
	@CollectionTable(name = "product_tags", joinColumns = @JoinColumn(name = "product_id"))
	@OrderColumn(name = "sort_order")
	@Column(name = "tag_name", nullable = false, length = 80)
	private List<String> tags = new ArrayList<>();
}
