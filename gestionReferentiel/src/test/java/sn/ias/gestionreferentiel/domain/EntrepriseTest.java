package sn.ias.gestionreferentiel.domain;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import sn.ias.gestionreferentiel.web.rest.TestUtil;

class EntrepriseTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Entreprise.class);
        Entreprise entreprise1 = new Entreprise();
        entreprise1.setId(1L);
        Entreprise entreprise2 = new Entreprise();
        entreprise2.setId(entreprise1.getId());
        assertThat(entreprise1).isEqualTo(entreprise2);
        entreprise2.setId(2L);
        assertThat(entreprise1).isNotEqualTo(entreprise2);
        entreprise1.setId(null);
        assertThat(entreprise1).isNotEqualTo(entreprise2);
    }
}
