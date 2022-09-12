package sn.ias.gestionreferentiel.repository;

import java.util.ArrayList;
import java.util.List;
import org.springframework.data.relational.core.sql.Column;
import org.springframework.data.relational.core.sql.Expression;
import org.springframework.data.relational.core.sql.Table;

public class EntrepriseSqlHelper {

    public static List<Expression> getColumns(Table table, String columnPrefix) {
        List<Expression> columns = new ArrayList<>();
        columns.add(Column.aliased("id", table, columnPrefix + "_id"));
        columns.add(Column.aliased("nom", table, columnPrefix + "_nom"));
        columns.add(Column.aliased("ninea", table, columnPrefix + "_ninea"));
        columns.add(Column.aliased("date_creation", table, columnPrefix + "_date_creation"));
        columns.add(Column.aliased("nbre_employe", table, columnPrefix + "_nbre_employe"));

        return columns;
    }
}
