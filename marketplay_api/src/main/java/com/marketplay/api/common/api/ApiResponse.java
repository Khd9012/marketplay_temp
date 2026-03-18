package com.marketplay.api.common.api;

public record ApiResponse<T>(String code, String message, T data) {

	public static <T> ApiResponse<T> success(T data) {
		return new ApiResponse<>("SUCCESS", "성공", data);
	}
}
