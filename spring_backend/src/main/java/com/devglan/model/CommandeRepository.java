
package com.devglan.model;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


public interface CommandeRepository extends JpaRepository<Commande, Integer>{
	 
	@Query(value = "SELECT c, (c.quantity * p.price) as totalp FROM Commande c JOIN Product p ON c.product= p.id JOIN Order o ON c.order=o.id WHERE o.id = :order_id")
	public List<Object> sumQuantities(@Param("order_id") int order_id);
	
	@Query(value = "SELECT c, (c.quantity * p.price) as totalp FROM Commande c JOIN Product p ON c.product= p.id ")
	public List<Object> sumCommande();
	@Query("SELECT c,sum(c.quantity*p.price) FROM Commande c JOIN Product p ON c.product=p GROUP BY p.id")
	List<Object> countpquantity();
}
	