package com.example.inventory.demo.inventory.controller;

import com.example.inventory.demo.inventory.exception.ResourceNotFoundException;
import com.example.inventory.demo.inventory.model.Massors;
import com.example.inventory.demo.inventory.model.Vendors;
import com.example.inventory.demo.inventory.repository.VendorsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/rest/inventory/vendors")
@RestController
public class VendorsController {

    @Autowired
    private VendorsRepository vendorsRepository;

    @PostMapping(value = "/vendors")
    public Vendors createVendors(@RequestBody Vendors vendors) {
        return vendorsRepository.save(vendors);
    }

    @GetMapping("/vendors/{id}")
    public ResponseEntity<Vendors> getVendorsById(@PathVariable Integer id) {
        Vendors vendors = vendorsRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Vendors not exist with id :" + id));
        return ResponseEntity.ok(vendors);
    }

    @PutMapping("/vendors/{id}")
    public ResponseEntity<Vendors> updateVendors(@PathVariable Integer id, @RequestBody Vendors vendorsDetails){
        Vendors vendors = vendorsRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Vendors not exist with id :" + id));

        vendors.setName(vendorsDetails.getName());
        vendors.setEmail(vendorsDetails.getEmail());
        vendors.setContact(vendorsDetails.getContact());


        Vendors updatedVendors = vendorsRepository.save(vendors);
        return ResponseEntity.ok(updatedVendors);
    }

    @DeleteMapping("/vendors/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteVendors(@PathVariable Integer id){
        Vendors vendors = vendorsRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Vendors not exist with id :" + id));

        vendorsRepository.delete(vendors);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/vendors")
    public List<Vendors> getAllVendors(){
        return vendorsRepository.findAll();
    }
}
