package com.dharbor.industrialsecurity.controller;

import com.dharbor.industrialsecurity.model.Item;
import com.dharbor.industrialsecurity.services.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@RestController
public class ItemCtrl {

    @Autowired
    private ItemService itemService;

    @RequestMapping("/items")
    public List<Item> getItems(){
        return itemService.getItems();
    }

    @RequestMapping("/items/featured")
    public Item getItemFeatured(){
        return itemService.getItemFeatured();
    }

    @RequestMapping("/items/{id}")
    public Item getItem(@PathVariable Long id){
        return itemService.getItem(id);
    }
}
