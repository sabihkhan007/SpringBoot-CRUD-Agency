package com.springbootcrudagency.repository;

import com.springbootcrudagency.model.Apartment;
import com.springbootcrudagency.model.SearchDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ApartmentRepository extends JpaRepository<Apartment, Long>{
    @Query("SELECT a FROM Apartment a WHERE " +
            "a.noOfBeds >= :#{#searchDto.minNoOfBeds}" +
            " AND a.areaOfBed >= :#{#searchDto.minBedArea}" +
            " AND a.noOfBaths >= :#{#searchDto.minNoOfBaths}" +
            " AND a.areaOfBath >= :#{#searchDto.minBathArea}" +
            " AND a.totalArea >= :#{#searchDto.minTotalArea}" +
            " AND a.price >= :#{#searchDto.wishToPay}")
    List<Apartment> search(SearchDto searchDto);
}
