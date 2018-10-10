package eu.loxon.servicejava8a.controller;

import java.net.InetAddress;
import java.net.UnknownHostException;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import eu.loxon.servicejava8a.dto.HelloResponse;

@RestController
public class HelloAController {

	@GetMapping("/hello")
	public ResponseEntity<HelloResponse> hello() throws UnknownHostException {
		return ResponseEntity.ok(
				new HelloResponse("Hello, I'm the A service (host: " + InetAddress.getLocalHost().getHostName() + ")"));
	}

}
