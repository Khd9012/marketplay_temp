package com.marketplay.api.catalog.dto;

import jakarta.validation.constraints.NotBlank;

public record WishlistToggleRequest(@NotBlank String slug) {
}
