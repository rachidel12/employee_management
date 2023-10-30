package com.devglan.model;

public class OrderDto {

	private int id;
	private String date;
	private int client;
//	private int statut;
	public OrderDto() {
		
	}
	public void setId(int id) {
		this.id=id;
	}
	public int getId() {
		return this.id;
	}
	public void setDate(String date) {
		this.date=date;
	}
	public String getDate() {
		return this.date;
	}
	public void setClient(int client) {
		this.client=client;
	}
	public int getClient() {
		return this.client;
	}
//	public void setSatut(int statut) {
//		this.statut=statut;
//	}
//	public int getSatut() {
//		return this.statut;
//	}
}
