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
import sn.ias.gestionreferentiel.repository.TypeSourceFinancementRepository;
import sn.ias.gestionreferentiel.service.TypeSourceFinancementService;
import sn.ias.gestionreferentiel.service.dto.TypeSourceFinancementDTO;
import sn.ias.gestionreferentiel.web.rest.errors.BadRequestAlertException;
import tech.jhipster.web.util.HeaderUtil;
import tech.jhipster.web.util.PaginationUtil;
import tech.jhipster.web.util.reactive.ResponseUtil;

/**
 * REST controller for managing {@link sn.ias.gestionreferentiel.domain.TypeSourceFinancement}.
 */
@RestController
@RequestMapping("/api")
public class TypeSourceFinancementResource {

    private final Logger log = LoggerFactory.getLogger(TypeSourceFinancementResource.class);

    private static final String ENTITY_NAME = "gestionReferentielTypeSourceFinancement";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final TypeSourceFinancementService typeSourceFinancementService;

    private final TypeSourceFinancementRepository typeSourceFinancementRepository;

    public TypeSourceFinancementResource(
        TypeSourceFinancementService typeSourceFinancementService,
        TypeSourceFinancementRepository typeSourceFinancementRepository
    ) {
        this.typeSourceFinancementService = typeSourceFinancementService;
        this.typeSourceFinancementRepository = typeSourceFinancementRepository;
    }

    /**
     * {@code POST  /type-source-financements} : Create a new typeSourceFinancement.
     *
     * @param typeSourceFinancementDTO the typeSourceFinancementDTO to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new typeSourceFinancementDTO, or with status {@code 400 (Bad Request)} if the typeSourceFinancement has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/type-source-financements")
    public Mono<ResponseEntity<TypeSourceFinancementDTO>> createTypeSourceFinancement(
        @RequestBody TypeSourceFinancementDTO typeSourceFinancementDTO
    ) throws URISyntaxException {
        log.debug("REST request to save TypeSourceFinancement : {}", typeSourceFinancementDTO);
        if (typeSourceFinancementDTO.getId() != null) {
            throw new BadRequestAlertException("A new typeSourceFinancement cannot already have an ID", ENTITY_NAME, "idexists");
        }
        return typeSourceFinancementService
            .save(typeSourceFinancementDTO)
            .map(result -> {
                try {
                    return ResponseEntity
                        .created(new URI("/api/type-source-financements/" + result.getId()))
                        .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
                        .body(result);
                } catch (URISyntaxException e) {
                    throw new RuntimeException(e);
                }
            });
    }

    /**
     * {@code PUT  /type-source-financements/:id} : Updates an existing typeSourceFinancement.
     *
     * @param id the id of the typeSourceFinancementDTO to save.
     * @param typeSourceFinancementDTO the typeSourceFinancementDTO to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated typeSourceFinancementDTO,
     * or with status {@code 400 (Bad Request)} if the typeSourceFinancementDTO is not valid,
     * or with status {@code 500 (Internal Server Error)} if the typeSourceFinancementDTO couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/type-source-financements/{id}")
    public Mono<ResponseEntity<TypeSourceFinancementDTO>> updateTypeSourceFinancement(
        @PathVariable(value = "id", required = false) final Long id,
        @RequestBody TypeSourceFinancementDTO typeSourceFinancementDTO
    ) throws URISyntaxException {
        log.debug("REST request to update TypeSourceFinancement : {}, {}", id, typeSourceFinancementDTO);
        if (typeSourceFinancementDTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, typeSourceFinancementDTO.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        return typeSourceFinancementRepository
            .existsById(id)
            .flatMap(exists -> {
                if (!exists) {
                    return Mono.error(new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound"));
                }

                return typeSourceFinancementService
                    .update(typeSourceFinancementDTO)
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
     * {@code PATCH  /type-source-financements/:id} : Partial updates given fields of an existing typeSourceFinancement, field will ignore if it is null
     *
     * @param id the id of the typeSourceFinancementDTO to save.
     * @param typeSourceFinancementDTO the typeSourceFinancementDTO to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated typeSourceFinancementDTO,
     * or with status {@code 400 (Bad Request)} if the typeSourceFinancementDTO is not valid,
     * or with status {@code 404 (Not Found)} if the typeSourceFinancementDTO is not found,
     * or with status {@code 500 (Internal Server Error)} if the typeSourceFinancementDTO couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PatchMapping(value = "/type-source-financements/{id}", consumes = { "application/json", "application/merge-patch+json" })
    public Mono<ResponseEntity<TypeSourceFinancementDTO>> partialUpdateTypeSourceFinancement(
        @PathVariable(value = "id", required = false) final Long id,
        @RequestBody TypeSourceFinancementDTO typeSourceFinancementDTO
    ) throws URISyntaxException {
        log.debug("REST request to partial update TypeSourceFinancement partially : {}, {}", id, typeSourceFinancementDTO);
        if (typeSourceFinancementDTO.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        if (!Objects.equals(id, typeSourceFinancementDTO.getId())) {
            throw new BadRequestAlertException("Invalid ID", ENTITY_NAME, "idinvalid");
        }

        return typeSourceFinancementRepository
            .existsById(id)
            .flatMap(exists -> {
                if (!exists) {
                    return Mono.error(new BadRequestAlertException("Entity not found", ENTITY_NAME, "idnotfound"));
                }

                Mono<TypeSourceFinancementDTO> result = typeSourceFinancementService.partialUpdate(typeSourceFinancementDTO);

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
     * {@code GET  /type-source-financements} : get all the typeSourceFinancements.
     *
     * @param pageable the pagination information.
     * @param request a {@link ServerHttpRequest} request.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of typeSourceFinancements in body.
     */
    @GetMapping("/type-source-financements")
    public Mono<ResponseEntity<List<TypeSourceFinancementDTO>>> getAllTypeSourceFinancements(
        @org.springdoc.api.annotations.ParameterObject Pageable pageable,
        ServerHttpRequest request
    ) {
        log.debug("REST request to get a page of TypeSourceFinancements");
        return typeSourceFinancementService
            .countAll()
            .zipWith(typeSourceFinancementService.findAll(pageable).collectList())
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
     * {@code GET  /type-source-financements/:id} : get the "id" typeSourceFinancement.
     *
     * @param id the id of the typeSourceFinancementDTO to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the typeSourceFinancementDTO, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/type-source-financements/{id}")
    public Mono<ResponseEntity<TypeSourceFinancementDTO>> getTypeSourceFinancement(@PathVariable Long id) {
        log.debug("REST request to get TypeSourceFinancement : {}", id);
        Mono<TypeSourceFinancementDTO> typeSourceFinancementDTO = typeSourceFinancementService.findOne(id);
        return ResponseUtil.wrapOrNotFound(typeSourceFinancementDTO);
    }

    /**
     * {@code DELETE  /type-source-financements/:id} : delete the "id" typeSourceFinancement.
     *
     * @param id the id of the typeSourceFinancementDTO to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/type-source-financements/{id}")
    public Mono<ResponseEntity<Void>> deleteTypeSourceFinancement(@PathVariable Long id) {
        log.debug("REST request to delete TypeSourceFinancement : {}", id);
        return typeSourceFinancementService
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
