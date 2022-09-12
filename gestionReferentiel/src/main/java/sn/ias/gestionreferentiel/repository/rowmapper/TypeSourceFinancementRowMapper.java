package sn.ias.gestionreferentiel.repository.rowmapper;

import io.r2dbc.spi.Row;
import java.util.function.BiFunction;
import org.springframework.stereotype.Service;
import sn.ias.gestionreferentiel.domain.TypeSourceFinancement;

/**
 * Converter between {@link Row} to {@link TypeSourceFinancement}, with proper type conversions.
 */
@Service
public class TypeSourceFinancementRowMapper implements BiFunction<Row, String, TypeSourceFinancement> {

    private final ColumnConverter converter;

    public TypeSourceFinancementRowMapper(ColumnConverter converter) {
        this.converter = converter;
    }

    /**
     * Take a {@link Row} and a column prefix, and extract all the fields.
     * @return the {@link TypeSourceFinancement} stored in the database.
     */
    @Override
    public TypeSourceFinancement apply(Row row, String prefix) {
        TypeSourceFinancement entity = new TypeSourceFinancement();
        entity.setId(converter.fromRow(row, prefix + "_id", Long.class));
        entity.setCode(converter.fromRow(row, prefix + "_code", String.class));
        entity.setLibelle(converter.fromRow(row, prefix + "_libelle", String.class));
        entity.setEntrepriseTypeSourceFinancementId(converter.fromRow(row, prefix + "_entreprise_type_source_financement_id", Long.class));
        return entity;
    }
}
