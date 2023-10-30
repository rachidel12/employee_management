package com.devglan.service;

import com.devglan.model.Employee;
import com.devglan.model.EmployeeDto;

import java.util.List;


public interface EmployeeService {

    Employee save(EmployeeDto user);
    List<Employee> findAll();
    void delete(int id);

    Employee findOne(String username);

    Employee findById(int id);

    EmployeeDto update(EmployeeDto userDto);

}
