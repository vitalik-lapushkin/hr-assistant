package ru.lapushkin.hrassistant.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import ru.lapushkin.hrassistant.model.PersonModel;

/**
 * PersonRepository Class
 *
 * @author v.lapushkin
 * @version 12.01.2022
 */
public interface IPersonRepository extends MongoRepository<PersonModel, String> {
}
