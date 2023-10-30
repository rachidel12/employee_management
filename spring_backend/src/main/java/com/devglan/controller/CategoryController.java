package com.devglan.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devglan.model.CategoryRepository;
import com.devglan.model.Category;@RestController
@RequestMapping("/api")
public class CategoryController {
	@Autowired
	private CategoryRepository repository;
	
	@GetMapping("/categories")
	@CrossOrigin(origins = "http://localhost:3000")
    public List<Category> findAllCategories() {
        return repository.findAll();
    }

    @GetMapping("category/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Category> findCategoryById(@PathVariable int id) {
        Optional<Category> category = repository.findById(id);
        return category.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/category")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Category> createCategory(@RequestBody Category category) throws URISyntaxException {
    	Category result = repository.save(category);
        return ResponseEntity.created(new URI("/api/category/" + result.getId()))
            .body(result);
    }
    @PutMapping("/category")
    @CrossOrigin(origins = "http://localhost:3000")
    public Category updateCategory(@RequestBody Category category) {
    	return repository.save(category);
    }
    @DeleteMapping("/category/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public void deleteCategoryById(@PathVariable int id) {
    	repository.deleteById(id);
    }
	

}
