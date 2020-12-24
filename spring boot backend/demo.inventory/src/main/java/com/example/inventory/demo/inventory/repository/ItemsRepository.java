package com.example.inventory.demo.inventory.repository;

import com.example.inventory.demo.inventory.model.Items;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ItemsRepository extends JpaRepository<Items, Integer> {

}
