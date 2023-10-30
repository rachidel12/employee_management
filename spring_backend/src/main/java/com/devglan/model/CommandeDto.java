package com.devglan.model;



public class CommandeDto {

	private int id;
	private int quantity;
	private int order;
	private int product;

	public CommandeDto() {
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
	public int getOrder() {
		return this.order;
	}

	public void setOrder(int order) {
		this.order=order;
	}

	public int getProduct() {
		return this.product;
	}

	public void setProduct(int product) {
		this.product=product;
	}
	public int getQuantity() {
		return this.quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

}
