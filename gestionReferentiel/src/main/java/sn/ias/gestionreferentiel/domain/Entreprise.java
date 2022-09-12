package sn.ias.gestionreferentiel.domain;

import java.io.Serializable;
import java.time.LocalDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

/**
 * A Entreprise.
 */
@Table("entreprise")
public class Entreprise implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column("id")
    private Long id;

    @Column("nom")
    private String nom;

    @Column("ninea")
    private String ninea;

    @Column("date_creation")
    private LocalDate dateCreation;

    @Column("nbre_employe")
    private Integer nbreEmploye;

    // jhipster-needle-entity-add-field - JHipster will add fields here

    public Long getId() {
        return this.id;
    }

    public Entreprise id(Long id) {
        this.setId(id);
        return this;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNom() {
        return this.nom;
    }

    public Entreprise nom(String nom) {
        this.setNom(nom);
        return this;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getNinea() {
        return this.ninea;
    }

    public Entreprise ninea(String ninea) {
        this.setNinea(ninea);
        return this;
    }

    public void setNinea(String ninea) {
        this.ninea = ninea;
    }

    public LocalDate getDateCreation() {
        return this.dateCreation;
    }

    public Entreprise dateCreation(LocalDate dateCreation) {
        this.setDateCreation(dateCreation);
        return this;
    }

    public void setDateCreation(LocalDate dateCreation) {
        this.dateCreation = dateCreation;
    }

    public Integer getNbreEmploye() {
        return this.nbreEmploye;
    }

    public Entreprise nbreEmploye(Integer nbreEmploye) {
        this.setNbreEmploye(nbreEmploye);
        return this;
    }

    public void setNbreEmploye(Integer nbreEmploye) {
        this.nbreEmploye = nbreEmploye;
    }

    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Entreprise)) {
            return false;
        }
        return id != null && id.equals(((Entreprise) o).id);
    }

    @Override
    public int hashCode() {
        // see https://vladmihalcea.com/how-to-implement-equals-and-hashcode-using-the-jpa-entity-identifier/
        return getClass().hashCode();
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Entreprise{" +
            "id=" + getId() +
            ", nom='" + getNom() + "'" +
            ", ninea='" + getNinea() + "'" +
            ", dateCreation='" + getDateCreation() + "'" +
            ", nbreEmploye=" + getNbreEmploye() +
            "}";
    }
}
