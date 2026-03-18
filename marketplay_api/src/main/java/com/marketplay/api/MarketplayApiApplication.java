package com.marketplay.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;

@SpringBootApplication
@EnableCaching
public class MarketplayApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(MarketplayApiApplication.class, args);
	}

}
