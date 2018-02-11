package com.dharbor.industrialsecurity.controller;

import com.dharbor.industrialsecurity.model.Employee;
import com.dharbor.industrialsecurity.services.EmployeeServ;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @RequestMapping(value = "/employees", method = RequestMethod.POST)
    public void addEmployee(@RequestBody Employee employee){
        employeeServ.addEmployee(employee);
    }

    @RequestMapping(value = "/employees/{id}", method = RequestMethod.PUT)
    public void updateEmployee(@RequestBody Employee employee){
        employeeServ.addEmployee(employee);
    }

    @RequestMapping(value = "/employees/{id}", method = RequestMethod.DELETE)
    public void delEmployee(@PathVariable Long id){
        employeeServ.delEmployee(id);
    }
}
