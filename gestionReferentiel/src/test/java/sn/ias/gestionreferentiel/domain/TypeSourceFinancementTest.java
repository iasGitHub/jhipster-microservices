package sn.ias.gestionreferentiel.domain;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import sn.ias.gestionreferentiel.web.rest.TestUtil;

class TypeSourceFinancementTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(TypeSourceFinancement.class);
        TypeSourceFinancement typeSourceFinancement1 = new TypeSourceFinancement();
        typeSourceFinancement1.setId(1L);
        TypeSourceFinancement typeSourceFinancement2 = new TypeSourceFinancement();
        typeSourceFinancement2.setId(typeSourceFinancement1.getId());
        assertThat(typeSourceFinancement1).isEqualTo(typeSourceFinancement2);
        typeSourceFinancement2.setId(2L);
        assertThat(typeSourceFinancement1).isNotEqualTo(typeSourceFinancement2);
        typeSourceFinancement1.setId(null);
        assertThat(typeSourceFinancement1).isNotEqualTo(typeSourceFinancement2);
    }
}
