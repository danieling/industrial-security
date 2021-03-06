package com.dharbor.industrialsecurity.services;

import com.dharbor.industrialsecurity.model.Item;
import com.dharbor.industrialsecurity.repositories.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ItemService {

    @Autowired
    private ItemRepository itemRepository;

    public List<Item> getItems(){
        List<Item> items = new ArrayList<>();
        itemRepository.findAll().iterator().forEachRemaining(items::add);
        return items;
    }

    public Item getItem(Long id){
        return itemRepository.findOne(id);
    }


    public Item getItemFeatured() {
        return itemRepository.findByFeaturedIsTrue();
    }

    public void addItem(Item item){
        itemRepository.save(item);
    }

    public void delItem(Long id){
        itemRepository.delete(id);
    }
}
