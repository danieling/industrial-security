package com.dharbor.industrialsecurity.repositories;

import com.dharbor.industrialsecurity.model.Category;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface CategoryRepository extends CrudRepository<Category, Long> {
    Optional<Category> findByCode(String code);
}
