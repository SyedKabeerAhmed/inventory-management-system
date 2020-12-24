package com.example.inventory.demo.inventory.repository;

import com.example.inventory.demo.inventory.model.Massors;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MassorsRepository extends JpaRepository<Massors, Integer> {
}
