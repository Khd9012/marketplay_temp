package com.marketplay.api.catalog.config;

import com.marketplay.api.catalog.domain.Product;
import com.marketplay.api.catalog.repository.ProductRepository;
import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;
import java.math.BigDecimal;
import java.util.List;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class CatalogSeeder implements ApplicationRunner {

	private final ProductRepository productRepository;
	private final EntityManager entityManager;

	public CatalogSeeder(ProductRepository productRepository, EntityManager entityManager) {
		this.productRepository = productRepository;
		this.entityManager = entityManager;
	}

	@Override
	@Transactional
	public void run(ApplicationArguments args) {
		if (productRepository.count() > 0) {
			return;
		}

		saveProduct(
			"atelier-speaker",
			"Atelier Wood Speaker",
			"테크",
			"189000",
			"4.9",
			"공간 분위기를 바꾸는 원목 블루투스 스피커",
			"#efe2d2",
			"AS",
			List.of("감성 오디오", "무료 배송")
		);
		saveProduct(
			"linen-table-set",
			"Sunday Linen Table Set",
			"리빙",
			"74000",
			"4.8",
			"브런치 무드를 더하는 린넨 테이블 컬렉션",
			"#dde7db",
			"LS",
			List.of("친환경", "기프트 추천")
		);
		saveProduct(
			"soft-runner",
			"Soft Runner Sneakers",
			"패션",
			"129000",
			"4.7",
			"가벼운 착화감과 미니멀 실루엣의 데일리 스니커즈",
			"#f1dfd8",
			"SR",
			List.of("한정 컬러", "사이즈 다양")
		);
		saveProduct(
			"moss-lamp",
			"Moss Glow Lamp",
			"리빙",
			"96000",
			"4.9",
			"따뜻한 빛으로 완성하는 무드 조명",
			"#e5ebd6",
			"ML",
			List.of("인기 상품", "야간 무드")
		);
	}

	private void saveProduct(
		String slug,
		String title,
		String category,
		String price,
		String rating,
		String summary,
		String accent,
		String imageCode,
		List<String> tags
	) {
		Product product = new Product(
			slug,
			title,
			category,
			new BigDecimal(price),
			new BigDecimal(rating),
			summary,
			accent,
			imageCode,
			tags
		);
		entityManager.persist(product);
	}
}
