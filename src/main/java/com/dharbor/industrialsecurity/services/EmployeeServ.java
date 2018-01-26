package com.dharbor.industrialsecurity.services;

import com.dharbor.industrialsecurity.model.Employee;
import com.dharbor.industrialsecurity.repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class EmployeeServ {
    @Autowired
    private EmployeeRepository employeeRepository;

    public List<Employee> getEmployees(){
        List<Employee> employees = new ArrayList<>();
        employeeRepository.findAll().iterator().forEachRemaining(employees::add);
        return employees;
    }

    public Employee getEmployee(Long id){
        return employeeRepository.findOne(id);
    }

    public Employee getEmployeeFeatured(){
        return employeeRepository.findByFeaturedIsTrue();
    }
}
