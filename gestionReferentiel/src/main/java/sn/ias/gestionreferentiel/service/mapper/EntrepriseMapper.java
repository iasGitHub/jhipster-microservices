package sn.ias.gestionreferentiel.service.mapper;

import org.mapstruct.*;
import sn.ias.gestionreferentiel.domain.Entreprise;
import sn.ias.gestionreferentiel.service.dto.EntrepriseDTO;

/**
 * Mapper for the entity {@link Entreprise} and its DTO {@link EntrepriseDTO}.
 */
@Mapper(componentModel = "spring")
public interface EntrepriseMapper extends EntityMapper<EntrepriseDTO, Entreprise> {}
