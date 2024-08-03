package br.com.projaeto.angular.springboot.api.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.projaeto.angular.springboot.api.repository.Repositorio;

@RestController
public class Controller {

    private Repositorio acao;
    
    @GetMapping("/")
    public String teste(){
        return "Hello World";
    }
}
