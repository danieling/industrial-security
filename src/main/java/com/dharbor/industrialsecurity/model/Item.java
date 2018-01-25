/**
 * (C) 2017 Agilysys NV, LLC.  All Rights Reserved.  Confidential Information of Agilysys NV, LLC.
 */
package com.dharbor.industrialsecurity.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.List;

@Entity
public class Item extends ModelBase{
    private String name;
    private String label;
    private String image;
    private String category;
    private String price;

    @OneToMany(
            mappedBy = "item",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    @JsonIgnoreProperties("item")  //evita recursividad ciclica
    private List<Comment> comments;

    private String description;
    private Boolean featured;
    private String code;

    @OneToOne(fetch = FetchType.EAGER)
    private SubCategory subCategory;

    public Item(){
        super();
    }



    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public List<Comment> getComments() {
        return comments;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Boolean getFeatured() {
        return featured;
    }

    public void setFeatured(Boolean featured) {
        this.featured = featured;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCode() {
        return code;
    }

    public Item(String name, String label, String image, String category, String price, List<Comment> comments, String description, Boolean featured, String code, SubCategory subCategory) {
        super();
        this.name = name;
        this.label = label;
        this.image = image;
        this.category = category;
        this.price = price;
        this.comments = comments;
        this.description = description;
        this.featured = featured;
        this.code = code;
        this.subCategory = subCategory;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public SubCategory getSubCategory() {
        return subCategory;
    }

    public void setSubCategory(SubCategory subCategory) {
        this.subCategory = subCategory;
    }
}
