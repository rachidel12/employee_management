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

import com.devglan.model.ClientRepository;

import com.devglan.model.Client;
@RestController
@RequestMapping("/api")
public class ClientController {
	@Autowired
	private ClientRepository repository;
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/clients")
    public List<Client> findAllClients() {
        return repository.findAll();
    }
	@CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("client/{id}")
    public ResponseEntity<Client> findClientById(@PathVariable int id) {
        Optional<Client> client = repository.findById(id);
        return client.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/client")
    public ResponseEntity<Client> createClient(@RequestBody Client client) throws URISyntaxException {
    	Client result = repository.save(client);
        return ResponseEntity.created(new URI("/api/client/" + result.getId()))
            .body(result);
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/client")
    public Client updateClient(@RequestBody Client client) {
    	return repository.save(client);
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/client/{id}")
    public void deleteClientById(@PathVariable int id) {
    	repository.deleteById(id);
    }
}
