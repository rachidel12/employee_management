package com.devglan.dao;

import com.devglan.model.Employee;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeDao extends CrudRepository<Employee, Integer> {

    Employee findByUsername(String username);
}
