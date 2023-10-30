package com.devglan.controller;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.net.URI;
import java.net.URISyntaxException;
import java.time.format.DateTimeFormatterBuilder;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.devglan.model.OrderRepository;
import com.devglan.model.ClientRepository;
import com.devglan.model.Order;
import com.devglan.model.OrderDto;
import com.devglan.model.Client;
@RestController
@RequestMapping("/api")
public class OrderController {
	@Autowired
	private OrderRepository repository;
	@Autowired
	private ClientRepository clirepository;
	 @CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/orders")
    public List<Order> findAllOrders() {
        return repository.getOrders();
    }
	 @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("order/{id}")
    public ResponseEntity<Order> findCategoryById(@PathVariable int id) {
        Optional<Order> order = repository.findById(id);
        return order.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

	 @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/order")
    public ResponseEntity<Order> createProduct(@RequestBody OrderDto orderdto) throws URISyntaxException {
    	Order order = new Order();
    	Client client= clirepository.findById(orderdto.getClient()).get();
//    	order.setDate(orderdto.getDate());
    	order.setSatut(0);
    	order.setClient(client);
    	repository.save(order);
        return ResponseEntity.created(new URI("/api/order/" + order.getId()))
            .body(order);
    }
	@CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/order/{id}")
    public Order updateOrder(@PathVariable int id) {
		Order order = new Order();
		order.setId(id);
//	    	order.setDate(orderdto.getDate());
    	order.setSatut(1);
    	return repository.save(order);
    }
	 @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/order/{id}")
    public void deleteOrderById(@PathVariable int id) {
    	repository.deleteById(id);
    }

}
