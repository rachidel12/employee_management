package com.devglan.model;

import java.util.List;

//import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.query.Param;


@EnableJpaRepositories
public interface ProductRepository extends JpaRepository<Product, Integer>{
	@Query("SELECT p.category, count(p) as count FROM Product p GROUP BY p.category")
	List<Object> productpercat();

	 }
//@Query("SELECT p FROM Product p JOIN p.category c WHERE c.id = :category_id")
//
//List<Product> findProductByIdCategorie(@Param("category_id") int category_id) ;