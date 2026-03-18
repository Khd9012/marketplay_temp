package com.marketplay.api.catalog.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;

public record CartUpsertRequest(@NotBlank String slug, @Min(1) int quantity) {
}
