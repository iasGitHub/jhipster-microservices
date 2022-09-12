package sn.ias.gestionreferentiel.service.mapper;

import org.mapstruct.*;
import sn.ias.gestionreferentiel.domain.Entreprise;
import sn.ias.gestionreferentiel.domain.TypeSourceFinancement;
import sn.ias.gestionreferentiel.service.dto.EntrepriseDTO;
import sn.ias.gestionreferentiel.service.dto.TypeSourceFinancementDTO;

/**
 * Mapper for the entity {@link TypeSourceFinancement} and its DTO {@link TypeSourceFinancementDTO}.
 */
@Mapper(componentModel = "spring")
public interface TypeSourceFinancementMapper extends EntityMapper<TypeSourceFinancementDTO, TypeSourceFinancement> {
    @Mapping(target = "entrepriseTypeSourceFinancement", source = "entrepriseTypeSourceFinancement", qualifiedByName = "entrepriseId")
    TypeSourceFinancementDTO toDto(TypeSourceFinancement s);

    @Named("entrepriseId")
    @BeanMapping(ignoreByDefault = true)
    @Mapping(target = "id", source = "id")
    EntrepriseDTO toDtoEntrepriseId(Entreprise entreprise);
}
