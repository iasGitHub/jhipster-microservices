package sn.ias.gestionreferentiel.repository.rowmapper;

import io.r2dbc.spi.Row;
import java.time.LocalDate;
import java.util.function.BiFunction;
import org.springframework.stereotype.Service;
import sn.ias.gestionreferentiel.domain.Entreprise;

/**
 * Converter between {@link Row} to {@link Entreprise}, with proper type conversions.
 */
@Service
public class EntrepriseRowMapper implements BiFunction<Row, String, Entreprise> {

    private final ColumnConverter converter;

    public EntrepriseRowMapper(ColumnConverter converter) {
        this.converter = converter;
    }

    /**
     * Take a {@link Row} and a column prefix, and extract all the fields.
     * @return the {@link Entreprise} stored in the database.
     */
    @Override
    public Entreprise apply(Row row, String prefix) {
        Entreprise entity = new Entreprise();
        entity.setId(converter.fromRow(row, prefix + "_id", Long.class));
        entity.setNom(converter.fromRow(row, prefix + "_nom", String.class));
        entity.setNinea(converter.fromRow(row, prefix + "_ninea", String.class));
        entity.setDateCreation(converter.fromRow(row, prefix + "_date_creation", LocalDate.class));
        entity.setNbreEmploye(converter.fromRow(row, prefix + "_nbre_employe", Integer.class));
        return entity;
    }
}
