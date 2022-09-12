package sn.ias.gestionreferentiel.web.rest;

import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.hasItem;
import static org.hamcrest.Matchers.is;

import java.time.Duration;
import java.time.LocalDate;
import java.time.ZoneId;
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
import sn.ias.gestionreferentiel.domain.Entreprise;
import sn.ias.gestionreferentiel.repository.EntityManager;
import sn.ias.gestionreferentiel.repository.EntrepriseRepository;
import sn.ias.gestionreferentiel.service.dto.EntrepriseDTO;
import sn.ias.gestionreferentiel.service.mapper.EntrepriseMapper;

/**
 * Integration tests for the {@link EntrepriseResource} REST controller.
 */
@IntegrationTest
@AutoConfigureWebTestClient(timeout = IntegrationTest.DEFAULT_ENTITY_TIMEOUT)
@WithMockUser
class EntrepriseResourceIT {

    private static final String DEFAULT_NOM = "AAAAAAAAAA";
    private static final String UPDATED_NOM = "BBBBBBBBBB";

    private static final String DEFAULT_NINEA = "AAAAAAAAAA";
    private static final String UPDATED_NINEA = "BBBBBBBBBB";

    private static final LocalDate DEFAULT_DATE_CREATION = LocalDate.ofEpochDay(0L);
    private static final LocalDate UPDATED_DATE_CREATION = LocalDate.now(ZoneId.systemDefault());

    private static final Integer DEFAULT_NBRE_EMPLOYE = 1;
    private static final Integer UPDATED_NBRE_EMPLOYE = 2;

    private static final String ENTITY_API_URL = "/api/entreprises";
    private static final String ENTITY_API_URL_ID = ENTITY_API_URL + "/{id}";

    private static Random random = new Random();
    private static AtomicLong count = new AtomicLong(random.nextInt() + (2 * Integer.MAX_VALUE));

    @Autowired
    private EntrepriseRepository entrepriseRepository;

    @Autowired
    private EntrepriseMapper entrepriseMapper;

    @Autowired
    private EntityManager em;

    @Autowired
    private WebTestClient webTestClient;

    private Entreprise entreprise;

    /**
     * Create an entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Entreprise createEntity(EntityManager em) {
        Entreprise entreprise = new Entreprise()
            .nom(DEFAULT_NOM)
            .ninea(DEFAULT_NINEA)
            .dateCreation(DEFAULT_DATE_CREATION)
            .nbreEmploye(DEFAULT_NBRE_EMPLOYE);
        return entreprise;
    }

    /**
     * Create an updated entity for this test.
     *
     * This is a static method, as tests for other entities might also need it,
     * if they test an entity which requires the current entity.
     */
    public static Entreprise createUpdatedEntity(EntityManager em) {
        Entreprise entreprise = new Entreprise()
            .nom(UPDATED_NOM)
            .ninea(UPDATED_NINEA)
            .dateCreation(UPDATED_DATE_CREATION)
            .nbreEmploye(UPDATED_NBRE_EMPLOYE);
        return entreprise;
    }

    public static void deleteEntities(EntityManager em) {
        try {
            em.deleteAll(Entreprise.class).block();
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
        entreprise = createEntity(em);
    }

    @Test
    void createEntreprise() throws Exception {
        int databaseSizeBeforeCreate = entrepriseRepository.findAll().collectList().block().size();
        // Create the Entreprise
        EntrepriseDTO entrepriseDTO = entrepriseMapper.toDto(entreprise);
        webTestClient
            .post()
            .uri(ENTITY_API_URL)
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(entrepriseDTO))
            .exchange()
            .expectStatus()
            .isCreated();

        // Validate the Entreprise in the database
        List<Entreprise> entrepriseList = entrepriseRepository.findAll().collectList().block();
        assertThat(entrepriseList).hasSize(databaseSizeBeforeCreate + 1);
        Entreprise testEntreprise = entrepriseList.get(entrepriseList.size() - 1);
        assertThat(testEntreprise.getNom()).isEqualTo(DEFAULT_NOM);
        assertThat(testEntreprise.getNinea()).isEqualTo(DEFAULT_NINEA);
        assertThat(testEntreprise.getDateCreation()).isEqualTo(DEFAULT_DATE_CREATION);
        assertThat(testEntreprise.getNbreEmploye()).isEqualTo(DEFAULT_NBRE_EMPLOYE);
    }

    @Test
    void createEntrepriseWithExistingId() throws Exception {
        // Create the Entreprise with an existing ID
        entreprise.setId(1L);
        EntrepriseDTO entrepriseDTO = entrepriseMapper.toDto(entreprise);

        int databaseSizeBeforeCreate = entrepriseRepository.findAll().collectList().block().size();

        // An entity with an existing ID cannot be created, so this API call must fail
        webTestClient
            .post()
            .uri(ENTITY_API_URL)
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(entrepriseDTO))
            .exchange()
            .expectStatus()
            .isBadRequest();

        // Validate the Entreprise in the database
        List<Entreprise> entrepriseList = entrepriseRepository.findAll().collectList().block();
        assertThat(entrepriseList).hasSize(databaseSizeBeforeCreate);
    }

    @Test
    void getAllEntreprises() {
        // Initialize the database
        entrepriseRepository.save(entreprise).block();

        // Get all the entrepriseList
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
            .value(hasItem(entreprise.getId().intValue()))
            .jsonPath("$.[*].nom")
            .value(hasItem(DEFAULT_NOM))
            .jsonPath("$.[*].ninea")
            .value(hasItem(DEFAULT_NINEA))
            .jsonPath("$.[*].dateCreation")
            .value(hasItem(DEFAULT_DATE_CREATION.toString()))
            .jsonPath("$.[*].nbreEmploye")
            .value(hasItem(DEFAULT_NBRE_EMPLOYE));
    }

    @Test
    void getEntreprise() {
        // Initialize the database
        entrepriseRepository.save(entreprise).block();

        // Get the entreprise
        webTestClient
            .get()
            .uri(ENTITY_API_URL_ID, entreprise.getId())
            .accept(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus()
            .isOk()
            .expectHeader()
            .contentType(MediaType.APPLICATION_JSON)
            .expectBody()
            .jsonPath("$.id")
            .value(is(entreprise.getId().intValue()))
            .jsonPath("$.nom")
            .value(is(DEFAULT_NOM))
            .jsonPath("$.ninea")
            .value(is(DEFAULT_NINEA))
            .jsonPath("$.dateCreation")
            .value(is(DEFAULT_DATE_CREATION.toString()))
            .jsonPath("$.nbreEmploye")
            .value(is(DEFAULT_NBRE_EMPLOYE));
    }

    @Test
    void getNonExistingEntreprise() {
        // Get the entreprise
        webTestClient
            .get()
            .uri(ENTITY_API_URL_ID, Long.MAX_VALUE)
            .accept(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus()
            .isNotFound();
    }

    @Test
    void putNewEntreprise() throws Exception {
        // Initialize the database
        entrepriseRepository.save(entreprise).block();

        int databaseSizeBeforeUpdate = entrepriseRepository.findAll().collectList().block().size();

        // Update the entreprise
        Entreprise updatedEntreprise = entrepriseRepository.findById(entreprise.getId()).block();
        updatedEntreprise.nom(UPDATED_NOM).ninea(UPDATED_NINEA).dateCreation(UPDATED_DATE_CREATION).nbreEmploye(UPDATED_NBRE_EMPLOYE);
        EntrepriseDTO entrepriseDTO = entrepriseMapper.toDto(updatedEntreprise);

        webTestClient
            .put()
            .uri(ENTITY_API_URL_ID, entrepriseDTO.getId())
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(entrepriseDTO))
            .exchange()
            .expectStatus()
            .isOk();

        // Validate the Entreprise in the database
        List<Entreprise> entrepriseList = entrepriseRepository.findAll().collectList().block();
        assertThat(entrepriseList).hasSize(databaseSizeBeforeUpdate);
        Entreprise testEntreprise = entrepriseList.get(entrepriseList.size() - 1);
        assertThat(testEntreprise.getNom()).isEqualTo(UPDATED_NOM);
        assertThat(testEntreprise.getNinea()).isEqualTo(UPDATED_NINEA);
        assertThat(testEntreprise.getDateCreation()).isEqualTo(UPDATED_DATE_CREATION);
        assertThat(testEntreprise.getNbreEmploye()).isEqualTo(UPDATED_NBRE_EMPLOYE);
    }

    @Test
    void putNonExistingEntreprise() throws Exception {
        int databaseSizeBeforeUpdate = entrepriseRepository.findAll().collectList().block().size();
        entreprise.setId(count.incrementAndGet());

        // Create the Entreprise
        EntrepriseDTO entrepriseDTO = entrepriseMapper.toDto(entreprise);

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        webTestClient
            .put()
            .uri(ENTITY_API_URL_ID, entrepriseDTO.getId())
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(entrepriseDTO))
            .exchange()
            .expectStatus()
            .isBadRequest();

        // Validate the Entreprise in the database
        List<Entreprise> entrepriseList = entrepriseRepository.findAll().collectList().block();
        assertThat(entrepriseList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void putWithIdMismatchEntreprise() throws Exception {
        int databaseSizeBeforeUpdate = entrepriseRepository.findAll().collectList().block().size();
        entreprise.setId(count.incrementAndGet());

        // Create the Entreprise
        EntrepriseDTO entrepriseDTO = entrepriseMapper.toDto(entreprise);

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        webTestClient
            .put()
            .uri(ENTITY_API_URL_ID, count.incrementAndGet())
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(entrepriseDTO))
            .exchange()
            .expectStatus()
            .isBadRequest();

        // Validate the Entreprise in the database
        List<Entreprise> entrepriseList = entrepriseRepository.findAll().collectList().block();
        assertThat(entrepriseList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void putWithMissingIdPathParamEntreprise() throws Exception {
        int databaseSizeBeforeUpdate = entrepriseRepository.findAll().collectList().block().size();
        entreprise.setId(count.incrementAndGet());

        // Create the Entreprise
        EntrepriseDTO entrepriseDTO = entrepriseMapper.toDto(entreprise);

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        webTestClient
            .put()
            .uri(ENTITY_API_URL)
            .contentType(MediaType.APPLICATION_JSON)
            .bodyValue(TestUtil.convertObjectToJsonBytes(entrepriseDTO))
            .exchange()
            .expectStatus()
            .isEqualTo(405);

        // Validate the Entreprise in the database
        List<Entreprise> entrepriseList = entrepriseRepository.findAll().collectList().block();
        assertThat(entrepriseList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void partialUpdateEntrepriseWithPatch() throws Exception {
        // Initialize the database
        entrepriseRepository.save(entreprise).block();

        int databaseSizeBeforeUpdate = entrepriseRepository.findAll().collectList().block().size();

        // Update the entreprise using partial update
        Entreprise partialUpdatedEntreprise = new Entreprise();
        partialUpdatedEntreprise.setId(entreprise.getId());

        partialUpdatedEntreprise.nom(UPDATED_NOM).ninea(UPDATED_NINEA).dateCreation(UPDATED_DATE_CREATION);

        webTestClient
            .patch()
            .uri(ENTITY_API_URL_ID, partialUpdatedEntreprise.getId())
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(TestUtil.convertObjectToJsonBytes(partialUpdatedEntreprise))
            .exchange()
            .expectStatus()
            .isOk();

        // Validate the Entreprise in the database
        List<Entreprise> entrepriseList = entrepriseRepository.findAll().collectList().block();
        assertThat(entrepriseList).hasSize(databaseSizeBeforeUpdate);
        Entreprise testEntreprise = entrepriseList.get(entrepriseList.size() - 1);
        assertThat(testEntreprise.getNom()).isEqualTo(UPDATED_NOM);
        assertThat(testEntreprise.getNinea()).isEqualTo(UPDATED_NINEA);
        assertThat(testEntreprise.getDateCreation()).isEqualTo(UPDATED_DATE_CREATION);
        assertThat(testEntreprise.getNbreEmploye()).isEqualTo(DEFAULT_NBRE_EMPLOYE);
    }

    @Test
    void fullUpdateEntrepriseWithPatch() throws Exception {
        // Initialize the database
        entrepriseRepository.save(entreprise).block();

        int databaseSizeBeforeUpdate = entrepriseRepository.findAll().collectList().block().size();

        // Update the entreprise using partial update
        Entreprise partialUpdatedEntreprise = new Entreprise();
        partialUpdatedEntreprise.setId(entreprise.getId());

        partialUpdatedEntreprise
            .nom(UPDATED_NOM)
            .ninea(UPDATED_NINEA)
            .dateCreation(UPDATED_DATE_CREATION)
            .nbreEmploye(UPDATED_NBRE_EMPLOYE);

        webTestClient
            .patch()
            .uri(ENTITY_API_URL_ID, partialUpdatedEntreprise.getId())
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(TestUtil.convertObjectToJsonBytes(partialUpdatedEntreprise))
            .exchange()
            .expectStatus()
            .isOk();

        // Validate the Entreprise in the database
        List<Entreprise> entrepriseList = entrepriseRepository.findAll().collectList().block();
        assertThat(entrepriseList).hasSize(databaseSizeBeforeUpdate);
        Entreprise testEntreprise = entrepriseList.get(entrepriseList.size() - 1);
        assertThat(testEntreprise.getNom()).isEqualTo(UPDATED_NOM);
        assertThat(testEntreprise.getNinea()).isEqualTo(UPDATED_NINEA);
        assertThat(testEntreprise.getDateCreation()).isEqualTo(UPDATED_DATE_CREATION);
        assertThat(testEntreprise.getNbreEmploye()).isEqualTo(UPDATED_NBRE_EMPLOYE);
    }

    @Test
    void patchNonExistingEntreprise() throws Exception {
        int databaseSizeBeforeUpdate = entrepriseRepository.findAll().collectList().block().size();
        entreprise.setId(count.incrementAndGet());

        // Create the Entreprise
        EntrepriseDTO entrepriseDTO = entrepriseMapper.toDto(entreprise);

        // If the entity doesn't have an ID, it will throw BadRequestAlertException
        webTestClient
            .patch()
            .uri(ENTITY_API_URL_ID, entrepriseDTO.getId())
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(TestUtil.convertObjectToJsonBytes(entrepriseDTO))
            .exchange()
            .expectStatus()
            .isBadRequest();

        // Validate the Entreprise in the database
        List<Entreprise> entrepriseList = entrepriseRepository.findAll().collectList().block();
        assertThat(entrepriseList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void patchWithIdMismatchEntreprise() throws Exception {
        int databaseSizeBeforeUpdate = entrepriseRepository.findAll().collectList().block().size();
        entreprise.setId(count.incrementAndGet());

        // Create the Entreprise
        EntrepriseDTO entrepriseDTO = entrepriseMapper.toDto(entreprise);

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        webTestClient
            .patch()
            .uri(ENTITY_API_URL_ID, count.incrementAndGet())
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(TestUtil.convertObjectToJsonBytes(entrepriseDTO))
            .exchange()
            .expectStatus()
            .isBadRequest();

        // Validate the Entreprise in the database
        List<Entreprise> entrepriseList = entrepriseRepository.findAll().collectList().block();
        assertThat(entrepriseList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void patchWithMissingIdPathParamEntreprise() throws Exception {
        int databaseSizeBeforeUpdate = entrepriseRepository.findAll().collectList().block().size();
        entreprise.setId(count.incrementAndGet());

        // Create the Entreprise
        EntrepriseDTO entrepriseDTO = entrepriseMapper.toDto(entreprise);

        // If url ID doesn't match entity ID, it will throw BadRequestAlertException
        webTestClient
            .patch()
            .uri(ENTITY_API_URL)
            .contentType(MediaType.valueOf("application/merge-patch+json"))
            .bodyValue(TestUtil.convertObjectToJsonBytes(entrepriseDTO))
            .exchange()
            .expectStatus()
            .isEqualTo(405);

        // Validate the Entreprise in the database
        List<Entreprise> entrepriseList = entrepriseRepository.findAll().collectList().block();
        assertThat(entrepriseList).hasSize(databaseSizeBeforeUpdate);
    }

    @Test
    void deleteEntreprise() {
        // Initialize the database
        entrepriseRepository.save(entreprise).block();

        int databaseSizeBeforeDelete = entrepriseRepository.findAll().collectList().block().size();

        // Delete the entreprise
        webTestClient
            .delete()
            .uri(ENTITY_API_URL_ID, entreprise.getId())
            .accept(MediaType.APPLICATION_JSON)
            .exchange()
            .expectStatus()
            .isNoContent();

        // Validate the database contains one less item
        List<Entreprise> entrepriseList = entrepriseRepository.findAll().collectList().block();
        assertThat(entrepriseList).hasSize(databaseSizeBeforeDelete - 1);
    }
}
