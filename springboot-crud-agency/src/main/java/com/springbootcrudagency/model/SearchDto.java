package com.springbootcrudagency.model;

public class SearchDto {
private Integer wishToPay;
private Integer minNoOfBeds;
private Integer minBedArea;
private Integer minNoOfBaths;
private Integer minBathArea;
private Integer minTotalArea;

	public Integer getWishToPay() {
		return wishToPay;
	}

	public void setWishToPay(Integer wishToPay) {
		this.wishToPay = wishToPay;
	}

	public Integer getMinNoOfBeds() {
		return minNoOfBeds;
	}

	public void setMinNoOfBeds(Integer minNoOfBeds) {
		this.minNoOfBeds = minNoOfBeds;
	}

	public Integer getMinBedArea() {
		return minBedArea;
	}

	public void setMinBedArea(Integer minBedArea) {
		this.minBedArea = minBedArea;
	}

	public Integer getMinNoOfBaths() {
		return minNoOfBaths;
	}

	public void setMinNoOfBaths(Integer minNoOfBaths) {
		this.minNoOfBaths = minNoOfBaths;
	}

	public Integer getMinBathArea() {
		return minBathArea;
	}

	public void setMinBathArea(Integer minBathArea) {
		this.minBathArea = minBathArea;
	}

	public Integer getMinTotalArea() {
		return minTotalArea;
	}

	public void setMinTotalArea(Integer minTotalArea) {
		this.minTotalArea = minTotalArea;
	}
}
