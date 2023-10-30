package com.devglan.model;

import java.util.ArrayList;
import java.util.List;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@SuppressWarnings("serial")
@Entity
@Table(name = "products")
public class Product implements java.io.Serializable {


	@Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
	private int id;
	@Column
	private String name;
	@Column
	private String description;
	@Column
	private double price;
	@Column
	private int quantity;
	@ManyToOne( cascade = CascadeType.ALL)
    @JoinColumn(name = "category_id")
	private Category category;

	@JsonIgnore
	@OneToMany(targetEntity=Commande.class, mappedBy = "product", cascade = CascadeType.ALL)
	private List<Commande> commandes= new ArrayList < > ();
	

public Product() {
		
	}
	public void setId(int id) {
		this.id=id;
	}
	public int getId() {
		return this.id;
	}
	public void setName(String name) {
		this.name=name;
	}
	public String getName() {
		return this.name;
	}
	public void setDescription(String description) {
		this.description=description;
	}
	public String getDescription() {
		return this.description;
	}
	public double getPrice() {
		return this.price;
	}
	public void setPrice(double price) {
		this.price=price;
	}
	public int getQuantity() {
		return this.quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity=quantity;
	}
	public Category getCategory() {
		return this.category;
	}
	public void setCategory(Category category) {
		this.category=category;
	}
	
	public void setCommandes(List<Commande> commandes) {
		this.commandes=commandes;
	}
	public List<Commande> getCommandes(){
		return this.commandes;
	}

}
