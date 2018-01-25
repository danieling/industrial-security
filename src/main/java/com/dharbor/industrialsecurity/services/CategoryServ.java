package com.dharbor.industrialsecurity.services;


import com.dharbor.industrialsecurity.repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoryServ {

    @Autowired
    private CategoryRepository categoryRepository;
}
