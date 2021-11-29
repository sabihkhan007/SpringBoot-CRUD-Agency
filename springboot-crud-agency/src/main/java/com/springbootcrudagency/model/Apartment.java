package com.springbootcrudagency.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "apartments")
public class Apartment {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "name")
	private String name;

	@Column(name = "location")
	private String location;

	@Column(name = "no_of_beds")
	private Integer noOfBeds;

	@Column(name = "no_of_baths")
	private Integer noOfBaths;

	@Column(name = "total_area")
	private Integer totalArea;

	@Column(name = "area_of_bed")
	private Integer areaOfBed;

	@Column(name = "area_of_bath")
	private Integer areaOfBath;

	@Column(name = "price")
	private Integer price;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public Integer getNoOfBeds() {
		return noOfBeds;
	}

	public void setNoOfBeds(Integer noOfBeds) {
		this.noOfBeds = noOfBeds;
	}

	public Integer getNoOfBaths() {
		return noOfBaths;
	}

	public void setNoOfBaths(Integer noOfBaths) {
		this.noOfBaths = noOfBaths;
	}

	public Integer getTotalArea() {
		return totalArea;
	}

	public void setTotalArea(Integer totalArea) {
		this.totalArea = totalArea;
	}

	public Integer getAreaOfBed() {
		return areaOfBed;
	}

	public void setAreaOfBed(Integer areaOfBed) {
		this.areaOfBed = areaOfBed;
	}

	public Integer getAreaOfBath() {
		return areaOfBath;
	}

	public void setAreaOfBath(Integer areaOfBath) {
		this.areaOfBath = areaOfBath;
	}

	public Integer getPrice() {
		return price;
	}

	public void setPrice(Integer price) {
		this.price = price;
	}
}
