package sn.ias.gestionreferentiel.web.rest;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.hamcrest.Matchers.is;

import java.time.Duration;
import java.util.List;
import java.util.Random;
import java.util.concurrent.atomic.AtomicLong;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.reactive.AutoConfigureWebTestClient;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.reactive.server.WebTestClient;
import sn.ias.gestionreferentiel.IntegrationTest;
import sn.ias.gestionreferentiel.domain.TypeSourceFinancement;
import sn.ias.gestionreferentiel.repository.EntityManager;
import sn.ias.gestionreferentiel.repository.TypeSourceFinancementRepository;
import sn.ias.gestionreferentiel.service.dto.TypeSourceFinancementDTO;
import sn.ias.gestionreferentiel.service.mapper.TypeSourceFinancementMapper;

/**
 * Integration tests for the {@link TypeSourceFinancementResource} REST controller.
 */
@IntegrationTest
@AutoConfigureWebTestClient(timeout = IntegrationTest.DEFAULT_ENTITY_TIMEOUT)
@WithMockUser
class TypeSourceFinancementResourceIT {

    private static final String DEFAULT_CODE = "AAAAAAAAAA";
    private static final String UPDATED_CODE = "BBBBBBBBBB";

    private static final String DEFAULT_LIBELLE = "AAAAAAAAAA";
    private static final String UPDATED_LIBELLE = "BBBBBBBBBB";

    private static final String ENTITY_API_URL = "/api/type-source-financements";
    private static final String ENTITY_API_URL_ID = ENTITY_API_URL + "/{id}";

    private static Random random = new Random();
    private static AtomicLong count = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    @Autowired
    private TypeSourceFinancementRepository typeSourceFinancementRepository;

    @Autowired
    private TypeSourceFinancementMapper typeSourceFinancementMapper;

    @Autowired
    private EntityManager em;

    @Autowired
    private WebTestClient webTestClient;

    private TypeSourceFinancement typeSourceFinancement;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static TypeSourceFinancement createEntity(EntityManager em) {
        TypeSourceFinancement typeSourceFinancement = new TypeSourceFinancement().code(DEFAULT_CODE).libelle(DEFAULT_LIBELLE);
        return typeSourceFinancement;
    }

    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static TypeSourceFinancement createUpdatedEntity(EntityManager em) {
        TypeSourceFinancement typeSourceFinancement = new TypeSourceFinancement().code(UPDATED_CODE).libelle(UPDATED_LIBELLE);
        return typeSourceFinancement;
    }

    public static void deleteEntities(EntityManager em) {
        try {
            em.deleteAll(TypeSourceFinancement.class).block();
        } catch (Exception e) {
            // It can fail, if other entities are still referring this - it will be removed later.
        }
    }

    @AfterEach
    public void cleanup() {
        deleteEntities(em);
    }

    @BeforeEach
    public void initTest() {
        deleteEntities(em);
        typeSourceFinancement = createEntity(em);
    }

    @Test
    void createTypeSourceFinancement() throws Exception {
        int databaseSizeBeforeCreate = typeSourceFinancementRepository.findAll().collectList().block().size();
        // Create the TypeSourceFinancement
        TypeSourceFinancementDTO typeSourceFinancementDTO = typeSourceFinancementMapper.toDto(typeSourceFinancement);
        webTestClient
            .post()
            .uri(ENTITY_API_URL)
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(typeSourceFinancementDTO))
            .exchange()
            .expectStatus()
            .isCreated();

        // Validate the TypeSourceFinancement in the database
        List<TypeSourceFinancement> typeSourceFinancementList = typeSourceFinancementRepository.findAll().collectList().block();
        assertThat(typeSourceFinancementList).hasSize(databaseSizeBeforeCreate + 1);
        TypeSourceFinancement testTypeSourceFinancement = typeSourceFinancementList.get(typeSourceFinancementList.size() - 1);
        assertThat(testTypeSourceFinancement.getCode()).isEqualTo(DEFAULT_CODE);
        assertThat(testTypeSourceFinancement.getLibelle()).isEqualTo(DEFAULT_LIBELLE);
    }

    @Test
    void createTypeSourceFinancementWithExistingId() throws Exception {
        // Create the TypeSourceFinancement with an existing ID
        typeSourceFinancement.setId(1L);
        TypeSourceFinancementDTO typeSourceFinancementDTO = typeSourceFinancementMapper.toDto(typeSourceFinancement);

        int databaseSizeBeforeCreate = typeSourceFinancementRepository.findAll().collectList().block().size();

        // An entity with an existing ID cannot be created, so this API call must fail
        webTestClient
            .post()
            .uri(ENTITY_API_URL)
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(typeSourceFinancementDTO))
            .exchange()
            .expectStatus()
            .isBadRequest();

        // Validate the TypeSourceFinancement in the database
        List<TypeSourceFinancement> typeSourceFinancementList = typeSourceFinancementRepository.findAll().collectList().block();
        assertThat(typeSourceFinancementList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    void getAllTypeSourceFinancements() {
        // Initialize the database
        typeSourceFinancementRepository.save(typeSourceFinancement).block();

        // Get all the typeSourceFinancementList
        webTestClient
            .get()
            .uri(ENTITY_API_URL + "?sort=id,desc")
            .accept(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus()
            .isOk()
            .expectHeader()
            .contentType(MediaType.APPLICATION_JSON)
            .expectBody()
            .jsonPath("$.[*].id")
            .value(hasItem(typeSourceFinancement.getId().intValue()))
            .jsonPath("$.[*].code")
            .value(hasItem(DEFAULT_CODE))
            .jsonPath("$.[*].libelle")
            .value(hasItem(DEFAULT_LIBELLE));
    }

    @Test
    void getTypeSourceFinancement() {
        // Initialize the database
        typeSourceFinancementRepository.save(typeSourceFinancement).block();

        // Get the typeSourceFinancement
        webTestClient
            .get()
            .uri(ENTITY_API_URL_ID, typeSourceFinancement.getId())
            .accept(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus()
            .isOk()
            .expectHeader()
            .contentType(MediaType.APPLICATION_JSON)
            .expectBody()
            .jsonPath("$.id")
            .value(is(typeSourceFinancement.getId().intValue()))
            .jsonPath("$.code")
            .value(is(DEFAULT_CODE))
            .jsonPath("$.libelle")
            .value(is(DEFAULT_LIBELLE));
    }

    @Test
    void getNonExistingTypeSourceFinancement() {
        // Get the typeSourceFinancement
        webTestClient
            .get()
            .uri(ENTITY_API_URL_ID, Long.MAX_VALUE)
            .accept(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus()
            .isNotFound();
    }

    @Test
    void putNewTypeSourceFinancement() throws Exception {
        // Initialize the database
        typeSourceFinancementRepository.save(typeSourceFinancement).block();

        int databaseSizeBeforeUpdate = typeSourceFinancementRepository.findAll().collectList().block().size();

        // Update the typeSourceFinancement
        TypeSourceFinancement updatedTypeSourceFinancement = typeSourceFinancementRepository
            .findById(typeSourceFinancement.getId())
            .block();
        updatedTypeSourceFinancement.code(UPDATED_CODE).libelle(UPDATED_LIBELLE);
        TypeSourceFinancementDTO typeSourceFinancementDTO = typeSourceFinancementMapper.toDto(updatedTypeSourceFinancement);

        webTestClient
            .put()
            .uri(ENTITY_API_URL_ID, typeSourceFinancementDTO.getId())
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(typeSourceFinancementDTO))
            .exchange()
            .expectStatus()
            .isOk();

        // Validate the TypeSourceFinancement in the database
        List<TypeSourceFinancement> typeSourceFinancementList = typeSourceFinancementRepository.findAll().collectList().block();
        assertThat(typeSourceFinancementList).hasSize(databaseSizeBeforeUpdate);
        TypeSourceFinancement testTypeSourceFinancement = typeSourceFinancementList.get(typeSourceFinancementList.size() - 1);
        assertThat(testTypeSourceFinancement.getCode()).isEqualTo(UPDATED_CODE);
        assertThat(testTypeSourceFinancement.getLibelle()).isEqualTo(UPDATED_LIBELLE);
    }

    @Test
    void putNonExistingTypeSourceFinancement() throws Exception {
        int databaseSizeBeforeUpdate = typeSourceFinancementRepository.findAll().collectList().block().size();
        typeSourceFinancement.setId(count.incrementAndGet());

        // Create the TypeSourceFinancement
        TypeSourceFinancementDTO typeSourceFinancementDTO = typeSourceFinancementMapper.toDto(typeSourceFinancement);

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        webTestClient
            .put()
            .uri(ENTITY_API_URL_ID, typeSourceFinancementDTO.getId())
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(typeSourceFinancementDTO))
            .exchange()
            .expectStatus()
            .isBadRequest();

        // Validate the TypeSourceFinancement in the database
        List<TypeSourceFinancement> typeSourceFinancementList = typeSourceFinancementRepository.findAll().collectList().block();
        assertThat(typeSourceFinancementList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void putWithIdMismatchTypeSourceFinancement() throws Exception {
        int databaseSizeBeforeUpdate = typeSourceFinancementRepository.findAll().collectList().block().size();
        typeSourceFinancement.setId(count.incrementAndGet());

        // Create the TypeSourceFinancement
        TypeSourceFinancementDTO typeSourceFinancementDTO = typeSourceFinancementMapper.toDto(typeSourceFinancement);

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        webTestClient
            .put()
            .uri(ENTITY_API_URL_ID, count.incrementAndGet())
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(typeSourceFinancementDTO))
            .exchange()
            .expectStatus()
            .isBadRequest();

        // Validate the TypeSourceFinancement in the database
        List<TypeSourceFinancement> typeSourceFinancementList = typeSourceFinancementRepository.findAll().collectList().block();
        assertThat(typeSourceFinancementList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void putWithMissingIdPathParamTypeSourceFinancement() throws Exception {
        int databaseSizeBeforeUpdate = typeSourceFinancementRepository.findAll().collectList().block().size();
        typeSourceFinancement.setId(count.incrementAndGet());

        // Create the TypeSourceFinancement
        TypeSourceFinancementDTO typeSourceFinancementDTO = typeSourceFinancementMapper.toDto(typeSourceFinancement);

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        webTestClient
            .put()
            .uri(ENTITY_API_URL)
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(typeSourceFinancementDTO))
            .exchange()
            .expectStatus()
            .isEqualTo(405);

        // Validate the TypeSourceFinancement in the database
        List<TypeSourceFinancement> typeSourceFinancementList = typeSourceFinancementRepository.findAll().collectList().block();
        assertThat(typeSourceFinancementList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void partialUpdateTypeSourceFinancementWithPatch() throws Exception {
        // Initialize the database
        typeSourceFinancementRepository.save(typeSourceFinancement).block();

        int databaseSizeBeforeUpdate = typeSourceFinancementRepository.findAll().collectList().block().size();

        // Update the typeSourceFinancement using partial update
        TypeSourceFinancement partialUpdatedTypeSourceFinancement = new TypeSourceFinancement();
        partialUpdatedTypeSourceFinancement.setId(typeSourceFinancement.getId());

        webTestClient
            .patch()
            .uri(ENTITY_API_URL_ID, partialUpdatedTypeSourceFinancement.getId())
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(TestUtil.convertObjectToJsonBytes(partialUpdatedTypeSourceFinancement))
            .exchange()
            .expectStatus()
            .isOk();

        // Validate the TypeSourceFinancement in the database
        List<TypeSourceFinancement> typeSourceFinancementList = typeSourceFinancementRepository.findAll().collectList().block();
        assertThat(typeSourceFinancementList).hasSize(databaseSizeBeforeUpdate);
        TypeSourceFinancement testTypeSourceFinancement = typeSourceFinancementList.get(typeSourceFinancementList.size() - 1);
        assertThat(testTypeSourceFinancement.getCode()).isEqualTo(DEFAULT_CODE);
        assertThat(testTypeSourceFinancement.getLibelle()).isEqualTo(DEFAULT_LIBELLE);
    }

    @Test
    void fullUpdateTypeSourceFinancementWithPatch() throws Exception {
        // Initialize the database
        typeSourceFinancementRepository.save(typeSourceFinancement).block();

        int databaseSizeBeforeUpdate = typeSourceFinancementRepository.findAll().collectList().block().size();

        // Update the typeSourceFinancement using partial update
        TypeSourceFinancement partialUpdatedTypeSourceFinancement = new TypeSourceFinancement();
        partialUpdatedTypeSourceFinancement.setId(typeSourceFinancement.getId());

        partialUpdatedTypeSourceFinancement.code(UPDATED_CODE).libelle(UPDATED_LIBELLE);

        webTestClient
            .patch()
            .uri(ENTITY_API_URL_ID, partialUpdatedTypeSourceFinancement.getId())
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(TestUtil.convertObjectToJsonBytes(partialUpdatedTypeSourceFinancement))
            .exchange()
            .expectStatus()
            .isOk();

        // Validate the TypeSourceFinancement in the database
        List<TypeSourceFinancement> typeSourceFinancementList = typeSourceFinancementRepository.findAll().collectList().block();
        assertThat(typeSourceFinancementList).hasSize(databaseSizeBeforeUpdate);
        TypeSourceFinancement testTypeSourceFinancement = typeSourceFinancementList.get(typeSourceFinancementList.size() - 1);
        assertThat(testTypeSourceFinancement.getCode()).isEqualTo(UPDATED_CODE);
        assertThat(testTypeSourceFinancement.getLibelle()).isEqualTo(UPDATED_LIBELLE);
    }

    @Test
    void patchNonExistingTypeSourceFinancement() throws Exception {
        int databaseSizeBeforeUpdate = typeSourceFinancementRepository.findAll().collectList().block().size();
        typeSourceFinancement.setId(count.incrementAndGet());

        // Create the TypeSourceFinancement
        TypeSourceFinancementDTO typeSourceFinancementDTO = typeSourceFinancementMapper.toDto(typeSourceFinancement);

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        webTestClient
            .patch()
            .uri(ENTITY_API_URL_ID, typeSourceFinancementDTO.getId())
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(TestUtil.convertObjectToJsonBytes(typeSourceFinancementDTO))
            .exchange()
            .expectStatus()
            .isBadRequest();

        // Validate the TypeSourceFinancement in the database
        List<TypeSourceFinancement> typeSourceFinancementList = typeSourceFinancementRepository.findAll().collectList().block();
        assertThat(typeSourceFinancementList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void patchWithIdMismatchTypeSourceFinancement() throws Exception {
        int databaseSizeBeforeUpdate = typeSourceFinancementRepository.findAll().collectList().block().size();
        typeSourceFinancement.setId(count.incrementAndGet());

        // Create the TypeSourceFinancement
        TypeSourceFinancementDTO typeSourceFinancementDTO = typeSourceFinancementMapper.toDto(typeSourceFinancement);

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        webTestClient
            .patch()
            .uri(ENTITY_API_URL_ID, count.incrementAndGet())
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(TestUtil.convertObjectToJsonBytes(typeSourceFinancementDTO))
            .exchange()
            .expectStatus()
            .isBadRequest();

        // Validate the TypeSourceFinancement in the database
        List<TypeSourceFinancement> typeSourceFinancementList = typeSourceFinancementRepository.findAll().collectList().block();
        assertThat(typeSourceFinancementList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void patchWithMissingIdPathParamTypeSourceFinancement() throws Exception {
        int databaseSizeBeforeUpdate = typeSourceFinancementRepository.findAll().collectList().block().size();
        typeSourceFinancement.setId(count.incrementAndGet());

        // Create the TypeSourceFinancement
        TypeSourceFinancementDTO typeSourceFinancementDTO = typeSourceFinancementMapper.toDto(typeSourceFinancement);

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        webTestClient
            .patch()
            .uri(ENTITY_API_URL)
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(TestUtil.convertObjectToJsonBytes(typeSourceFinancementDTO))
            .exchange()
            .expectStatus()
            .isEqualTo(405);

        // Validate the TypeSourceFinancement in the database
        List<TypeSourceFinancement> typeSourceFinancementList = typeSourceFinancementRepository.findAll().collectList().block();
        assertThat(typeSourceFinancementList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void deleteTypeSourceFinancement() {
        // Initialize the database
        typeSourceFinancementRepository.save(typeSourceFinancement).block();

        int databaseSizeBeforeDelete = typeSourceFinancementRepository.findAll().collectList().block().size();

        // Delete the typeSourceFinancement
        webTestClient
            .delete()
            .uri(ENTITY_API_URL_ID, typeSourceFinancement.getId())
            .accept(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus()
            .isNoContent();

        // Validate the database contains one less item
        List<TypeSourceFinancement> typeSourceFinancementList = typeSourceFinancementRepository.findAll().collectList().block();
        assertThat(typeSourceFinancementList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
