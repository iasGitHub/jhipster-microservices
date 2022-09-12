package sn.ias.gestionreferentiel.web.rest;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.util.UriComponentsBuilder;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import sn.ias.gestionreferentiel.repository.EntrepriseRepository;
import sn.ias.gestionreferentiel.service.EntrepriseService;
import sn.ias.gestionreferentiel.service.dto.EntrepriseDTO;
import sn.ias.gestionreferentiel.web.rest.errors.BadRequestAlertException;
import tech.jhipster.web.util.HeaderUtil;
import tech.jhipster.web.util.PaginationUtil;
import tech.jhipster.web.util.reactive.ResponseUtil;

/**
 * REST controller for managing {@link sn.ias.gestionreferentiel.domain.Entreprise}.
 */
@RestController
@RequestMapping("/api")
public class EntrepriseResource {

    private final Logger log = LoggerFactory.getLogger(EntrepriseResource.class);

    private static final String ENTITY_NAME = "gestionReferentielEntreprise";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final EntrepriseService entrepriseService;

    private final EntrepriseRepository entrepriseRepository;

    public EntrepriseResource(EntrepriseService entrepriseService, EntrepriseRepository entrepriseRepository) {
        this.entrepriseService = entrepriseService;
        this.entrepriseRepository = entrepriseRepository;
    }

    /**
     * {@code POST  /entreprises} : Create a new entreprise.
     *
     * @param entrepriseDTO the entrepriseDTO to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new entrepriseDTO, or with status {@code 400 (Bad Request)} if the entreprise has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/entreprises")
    public Mono<ResponseEntity<EntrepriseDTO>> createEntreprise(@RequestBody EntrepriseDTO entrepriseDTO) throws URISyntaxException {
        log.debug("REST request to save Entreprise : {}", entrepriseDTO);
        if (entrepriseDTO.getId() != null) {
            throw new BadRequestAlertException("A new entreprise cannot already have an ID", ENTITY_NAME, "idexists");
        }
        return entrepriseService
            .save(entrepriseDTO)
            .map(result -> {
                try {
                    return ResponseEntity
                        .created(new URI("/api/entreprises/" + result.getId()))
                        .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
                        .body(result);
                } catch (URISyntaxException e) {
                    throw new RuntimeException(e);
                }
            });
    }

    /**
     * {@code PUT  /entreprises/:id} : Updates an existing entreprise.
     *
     * @param id the id of the entrepriseDTO to save.
     * @param entrepriseDTO the entrepriseDTO to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated entrepriseDTO,
     * or with status {@code 400 (Bad Request)} if the entrepriseDTO is not valid,
     * or with status {@code 500 (Internal Server Error)} if the entrepriseDTO couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/entreprises/{id}")
    public Mono<ResponseEntity<EntrepriseDTO>> updateEntreprise(
        @PathVariable(value = "id", required = false) final Long id,
        @RequestBody EntrepriseDTO entrepriseDTO
    ) throws URISyntaxException {
        log.debug("REST request to update Entreprise : {}, {}", id, entrepriseDTO);
        if (entrepriseDTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, entrepriseDTO.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        return entrepriseRepository
            .existsById(id)
            .flatMap(exists -> {
                if (!exists) {
                    return Mono.error(new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound"));
                }

                return entrepriseService
                    .update(entrepriseDTO)
                    .switchIfEmpty(Mono.error(new ResponseStatusException(HttpStatus.NOT_FOUND)))
                    .map(result ->
                        ResponseEntity
                            .ok()
                            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
                            .body(result)
                    );
            });
    }

    /**
     * {@code PATCH  /entreprises/:id} : Partial updates given fields of an existing entreprise, field will ignore if it is null
     *
     * @param id the id of the entrepriseDTO to save.
     * @param entrepriseDTO the entrepriseDTO to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated entrepriseDTO,
     * or with status {@code 400 (Bad Request)} if the entrepriseDTO is not valid,
     * or with status {@code 404 (Not Found)} if the entrepriseDTO is not found,
     * or with status {@code 500 (Internal Server Error)} if the entrepriseDTO couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PatchMapping(value = "/entreprises/{id}", consumes = { "application/json", "application/merge-patch+json" })
    public Mono<ResponseEntity<EntrepriseDTO>> partialUpdateEntreprise(
        @PathVariable(value = "id", required = false) final Long id,
        @RequestBody EntrepriseDTO entrepriseDTO
    ) throws URISyntaxException {
        log.debug("REST request to partial update Entreprise partially : {}, {}", id, entrepriseDTO);
        if (entrepriseDTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, entrepriseDTO.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        return entrepriseRepository
            .existsById(id)
            .flatMap(exists -> {
                if (!exists) {
                    return Mono.error(new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound"));
                }

                Mono<EntrepriseDTO> result = entrepriseService.partialUpdate(entrepriseDTO);

                return result
                    .switchIfEmpty(Mono.error(new ResponseStatusException(HttpStatus.NOT_FOUND)))
                    .map(res ->
                        ResponseEntity
                            .ok()
                            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, res.getId().toString()))
                            .body(res)
                    );
            });
    }

    /**
     * {@code GET  /entreprises} : get all the entreprises.
     *
     * @param pageable the pagination information.
     * @param request a {@link ServerHttpRequest} request.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of entreprises in body.
     */
    @GetMapping("/entreprises")
    public Mono<ResponseEntity<List<EntrepriseDTO>>> getAllEntreprises(
        @org.springdoc.api.annotations.ParameterObject Pageable pageable,
        ServerHttpRequest request
    ) {
        log.debug("REST request to get a page of Entreprises");
        return entrepriseService
            .countAll()
            .zipWith(entrepriseService.findAll(pageable).collectList())
            .map(countWithEntities ->
                ResponseEntity
                    .ok()
                    .headers(
                        PaginationUtil.generatePaginationHttpHeaders(
                            UriComponentsBuilder.fromHttpRequest(request),
                            new PageImpl<>(countWithEntities.getT2(), pageable, countWithEntities.getT1())
                        )
                    )
                    .body(countWithEntities.getT2())
            );
    }

    /**
     * {@code GET  /entreprises/:id} : get the "id" entreprise.
     *
     * @param id the id of the entrepriseDTO to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the entrepriseDTO, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/entreprises/{id}")
    public Mono<ResponseEntity<EntrepriseDTO>> getEntreprise(@PathVariable Long id) {
        log.debug("REST request to get Entreprise : {}", id);
        Mono<EntrepriseDTO> entrepriseDTO = entrepriseService.findOne(id);
        return ResponseUtil.wrapOrNotFound(entrepriseDTO);
    }

    /**
     * {@code DELETE  /entreprises/:id} : delete the "id" entreprise.
     *
     * @param id the id of the entrepriseDTO to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/entreprises/{id}")
    public Mono<ResponseEntity<Void>> deleteEntreprise(@PathVariable Long id) {
        log.debug("REST request to delete Entreprise : {}", id);
        return entrepriseService
            .delete(id)
            .then(
                Mono.just(
                    ResponseEntity
                        .noContent()
                        .headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString()))
                        .build()
                )
            );
    }
}
