package ru.lapushkin.hrassistant.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import ru.lapushkin.hrassistant.model.PersonModel;

import java.time.LocalDate;

/**
 * PersonDto Class
 *
 * @author v.lapushkin
 * @version 12.01.2022
 */
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PersonDto {
    private String id;
    private String firstName;
    private String lastName;
    private String middleName;
    private LocalDate dateOfBirth;
    private String post;
    private String linkToPhoto;

    static public PersonDto fromModel(PersonModel model) {
        return PersonDto.builder()
                .id(model.getId())
                .firstName(model.getFirstName())
                .lastName(model.getLastName())
                .middleName(model.getMiddleName())
                .dateOfBirth(model.getDateOfBirth())
                .post(model.getPost())
                .linkToPhoto(model.getLinkToPhoto())
                .build();
    }
}
