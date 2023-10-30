package com.devglan.model;

import java.util.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
@Entity
@Table(name="categories")
public class Category {
	@Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
	private int id;
	@Column
	private String name;
	@Column
	private String description;
	@JsonIgnore
	@OneToMany(targetEntity=Product.class, mappedBy = "category")
	private List<Product> products= new ArrayList < > ();
	public Category() {
		
	}
	public int getId() {
		return this.id;
	}
	public String getName() {
		return this.name;
	}
	public String getDescription() {
		return this.description;
	}
	public void setId(int id) {
		this.id=id;
	}
	public void setName(String name) {
		this.name=name;
	}
	public void setDescription(String description) {
		this.description=description;
	}
	public List<Product> getProducts(){
    	return this.products;
    }
    public void setProducts(List<Product> products) {
    	this.products=products;
    }
}
