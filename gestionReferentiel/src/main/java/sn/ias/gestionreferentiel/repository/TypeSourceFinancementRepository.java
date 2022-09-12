package sn.ias.gestionreferentiel.repository;

import org.springframework.data.domain.Pageable;
import org.springframework.data.r2dbc.repository.Query;
import org.springframework.data.relational.core.query.Criteria;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import sn.ias.gestionreferentiel.domain.TypeSourceFinancement;

/**
 * Spring Data R2DBC repository for the TypeSourceFinancement entity.
 */
@SuppressWarnings("unused")
@Repository
public interface TypeSourceFinancementRepository
    extends ReactiveCrudRepository<TypeSourceFinancement, Long>, TypeSourceFinancementRepositoryInternal {
    Flux<TypeSourceFinancement> findAllBy(Pageable pageable);

    @Query("SELECT * FROM type_source_financement entity WHERE entity.entreprise_type_source_financement_id = :id")
    Flux<TypeSourceFinancement> findByEntrepriseTypeSourceFinancement(Long id);

    @Query("SELECT * FROM type_source_financement entity WHERE entity.entreprise_type_source_financement_id IS NULL")
    Flux<TypeSourceFinancement> findAllWhereEntrepriseTypeSourceFinancementIsNull();

    @Override
    <S extends TypeSourceFinancement> Mono<S> save(S entity);

    @Override
    Flux<TypeSourceFinancement> findAll();

    @Override
    Mono<TypeSourceFinancement> findById(Long id);

    @Override
    Mono<Void> deleteById(Long id);
}

interface TypeSourceFinancementRepositoryInternal {
    <S extends TypeSourceFinancement> Mono<S> save(S entity);

    Flux<TypeSourceFinancement> findAllBy(Pageable pageable);

    Flux<TypeSourceFinancement> findAll();

    Mono<TypeSourceFinancement> findById(Long id);
    // this is not supported at the moment because of https://github.com/jhipster/generator-jhipster/issues/18269
    // Flux<TypeSourceFinancement> findAllBy(Pageable pageable, Criteria criteria);

}
