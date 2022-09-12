package sn.ias.gestionreferentiel.service.dto;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import sn.ias.gestionreferentiel.web.rest.TestUtil;

class TypeSourceFinancementDTOTest {

    @Test
    void dtoEqualsVerifier() throws Exception {
        TestUtil.equalsVerifier(TypeSourceFinancementDTO.class);
        TypeSourceFinancementDTO typeSourceFinancementDTO1 = new TypeSourceFinancementDTO();
        typeSourceFinancementDTO1.setId(1L);
        TypeSourceFinancementDTO typeSourceFinancementDTO2 = new TypeSourceFinancementDTO();
        assertThat(typeSourceFinancementDTO1).isNotEqualTo(typeSourceFinancementDTO2);
        typeSourceFinancementDTO2.setId(typeSourceFinancementDTO1.getId());
        assertThat(typeSourceFinancementDTO1).isEqualTo(typeSourceFinancementDTO2);
        typeSourceFinancementDTO2.setId(2L);
        assertThat(typeSourceFinancementDTO1).isNotEqualTo(typeSourceFinancementDTO2);
        typeSourceFinancementDTO1.setId(null);
        assertThat(typeSourceFinancementDTO1).isNotEqualTo(typeSourceFinancementDTO2);
    }
}
