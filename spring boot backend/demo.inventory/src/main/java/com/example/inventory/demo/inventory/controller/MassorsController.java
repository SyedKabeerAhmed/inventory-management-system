package com.example.inventory.demo.inventory.controller;

import com.example.inventory.demo.inventory.exception.ResourceNotFoundException;
import com.example.inventory.demo.inventory.model.Massors;
import com.example.inventory.demo.inventory.repository.MassorsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/rest/inventory/massors")
@RestController
public class MassorsController {

    @Autowired
    private MassorsRepository massorsRepository;

    @PostMapping(value = "/massors")
    public Massors createMassors(@RequestBody Massors massors) {
        return massorsRepository.save(massors);
    }
    @PutMapping("/massors/{id}")
    public ResponseEntity<Massors> updateMassors(@PathVariable Integer id, @RequestBody Massors massorsDetails){
        Massors massors = massorsRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Massors not exist with id :" + id));

        massors.setQuantity(massorsDetails.getQuantity());
        massors.setCategory(massorsDetails.getCategory());
        massors.setName(massorsDetails.getName());
        massors.setPrice(massorsDetails.getPrice());

        Massors updatedMassors = massorsRepository.save(massors);
        return ResponseEntity.ok(updatedMassors);
    }

    @DeleteMapping("/massors/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteMassors(@PathVariable Integer id){
        Massors massors = massorsRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Massors not exist with id :" + id));

        massorsRepository.delete(massors);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/massors")
    public List<Massors> getAllMassors(){
        return massorsRepository.findAll();
    }

    @GetMapping("/massors/{id}")
    public ResponseEntity<Massors> getMassorsById(@PathVariable Integer id) {
        Massors massors = massorsRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Massors not exist with id :" + id));
        return ResponseEntity.ok(massors);
    }
}
