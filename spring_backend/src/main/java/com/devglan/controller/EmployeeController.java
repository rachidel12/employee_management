package com.devglan.controller;

import com.devglan.model.ApiResponse;
import com.devglan.model.Employee;
import com.devglan.model.EmployeeDto;
import com.devglan.model.Product;
import com.devglan.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@SuppressWarnings("unused")
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/employees")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;


    @PostMapping
    public ApiResponse<Employee> saveemployee(@RequestBody EmployeeDto employee){
        return new ApiResponse<>(HttpStatus.OK.value(), "User saved successfully.",employeeService.save(employee));
    }

    // @PreAuthorize("hasRole('ADMIN')")
    @GetMapping
    public ApiResponse<List<Employee>> listEmployee(){
        return new ApiResponse<>(HttpStatus.OK.value(), "Employee list fetched successfully.",employeeService.findAll());
    }
//    @GetMapping("/{id}")
//    @CrossOrigin(origins = "http://localhost:3000")
//    public ResponseEntity<Employee> findProductById(@PathVariable int id) {
//        Optional<Employee> employee = Optional.of(employeeService.findById(id));
//        return employee.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
//    }
    @GetMapping("/{id}")
    public ApiResponse<Employee> getOne(@PathVariable int id){
        return new ApiResponse<>(HttpStatus.OK.value(), "Employee fetched successfully.",employeeService.findById(id));
    }
    @PutMapping
    public ApiResponse<EmployeeDto> update(@RequestBody EmployeeDto employeeDto) {
        return new ApiResponse<>(HttpStatus.OK.value(), "Employee updated successfully.",employeeService.update(employeeDto));
    }
    @DeleteMapping("/{id}")
    public ApiResponse<Void> delete(@PathVariable int id) {
        employeeService.delete(id);
        return new ApiResponse<>(HttpStatus.OK.value(), "Employee deleted successfully.", null);
    }
    @GetMapping("/{role}")
    public ApiResponse<List<Employee>> listEmployee(@PathVariable String role){
        return new ApiResponse<>(HttpStatus.OK.value(), "Employee list fetched successfully.",employeeService.findAll());
    }
}
