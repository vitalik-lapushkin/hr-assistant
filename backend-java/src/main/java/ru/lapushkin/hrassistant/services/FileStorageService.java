package ru.lapushkin.hrassistant.services;

import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

/**
 * FileStorageService Class
 *
 * @author v.lapushkin
 * @version 14.01.2022
 */
@Service
public class FileStorageService {

    @Value("${filestorage.path}")
    String path;

    @SneakyThrows
    public void save(MultipartFile file) {
        var path = Paths.get(this.path).resolve(file.getOriginalFilename());
        Files.copy(file.getInputStream(), path, StandardCopyOption.REPLACE_EXISTING);
    }
}
