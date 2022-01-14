package ru.lapushkin.hrassistant.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.lapushkin.hrassistant.dto.PersonDto;
import ru.lapushkin.hrassistant.services.PersonService;

import java.util.List;

/**
 * PersonController Class
 *
 * @author v.lapushkin
 * @version 12.01.2022
 */
@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/rest/person")
public class PersonController {
    private final PersonService service;

    @GetMapping
    ResponseEntity<List<PersonDto>> getList() {
        return new ResponseEntity<>(service.getList(), HttpStatus.OK);
    }

    @PostMapping
    ResponseEntity<PersonDto> create(@RequestBody PersonDto dto) {
        return new ResponseEntity<>(service.create(dto), HttpStatus.OK);
    }

    @PutMapping
    ResponseEntity<PersonDto> update(@RequestBody PersonDto dto, @RequestParam String id) {
        return new ResponseEntity<>(service.update(id, dto), HttpStatus.OK);
    }

    @DeleteMapping
    ResponseEntity deleteById(@RequestParam String id) {
        service.deleteById(id);
        return new ResponseEntity(HttpStatus.OK);
    }

    @GetMapping("/{id}")
    ResponseEntity<PersonDto> getById(@PathVariable String id) {
        return new ResponseEntity<>(service.getById(id), HttpStatus.OK);
    }
}
