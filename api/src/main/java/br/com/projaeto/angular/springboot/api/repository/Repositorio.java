package br.com.projaeto.angular.springboot.api.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.projaeto.angular.springboot.api.model.Cliente;

@Repository
public interface Repositorio extends CrudRepository<Cliente, Long>{

    
}
