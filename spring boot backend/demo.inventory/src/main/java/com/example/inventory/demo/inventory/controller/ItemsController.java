package com.example.inventory.demo.inventory.controller;

import com.example.inventory.demo.inventory.exception.ResourceNotFoundException;
import com.example.inventory.demo.inventory.model.Items;
import com.example.inventory.demo.inventory.repository.ItemsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/rest/inventory/items")
@RestController
public class ItemsController {

    @Autowired
    private ItemsRepository itemsRepository;

    @PostMapping(value = "/items")
    public Items createEmployee(@RequestBody Items items) {
        return itemsRepository.save(items);
    }

    @PutMapping("/items/{id}")
    public ResponseEntity<Items> updateItems(@PathVariable Integer id, @RequestBody Items itemsDetails){
        Items items = itemsRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Item not exist with id :" + id));

        items.setName(itemsDetails.getName());
        items.setQuantity(itemsDetails.getQuantity());
        items.setCategory(itemsDetails.getCategory());
        items.setPrice(itemsDetails.getPrice());

        Items updatedItems = itemsRepository.save(items);
        return ResponseEntity.ok(updatedItems);
    }

    @DeleteMapping("/items/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteItems(@PathVariable Integer id){
        Items items = itemsRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));

        itemsRepository.delete(items);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/items")
    public List<Items> getAllItems(){
        return itemsRepository.findAll();
    }

    @GetMapping("/items/{id}")
    public ResponseEntity<Items> getItemsById(@PathVariable Integer id) {
        Items items = itemsRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Item not exist with id :" + id));
        return ResponseEntity.ok(items);
    }
}
