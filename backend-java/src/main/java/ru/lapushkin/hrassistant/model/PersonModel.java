package ru.lapushkin.hrassistant.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import ru.lapushkin.hrassistant.dto.PersonDto;

import javax.validation.constraints.NotNull;
import java.time.LocalDate;

/**
 * PersonModel Class
 *
 * @author v.lapushkin
 * @version 12.01.2022
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder(toBuilder = true)
@Document("person")
public class PersonModel {
    @Id
    private String id;
    @NotNull
    private String firstName;
    @NotNull
    private String lastName;
    private String middleName;
    private LocalDate dateOfBirth;
    private String post;
    private String linkToPhoto;

    public PersonModel update(PersonModel newData) {
        return this.toBuilder()
                .firstName(newData.getFirstName())
                .lastName(newData.getLastName())
                .middleName(newData.getMiddleName())
                .dateOfBirth(newData.getDateOfBirth())
                .post(newData.getPost())
                .linkToPhoto(newData.getLinkToPhoto())
                .build();
    }

    static public PersonModel fromDto(PersonDto dto) {
        return PersonModel.builder()
                .id(dto.getId())
                .firstName(dto.getFirstName())
                .lastName(dto.getLastName())
                .middleName(dto.getMiddleName())
                .dateOfBirth(dto.getDateOfBirth())
                .post(dto.getPost())
                .linkToPhoto(dto.getLinkToPhoto())
                .build();
    }
}
