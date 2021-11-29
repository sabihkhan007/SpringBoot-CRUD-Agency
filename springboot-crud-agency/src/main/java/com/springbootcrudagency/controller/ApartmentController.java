package com.springbootcrudagency.controller;

import java.util.HashMap;

import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import com.springbootcrudagency.model.Apartment;
import com.springbootcrudagency.model.SearchDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springbootcrudagency.exception.ResourceNotFoundException;
import com.springbootcrudagency.repository.ApartmentRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api")
public class ApartmentController {
	@Autowired
	private ApartmentRepository apartmentRepository;

	@GetMapping("/apartments")
	public List<Apartment> getAllApartments() {
		return apartmentRepository.findAll();
	}

	@GetMapping("/apartments/{id}")
	public ResponseEntity<Apartment> getApartmentById(@PathVariable(value = "id") Long apartmentId)
			throws ResourceNotFoundException {
		Apartment apartment = apartmentRepository.findById(apartmentId)
				.orElseThrow(() -> new ResourceNotFoundException("Apartment not found for this id :: " + apartmentId));
		return ResponseEntity.ok().body(apartment);
	}

	@PostMapping("/apartments")
	public Apartment createApartment(@Valid @RequestBody Apartment apartment) {
		return apartmentRepository.save(apartment);
	}

	@PutMapping("/apartments/{id}")
	public ResponseEntity<Apartment> updateApartment(@PathVariable(value = "id") Long apartmentId,
													@Valid @RequestBody Apartment apartmentDetails) throws ResourceNotFoundException {
		Apartment apartment = apartmentRepository.findById(apartmentId)
				.orElseThrow(() -> new ResourceNotFoundException("Apartment not found for this id :: " + apartmentId));

		apartment.setName(apartmentDetails.getName());
		apartment.setLocation(apartmentDetails.getLocation());
		apartment.setNoOfBeds(apartmentDetails.getNoOfBeds());
		apartment.setNoOfBaths(apartmentDetails.getNoOfBaths());
		apartment.setTotalArea(apartmentDetails.getTotalArea());
		apartment.setAreaOfBed(apartmentDetails.getAreaOfBed());
		apartment.setAreaOfBath(apartmentDetails.getAreaOfBath());
		apartment.setPrice(apartmentDetails.getPrice());
		final Apartment updatedApartment = apartmentRepository.save(apartment);
		return ResponseEntity.ok(updatedApartment);
	}

	@DeleteMapping("/apartments/{id}")
	public Map<String, Boolean> deleteApartment(@PathVariable(value = "id") Long apartmentId)
			throws ResourceNotFoundException {
		Apartment apartment = apartmentRepository.findById(apartmentId)
				.orElseThrow(() -> new ResourceNotFoundException("Apartment not found for this id :: " + apartmentId));

		apartmentRepository.delete(apartment);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}

	@PostMapping("/apartments/search")
	public List<Apartment> searchApartments(@Valid @RequestBody SearchDto searchDto) {
		return apartmentRepository.search(searchDto);
	}
}
