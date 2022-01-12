package ru.lapushkin.hrassistant.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.lapushkin.hrassistant.dto.PersonDto;
import ru.lapushkin.hrassistant.model.PersonModel;
import ru.lapushkin.hrassistant.repositories.IPersonRepository;

import java.util.List;
import java.util.stream.Collectors;

/**
 * PersonService Class
 *
 * @author v.lapushkin
 * @version 12.01.2022
 */
@RequiredArgsConstructor
@Service
public class PersonService {
    private final IPersonRepository repository;

    public List<PersonDto> getList() {
        return repository
                .findAll()
                .stream()
                .map(PersonDto::fromModel)
                .collect(Collectors.toList());
    }

    public PersonDto create(PersonDto dto) {
        var model = PersonModel.fromDto(dto);
        var saved = repository.save(model);
        return PersonDto.fromModel(saved);
    }

    public PersonDto update(String id, PersonDto dto) {
        if (id == null) {
            throw new RuntimeException("Id is needed for updating");
        }
        var person = repository.findById(id);
        if (person.isEmpty()) {
            throw new RuntimeException("There is no person with id " + id);
        }
        var model = PersonModel.fromDto(dto);
        var updatedModel = person.get().update(model);
        var saved = repository.save(updatedModel);
        return PersonDto.fromModel(saved);
    }

    public PersonDto getById(String id) {
        var person = repository.findById(id).get();
        return PersonDto.fromModel(person);
    }

    public void deleteById(String id) {
        repository.deleteById(id);
    }
}
