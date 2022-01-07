package com.amirsproject.restservice;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@CrossOrigin(origins = "http://54.197.40.117")
public class Controller {
 
    @GetMapping("/getserverdate")
    public ServerDateResource getserverdate() {
		return  new ServerDateResource();
	}

    @GetMapping("/")
    public ServerDateResource root() {
		return new ServerDateResource();
	}    
    
}
