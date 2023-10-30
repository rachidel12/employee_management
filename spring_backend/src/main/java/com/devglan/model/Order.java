package com.devglan.model;

import java.util.HashSet;

import java.util.Set;
import java.sql.Timestamp;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@SuppressWarnings("serial")
@Entity
@Table(name = "orders")
public class Order implements java.io.Serializable {
	@Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
	private int id;
	@Column
	private Timestamp date ;
	@ManyToOne
    @JoinColumn(name = "client_id")
	private Client client;
	@JsonIgnore
	@OneToMany(targetEntity=Commande.class,mappedBy = "order")
	private Set<Commande> commande= new HashSet<Commande>();
	@Column
	private int statut ;
	
	
public Order() {	
	}
	public void setId(int id) {
		this.id=id;
	}
	public int getId() {
		return this.id;
	}
	public void setDate(Timestamp date) {
		this.date=date;
	}
	public Timestamp getDate() {
		return this.date;
	}
	public void setSatut(int statut) {
		this.statut=statut;
	}
	public int getSatut() {
		return this.statut;
	}
	public Client getClient() {
		return this.client;
	}
	public void setClient(Client client) {
		this.client=client;
	}
	public Set<Commande> getCommande(){
    	return this.commande;
    }
    public void setCommande(Set<Commande> commande) {
    	this.commande=commande;
    }
}
