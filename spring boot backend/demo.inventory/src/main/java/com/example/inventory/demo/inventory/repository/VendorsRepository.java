package com.example.inventory.demo.inventory.repository;

import com.example.inventory.demo.inventory.model.Vendors;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VendorsRepository extends JpaRepository<Vendors, Integer> {
}
