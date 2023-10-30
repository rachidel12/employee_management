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

import com.devglan.model.ProductRepository;
import com.devglan.model.Category;
import com.devglan.model.CategoryRepository;
import com.devglan.model.Product;
import com.devglan.model.ProductDto;
@RestController
@RequestMapping("/api")
public class ProductController {
	@Autowired
	private ProductRepository repository;
	@Autowired
	private CategoryRepository catrepository;
	
	@GetMapping("/products")
	 @CrossOrigin(origins = "http://localhost:3000")
    public Iterable<Product> findAllProducts() {
		return repository.findAll();
    }

    @GetMapping("product/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Product> findProductById(@PathVariable int id) {
        Optional<Product> product = repository.findById(id);
        return product.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }
//    @GetMapping("producte/{category_id}")
//    @CrossOrigin(origins = "http://localhost:3000")
//    public List<Product> findProductByIdCategorie(@PathVariable int category_id){
//    	List<Product> products= repository.findProductByIdCategorie(category_id);
//        return products;
//    }

    @PostMapping("/product")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Product> createProduct(@RequestBody ProductDto productdto) throws URISyntaxException {
    	Product product = new Product();
    	Category category= catrepository.findById(productdto.getCategory()).get();
    	product.setName(productdto.getName());
    	product.setDescription(productdto.getDescription());
    	product.setQuantity(productdto.getQuantity());
    	product.setPrice(productdto.getPrice());
    	product.setCategory(category);
    	repository.save(product);
        return ResponseEntity.created(new URI("/api/product/" + product.getId()))
            .body(product);
    }
    @PutMapping("/product")
    @CrossOrigin(origins = "http://localhost:3000")
        public ResponseEntity<Product> updateProduct(@RequestBody ProductDto productdto) throws URISyntaxException {
    	Product product = new Product();
    	Category category= catrepository.findById(productdto.getCategory()).get();
    	product.setId(productdto.getId());
    	product.setName(productdto.getName());
    	product.setDescription(productdto.getDescription());
    	product.setQuantity(productdto.getQuantity());
    	product.setPrice(productdto.getPrice());
    	product.setCategory(category);
    	repository.save(product);
        return ResponseEntity.created(new URI("/api/product/" + product.getId()))
            .body(product);
    }
   
    @DeleteMapping("/product/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public void deleteProductById(@PathVariable int id) {
    	repository.deleteById(id);
    }
    @GetMapping("/count")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Object> countpercat(){
    	return repository.productpercat();
    }
}
