
package com.devglan.model;
import javax.persistence.*;
import com.devglan.model.Commande;

@SuppressWarnings("serial")
@Entity
@Table(name = "commandes")

public class Commande implements java.io.Serializable {


	@Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
	private int id;
	@Column
	private int quantity;
	@ManyToOne
    @JoinColumn(name = "Order_id")
	private Order order;
	@ManyToOne
    @JoinColumn(name = "Product_id")
	private Product product;
	


	public Commande() {
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Order getOrder() {
		return this.order;
	}

	public void setOrder(Order order) {
		this.order=order;
	}

	public Product getProduct() {
		return this.product;
	}

	public void setProduct(Product product) {
		this.product=product;
	}


	public int getQuantity() {
		return this.quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	}