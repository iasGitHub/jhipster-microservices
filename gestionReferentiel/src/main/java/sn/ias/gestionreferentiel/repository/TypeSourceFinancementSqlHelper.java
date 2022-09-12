package sn.ias.gestionreferentiel.repository;

import java.util.ArrayList;
import java.util.List;
import org.springframework.data.relational.core.sql.Column;
import org.springframework.data.relational.core.sql.Expression;
import org.springframework.data.relational.core.sql.Table;

public class TypeSourceFinancementSqlHelper {

    public static List<Expression> getColumns(Table table, String columnPrefix) {
        List<Expression> columns = new ArrayList<>();
        columns.add(Column.aliased("id", table, columnPrefix + "_id"));
        columns.add(Column.aliased("code", table, columnPrefix + "_code"));
        columns.add(Column.aliased("libelle", table, columnPrefix + "_libelle"));

        columns.add(
            Column.aliased("entreprise_type_source_financement_id", table, columnPrefix + "_entreprise_type_source_financement_id")
        );
        return columns;
    }
}
