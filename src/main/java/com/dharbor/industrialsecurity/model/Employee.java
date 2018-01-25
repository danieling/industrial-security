/**
 * (C) 2017 Agilysys NV, LLC.  All Rights Reserved.  Confidential Information of Agilysys NV, LLC.
 */
package com.dharbor.industrialsecurity.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Employee extends ModelBase {
    private String firstName;
    private String lastName;
    private String image;
    private String jobPosition;
    private String jobCode;
    private boolean featured;
    @Column(length = 1000)
    private String jobDescription;

    @OneToMany(mappedBy = "employee", fetch = FetchType.EAGER, cascade = { CascadeType.ALL })
    @JsonIgnoreProperties("employee")
    private Set<Contract> contracts = new HashSet<>();

    public Employee(){}

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getJobPosition() {
        return jobPosition;
    }

    public void setJobPosition(String jobPosition) {
        this.jobPosition = jobPosition;
    }

    public String getJobCode() {
        return jobCode;
    }

    public void setJobCode(String jobCode) {
        this.jobCode = jobCode;
    }

    public boolean getFeatured() {
        return featured;
    }

    public void setFeatured(boolean featured) {
        this.featured = featured;
    }

    public String getJobDescription() {
        return jobDescription;
    }

    public void setJobDescription(String jobDescription) {
        this.jobDescription = jobDescription;
    }

    public Employee(String firstName, String lastName, String image, String jobPosition, String jobCode, boolean featured, String jobDescription, Set<Contract> contracts) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.image = image;
        this.jobPosition = jobPosition;
        this.jobCode = jobCode;
        this.featured = featured;
        this.jobDescription = jobDescription;
        this.contracts = contracts;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Set<Contract> getContracts() {
        return contracts;
    }

    public void setContracts(Set<Contract> contracts) {
        this.contracts = contracts;
    }
}
