package com.dharbor.industrialsecurity.controller;

import com.dharbor.industrialsecurity.model.Employee;
import com.dharbor.industrialsecurity.services.EmployeeServ;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class EmployeeCtrl {

    @Autowired
    private EmployeeServ employeeServ;

    @RequestMapping("/employees")
    public List<Employee> getEmployees(){
        return employeeServ.getEmployees();
    }

    @RequestMapping("/employees/{id}")
    public Employee getEmployee(@PathVariable Long id){
        return employeeServ.getEmployee(id);
    }

    @RequestMapping("/employees/featured")
    public Employee getEmployeeFeatured(){
        return employeeServ.getEmployeeFeatured();
    }
}
