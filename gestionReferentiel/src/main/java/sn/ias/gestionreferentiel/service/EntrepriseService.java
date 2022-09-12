package sn.ias.gestionreferentiel.service;

import org.springframework.data.domain.Pageable;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import sn.ias.gestionreferentiel.service.dto.EntrepriseDTO;

/**
 * Service Interface for managing {@link sn.ias.gestionreferentiel.domain.Entreprise}.
 */
public interface EntrepriseService {
    /**
     * Save a entreprise.
     *
     * @param entrepriseDTO the entity to save.
     * @return the persisted entity.
     */
    Mono<EntrepriseDTO> save(EntrepriseDTO entrepriseDTO);

    /**
     * Updates a entreprise.
     *
     * @param entrepriseDTO the entity to update.
     * @return the persisted entity.
     */
    Mono<EntrepriseDTO> update(EntrepriseDTO entrepriseDTO);

    /**
     * Partially updates a entreprise.
     *
     * @param entrepriseDTO the entity to update partially.
     * @return the persisted entity.
     */
    Mono<EntrepriseDTO> partialUpdate(EntrepriseDTO entrepriseDTO);

    /**
     * Get all the entreprises.
     *
     * @param pageable the pagination information.
     * @return the list of entities.
     */
    Flux<EntrepriseDTO> findAll(Pageable pageable);

    /**
     * Returns the number of entreprises available.
     * @return the number of entities in the database.
     *
     */
    Mono<Long> countAll();

    /**
     * Get the "id" entreprise.
     *
     * @param id the id of the entity.
     * @return the entity.
     */
    Mono<EntrepriseDTO> findOne(Long id);

    /**
     * Delete the "id" entreprise.
     *
     * @param id the id of the entity.
     * @return a Mono to signal the deletion
     */
    Mono<Void> delete(Long id);
}
