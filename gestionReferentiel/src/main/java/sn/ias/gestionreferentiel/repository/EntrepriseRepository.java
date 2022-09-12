package sn.ias.gestionreferentiel.repository;

import org.springframework.data.domain.Pageable;
import org.springframework.data.r2dbc.repository.Query;
import org.springframework.data.relational.core.query.Criteria;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import sn.ias.gestionreferentiel.domain.Entreprise;

/**
 * Spring Data R2DBC repository for the Entreprise entity.
 */
@SuppressWarnings("unused")
@Repository
public interface EntrepriseRepository extends ReactiveCrudRepository<Entreprise, Long>, EntrepriseRepositoryInternal {
    Flux<Entreprise> findAllBy(Pageable pageable);

    @Override
    <S extends Entreprise> Mono<S> save(S entity);

    @Override
    Flux<Entreprise> findAll();

    @Override
    Mono<Entreprise> findById(Long id);

    @Override
    Mono<Void> deleteById(Long id);
}

interface EntrepriseRepositoryInternal {
    <S extends Entreprise> Mono<S> save(S entity);

    Flux<Entreprise> findAllBy(Pageable pageable);

    Flux<Entreprise> findAll();

    Mono<Entreprise> findById(Long id);
    // this is not supported at the moment because of https://github.com/jhipster/generator-jhipster/issues/18269
    // Flux<Entreprise> findAllBy(Pageable pageable, Criteria criteria);

}
