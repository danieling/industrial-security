/**
 * (C) 2017 Agilysys NV, LLC.  All Rights Reserved.  Confidential Information of Agilysys NV, LLC.
 */
package com.dharbor.industrialsecurity.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Contract extends ModelBase {
    @Column(name = "idempleado", updatable = false, insertable = false)
    private Long employeeId;

    @ManyToOne
    @JoinColumn(name = "idempleado")
    @JsonIgnoreProperties("contracts")
    private Employee employee;

    @ManyToOne
    @JoinColumn(name = "idposition")
    private Position position;

    @Temporal(TemporalType.DATE)
    private Date initDate;

    @Temporal(TemporalType.DATE)
    private Date endDate;

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    public Position getPosition() {
        return position;
    }

    public Long getEmployeeId() {
        return employeeId;
    }

    public void setEmployeeId(Long employeeId) {
        this.employeeId = employeeId;
    }

    public void setPosition(Position position) {
        this.position = position;
    }

    public Date getInitDate() {
        return initDate;
    }

    public void setInitDate(Date initDate) {
        this.initDate = initDate;
    }

    public Date getEndDate() {
        return endDate;
    }

    public void setEndDate(Date endDate) {
        this.endDate = endDate;
    }

}
