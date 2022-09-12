package sn.ias.gestionreferentiel.service.dto;

import java.io.Serializable;
import java.util.Objects;

/**
 * A DTO for the {@link sn.ias.gestionreferentiel.domain.TypeSourceFinancement} entity.
 */
public class TypeSourceFinancementDTO implements Serializable {

    private Long id;

    private String code;

    private String libelle;

    private EntrepriseDTO entrepriseTypeSourceFinancement;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getLibelle() {
        return libelle;
    }

    public void setLibelle(String libelle) {
        this.libelle = libelle;
    }

    public EntrepriseDTO getEntrepriseTypeSourceFinancement() {
        return entrepriseTypeSourceFinancement;
    }

    public void setEntrepriseTypeSourceFinancement(EntrepriseDTO entrepriseTypeSourceFinancement) {
        this.entrepriseTypeSourceFinancement = entrepriseTypeSourceFinancement;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof TypeSourceFinancementDTO)) {
            return false;
        }

        TypeSourceFinancementDTO typeSourceFinancementDTO = (TypeSourceFinancementDTO) o;
        if (this.id == null) {
            return false;
        }
        return Objects.equals(this.id, typeSourceFinancementDTO.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id);
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "TypeSourceFinancementDTO{" +
            "id=" + getId() +
            ", code='" + getCode() + "'" +
            ", libelle='" + getLibelle() + "'" +
            ", entrepriseTypeSourceFinancement=" + getEntrepriseTypeSourceFinancement() +
            "}";
    }
}
