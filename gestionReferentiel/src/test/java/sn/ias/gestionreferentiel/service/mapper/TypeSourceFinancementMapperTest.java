package sn.ias.gestionreferentiel.service.mapper;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class TypeSourceFinancementMapperTest {

    private TypeSourceFinancementMapper typeSourceFinancementMapper;

    @BeforeEach
    public void setUp() {
        typeSourceFinancementMapper = new TypeSourceFinancementMapperImpl();
    }
}
