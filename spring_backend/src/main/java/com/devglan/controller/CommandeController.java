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

import com.devglan.model.CommandeRepository;
import com.devglan.model.OrderRepository;
import com.devglan.model.ProductRepository;
import com.devglan.model.Order;
import com.devglan.model.Product;
import com.devglan.model.CommandeDto;
import com.devglan.model.Commande;
@RestController
@RequestMapping("/api")
public class CommandeController {
	@Autowired
	private CommandeRepository repository;
	@Autowired
	private OrderRepository ordrepository;

	@Autowired
	private ProductRepository prodrepository;
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/commandes")
    public List<Commande> findAllCommandes() {
        return repository.findAll();
    }
	@CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/sum/{Order_id}")
    public List<Object> sum(@PathVariable int Order_id) {
        return repository.sumQuantities(Order_id);
    }
    @CrossOrigin(origins = "http://localhost:3000")
	@GetMapping("/sum")
    public List<Object> sumCommande() {
        return repository.sumCommande();
    }
//	@CrossOrigin(origins = "http://localhost:3000")
//	@GetMapping("/Totalcommande")
//    public List<Object> findAllCommandes() {
//        return repository.sumcommandes();
//    }
	@CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/commande/{id}")
    public ResponseEntity<Commande> findCommandeById(@PathVariable int id) {
        Optional<Commande> commande = repository.findById(id);
        return commande.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }
//    @GetMapping("commandequa/{order_id}")
//    @CrossOrigin(origins = "http://localhost:3000")
//    public int sumQuantities(@PathVariable int order_id){
//    	int cammandes= repository.sumQuantities(order_id);
//        return cammandes;
//    }
  @CrossOrigin(origins = "http://localhost:3000")
  @PostMapping("/commande")
  public ResponseEntity<Commande> createCommande(@RequestBody CommandeDto commandeDto) throws URISyntaxException {
  	Commande commande = new Commande();
  	Product product= prodrepository.findById(commandeDto.getProduct()).get();
  	Order order= ordrepository.findById(commandeDto.getOrder()).get();
  	commande.setQuantity(commandeDto.getQuantity());
  	commande.setProduct(product);
  	commande.setOrder(order);
  	repository.save(commande);
      return ResponseEntity.created(new URI("/api/commande/" + commande.getId()))
          .body(commande);
  }
    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/Commande")
    public Commande updateCommander(@RequestBody Commande commande) {
    	return repository.save(commande);
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/Commande/{id}")
    public void deleteCommandeById(@PathVariable int id) {
    	repository.deleteById(id);
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/countcomm")
    public List<Object> count(){
    	return repository.countpquantity();
    }
    
}