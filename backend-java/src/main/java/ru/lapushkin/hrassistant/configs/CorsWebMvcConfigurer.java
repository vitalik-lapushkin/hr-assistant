package ru.lapushkin.hrassistant.configs;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * CorsWebMvcConfigurer Class
 *
 * @author v.lapushkin
 * @version 14.01.2022
 */
@Component
public class CorsWebMvcConfigurer implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**").allowedOrigins("*");
    }
}
