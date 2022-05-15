package com.dsmovie.backend.controllers;

import com.dsmovie.backend.dto.MovieDTO;
import com.dsmovie.backend.dto.ScoreDTO;
import com.dsmovie.backend.services.ScoreService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/scores")
public class ScoreController {

    @Autowired
    private ScoreService service;

    @PutMapping
    public MovieDTO saveScore(@RequestBody ScoreDTO dto){
        MovieDTO movieDTO=service.saveScore(dto);
        return movieDTO;
    }
}

