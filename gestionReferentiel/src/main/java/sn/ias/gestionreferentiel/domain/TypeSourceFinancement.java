package sn.ias.gestionreferentiel.domain;

import java.io.Serializable;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

/**
 * A TypeSourceFinancement.
 */
@Table("type_source_financement")
public class TypeSourceFinancement implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column("id")
    private Long id;

    @Column("code")
    private String code;

    @Column("libelle")
    private String libelle;

    @Transient
    private Entreprise entrepriseTypeSourceFinancement;

    @Column("entreprise_type_source_financement_id")
    private Long entrepriseTypeSourceFinancementId;

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public TypeSourceFinancement id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCode() {
        return this.code;
    }

    public TypeSourceFinancement code(String code) {
        this.setCode(code);
        return this;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getLibelle() {
        return this.libelle;
    }

    public TypeSourceFinancement libelle(String libelle) {
        this.setLibelle(libelle);
        return this;
    }

    public void setLibelle(String libelle) {
        this.libelle = libelle;
    }

    public Entreprise getEntrepriseTypeSourceFinancement() {
        return this.entrepriseTypeSourceFinancement;
    }

    public void setEntrepriseTypeSourceFinancement(Entreprise entreprise) {
        this.entrepriseTypeSourceFinancement = entreprise;
        this.entrepriseTypeSourceFinancementId = entreprise != null ? entreprise.getId() : null;
    }

    public TypeSourceFinancement entrepriseTypeSourceFinancement(Entreprise entreprise) {
        this.setEntrepriseTypeSourceFinancement(entreprise);
        return this;
    }

    public Long getEntrepriseTypeSourceFinancementId() {
        return this.entrepriseTypeSourceFinancementId;
    }

    public void setEntrepriseTypeSourceFinancementId(Long entreprise) {
        this.entrepriseTypeSourceFinancementId = entreprise;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof TypeSourceFinancement)) {
            return false;
        }
        return id != null && id.equals(((TypeSourceFinancement) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "TypeSourceFinancement{" +
            "id=" + getId() +
            ", code='" + getCode() + "'" +
            ", libelle='" + getLibelle() + "'" +
            "}";
    }
}
