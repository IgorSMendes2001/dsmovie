package com.dsmovie.backend.repositories;

import com.dsmovie.backend.entities.Score;
import com.dsmovie.backend.entities.ScorePK;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ScoreRepository extends JpaRepository<Score,ScorePK>{
    
}
