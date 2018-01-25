package com.dharbor.industrialsecurity.repositories;

import com.dharbor.industrialsecurity.model.Comment;
import org.springframework.data.repository.CrudRepository;

public interface CommentRepository extends CrudRepository<Comment, Long>{
}
