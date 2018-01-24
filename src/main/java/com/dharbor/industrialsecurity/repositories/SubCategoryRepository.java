/**
 * (C) 2017 Agilysys NV, LLC.  All Rights Reserved.  Confidential Information of Agilysys NV, LLC.
 */
package com.dharbor.industrialsecurity.repositories;

import com.dharbor.industrialsecurity.model.SubCategory;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface SubCategoryRepository extends CrudRepository<SubCategory, Long> {
    Optional<SubCategory> findByCode(String code);
}