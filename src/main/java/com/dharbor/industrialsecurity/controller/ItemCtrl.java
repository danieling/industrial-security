package com.dharbor.industrialsecurity.controller;

import com.dharbor.industrialsecurity.model.Item;
import com.dharbor.industrialsecurity.services.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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

    @RequestMapping(value = "/items", method = RequestMethod.POST)
    public void addItem(@RequestBody Item item){
        itemService.addItem(item);
    }

    @RequestMapping(value = "/items/{id}", method = RequestMethod.PUT)
    public void updateItem(@RequestBody Item item){
        itemService.addItem(item);
    }

    @RequestMapping(value = "/items/{id}", method = RequestMethod.DELETE)
    public void delItem(@PathVariable Long id){
        itemService.delItem(id);
    }
}
