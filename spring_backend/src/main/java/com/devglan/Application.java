package com.devglan;



import java.util.HashSet;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.devglan.model.Employee;
import com.devglan.dao.EmployeeDao;


@SuppressWarnings("unused")
@SpringBootApplication

public class Application {

@Autowired
	private EmployeeDao userDao;
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
    @Bean
    CommandLineRunner runner(){
        return args -> {
            userDao.save(new Employee(1,"user", "user", "user", "$2a$04$1.YhMIgNX/8TkCKGFUONWO1waedKhQ5KrnB30fl0Q01QKqmzLf.Zi", 5000, 6666666, "Manager"));
            userDao.save(new Employee(2, "admin", "admin", "admin", "$2a$04$KNLUwOWHVQZVpXyMBNc7JOzbLiBjb9Tk9bP7KNcPI12ICuvzXQQKG", 10000, 6666666, "Directeur"));
            // prodServ.save(new Product("airpods", 1000, "https://uno.ma/media/catalog/product/cache/1/image/900x900/9df78eab33525d08d6e5fb8d27136e95/a/p/apple-airpods-3-gen-uno-maroc3.jpeg", 100, "électroniques"));
        };
    }
}