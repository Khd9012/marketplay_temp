package com.marketplay.api.catalog.dto;

import com.marketplay.api.catalog.domain.Product;
import java.text.NumberFormat;
import java.util.List;
import java.util.Locale;

public record ProductResponse(
	Long id,
	String slug,
	String title,
	String category,
	String price,
	double rating,
	String summary,
	String accent,
	String image,
	List<String> tags
) {
	public static ProductResponse from(Product product) {
		NumberFormat numberFormat = NumberFormat.getNumberInstance(Locale.KOREA);
		return new ProductResponse(
			product.getId(),
			product.getSlug(),
			product.getTitle(),
			product.getCategory(),
			numberFormat.format(product.getPrice()) + "원",
			product.getRating().doubleValue(),
			product.getSummary(),
			product.getAccent(),
			product.getImageCode(),
			product.getTags()
		);
	}
}
