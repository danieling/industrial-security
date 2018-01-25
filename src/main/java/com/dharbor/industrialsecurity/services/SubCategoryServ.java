package com.dharbor.industrialsecurity.services;

import com.dharbor.industrialsecurity.repositories.SubCategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SubCategoryServ {

    @Autowired
    private SubCategoryRepository subCategoryRepository;


}
