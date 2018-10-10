package eu.loxon.servicejava8b.controller;

import java.net.InetAddress;
import java.net.UnknownHostException;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import eu.loxon.servicejava8b.dto.HelloResponse;

@RestController
public class HelloBController {

	@GetMapping("/hello")
	public ResponseEntity<HelloResponse> hello() throws UnknownHostException {
		return ResponseEntity.ok(new HelloResponse(
				"Hello, I am the B service (host: " + InetAddress.getLocalHost().getHostName() + ")"));
	}

}
