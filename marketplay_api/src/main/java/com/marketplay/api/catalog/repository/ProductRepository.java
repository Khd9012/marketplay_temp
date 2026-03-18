package com.marketplay.api.catalog.repository;

import com.marketplay.api.catalog.domain.Product;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {

	Optional<Product> findBySlug(String slug);
}
