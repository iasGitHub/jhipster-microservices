package sn.ias.gestionreferentiel.repository;

import static org.springframework.data.relational.core.query.Criteria.where;

import io.r2dbc.spi.Row;
import io.r2dbc.spi.RowMetadata;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Optional;
import java.util.function.BiFunction;
import org.springframework.data.domain.Pageable;
import org.springframework.data.r2dbc.convert.R2dbcConverter;
import org.springframework.data.r2dbc.core.R2dbcEntityOperations;
import org.springframework.data.r2dbc.core.R2dbcEntityTemplate;
import org.springframework.data.r2dbc.repository.support.SimpleR2dbcRepository;
import org.springframework.data.relational.core.query.Criteria;
import org.springframework.data.relational.core.sql.Column;
import org.springframework.data.relational.core.sql.Comparison;
import org.springframework.data.relational.core.sql.Condition;
import org.springframework.data.relational.core.sql.Conditions;
import org.springframework.data.relational.core.sql.Expression;
import org.springframework.data.relational.core.sql.Select;
import org.springframework.data.relational.core.sql.SelectBuilder.SelectFromAndJoinCondition;
import org.springframework.data.relational.core.sql.Table;
import org.springframework.data.relational.repository.support.MappingRelationalEntityInformation;
import org.springframework.r2dbc.core.DatabaseClient;
import org.springframework.r2dbc.core.RowsFetchSpec;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import sn.ias.gestionreferentiel.domain.TypeSourceFinancement;
import sn.ias.gestionreferentiel.repository.rowmapper.EntrepriseRowMapper;
import sn.ias.gestionreferentiel.repository.rowmapper.TypeSourceFinancementRowMapper;

/**
 * Spring Data R2DBC custom repository implementation for the TypeSourceFinancement entity.
 */
@SuppressWarnings("unused")
class TypeSourceFinancementRepositoryInternalImpl
    extends SimpleR2dbcRepository<TypeSourceFinancement, Long>
    implements TypeSourceFinancementRepositoryInternal {

    private final DatabaseClient db;
    private final R2dbcEntityTemplate r2dbcEntityTemplate;
    private final EntityManager entityManager;

    private final EntrepriseRowMapper entrepriseMapper;
    private final TypeSourceFinancementRowMapper typesourcefinancementMapper;

    private static final Table entityTable = Table.aliased("type_source_financement", EntityManager.ENTITY_ALIAS);
    private static final Table entrepriseTypeSourceFinancementTable = Table.aliased("entreprise", "entrepriseTypeSourceFinancement");

    public TypeSourceFinancementRepositoryInternalImpl(
        R2dbcEntityTemplate template,
        EntityManager entityManager,
        EntrepriseRowMapper entrepriseMapper,
        TypeSourceFinancementRowMapper typesourcefinancementMapper,
        R2dbcEntityOperations entityOperations,
        R2dbcConverter converter
    ) {
        super(
            new MappingRelationalEntityInformation(converter.getMappingContext().getRequiredPersistentEntity(TypeSourceFinancement.class)),
            entityOperations,
            converter
        );
        this.db = template.getDatabaseClient();
        this.r2dbcEntityTemplate = template;
        this.entityManager = entityManager;
        this.entrepriseMapper = entrepriseMapper;
        this.typesourcefinancementMapper = typesourcefinancementMapper;
    }

    @Override
    public Flux<TypeSourceFinancement> findAllBy(Pageable pageable) {
        return createQuery(pageable, null).all();
    }

    RowsFetchSpec<TypeSourceFinancement> createQuery(Pageable pageable, Condition whereClause) {
        List<Expression> columns = TypeSourceFinancementSqlHelper.getColumns(entityTable, EntityManager.ENTITY_ALIAS);
        columns.addAll(EntrepriseSqlHelper.getColumns(entrepriseTypeSourceFinancementTable, "entrepriseTypeSourceFinancement"));
        SelectFromAndJoinCondition selectFrom = Select
            .builder()
            .select(columns)
            .from(entityTable)
            .leftOuterJoin(entrepriseTypeSourceFinancementTable)
            .on(Column.create("entreprise_type_source_financement_id", entityTable))
            .equals(Column.create("id", entrepriseTypeSourceFinancementTable));
        // we do not support Criteria here for now as of https://github.com/jhipster/generator-jhipster/issues/18269
        String select = entityManager.createSelect(selectFrom, TypeSourceFinancement.class, pageable, whereClause);
        return db.sql(select).map(this::process);
    }

    @Override
    public Flux<TypeSourceFinancement> findAll() {
        return findAllBy(null);
    }

    @Override
    public Mono<TypeSourceFinancement> findById(Long id) {
        Comparison whereClause = Conditions.isEqual(entityTable.column("id"), Conditions.just(id.toString()));
        return createQuery(null, whereClause).one();
    }

    private TypeSourceFinancement process(Row row, RowMetadata metadata) {
        TypeSourceFinancement entity = typesourcefinancementMapper.apply(row, "e");
        entity.setEntrepriseTypeSourceFinancement(entrepriseMapper.apply(row, "entrepriseTypeSourceFinancement"));
        return entity;
    }

    @Override
    public <S extends TypeSourceFinancement> Mono<S> save(S entity) {
        return super.save(entity);
    }
}
