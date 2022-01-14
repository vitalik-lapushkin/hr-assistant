package ru.lapushkin.hrassistant.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import ru.lapushkin.hrassistant.services.FileStorageService;

/**
 * FilesController Class
 *
 * @author v.lapushkin
 * @version 14.01.2022
 */
@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/static")
public class FilesController {
    private final FileStorageService service;

    @PutMapping
    ResponseEntity save(@RequestParam("file") MultipartFile file) {
        service.save(file);
        return new ResponseEntity(HttpStatus.OK);
    }
}
