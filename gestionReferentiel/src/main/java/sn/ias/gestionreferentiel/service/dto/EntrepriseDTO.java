package sn.ias.gestionreferentiel.service.dto;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Objects;

/**
 * A DTO for the {@link sn.ias.gestionreferentiel.domain.Entreprise} entity.
 */
public class EntrepriseDTO implements Serializable {

    private Long id;

    private String nom;

    private String ninea;

    private LocalDate dateCreation;

    private Integer nbreEmploye;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getNinea() {
        return ninea;
    }

    public void setNinea(String ninea) {
        this.ninea = ninea;
    }

    public LocalDate getDateCreation() {
        return dateCreation;
    }

    public void setDateCreation(LocalDate dateCreation) {
        this.dateCreation = dateCreation;
    }

    public Integer getNbreEmploye() {
        return nbreEmploye;
    }

    public void setNbreEmploye(Integer nbreEmploye) {
        this.nbreEmploye = nbreEmploye;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof EntrepriseDTO)) {
            return false;
        }

        EntrepriseDTO entrepriseDTO = (EntrepriseDTO) o;
        if (this.id == null) {
            return false;
        }
        return Objects.equals(this.id, entrepriseDTO.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id);
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "EntrepriseDTO{" +
            "id=" + getId() +
            ", nom='" + getNom() + "'" +
            ", ninea='" + getNinea() + "'" +
            ", dateCreation='" + getDateCreation() + "'" +
            ", nbreEmploye=" + getNbreEmploye() +
            "}";
    }
}
