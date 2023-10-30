package com.devglan.model;
import java.util.HashSet;
import java.util.Set;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
@Entity
@Table(name="clients")
public class Client {
	@Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
	private int id;
	@Column
	private String firstName;
	@Column
	private String lastName;
	@Column
	private String email;
	@Column
    private String telephone;
	@JsonIgnore
	@OneToMany(targetEntity=Order.class,mappedBy = "client")
	private Set<Order> orders= new HashSet<Order>();
	public Client() {
		
	}
	public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFirstName() {
        return this.firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    public String getEmail() {
    	return this.email;
    }
    public void setEmail(String email) {
    	this.email=email;
    }
    public String getTelephone() {
        return this.telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }
    public Set<Order> getOrders(){
    	return this.orders;
    }
    public void setOrders(Set<Order> orders) {
    	this.orders=orders;
    }
}
