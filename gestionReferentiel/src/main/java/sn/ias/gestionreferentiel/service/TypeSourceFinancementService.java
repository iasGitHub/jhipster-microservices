package sn.ias.gestionreferentiel.service;

import org.springframework.data.domain.Pageable;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import sn.ias.gestionreferentiel.service.dto.TypeSourceFinancementDTO;

/**
 * Service Interface for managing {@link sn.ias.gestionreferentiel.domain.TypeSourceFinancement}.
 */
public interface TypeSourceFinancementService {
    /**
     * Save a typeSourceFinancement.
     *
     * @param typeSourceFinancementDTO the entity to save.
     * @return the persisted entity.
     */
    Mono<TypeSourceFinancementDTO> save(TypeSourceFinancementDTO typeSourceFinancementDTO);

    /**
     * Updates a typeSourceFinancement.
     *
     * @param typeSourceFinancementDTO the entity to update.
     * @return the persisted entity.
     */
    Mono<TypeSourceFinancementDTO> update(TypeSourceFinancementDTO typeSourceFinancementDTO);

    /**
     * Partially updates a typeSourceFinancement.
     *
     * @param typeSourceFinancementDTO the entity to update partially.
     * @return the persisted entity.
     */
    Mono<TypeSourceFinancementDTO> partialUpdate(TypeSourceFinancementDTO typeSourceFinancementDTO);

    /**
     * Get all the typeSourceFinancements.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    Flux<TypeSourceFinancementDTO> findAll(Pageable pageable);

    /**
     * Returns the number of typeSourceFinancements available.
     * @return the number of entities in the database.
     *
     */
    Mono<Long> countAll();

    /**
     * Get the "id" typeSourceFinancement.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Mono<TypeSourceFinancementDTO> findOne(Long id);

    /**
     * Delete the "id" typeSourceFinancement.
     *
     * @param id the id of the entity.
     * @return a Mono to signal the deletion
     */
    Mono<Void> delete(Long id);
}
