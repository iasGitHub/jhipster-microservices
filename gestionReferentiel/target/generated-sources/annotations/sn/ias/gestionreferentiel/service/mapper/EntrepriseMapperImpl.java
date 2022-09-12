package sn.ias.gestionreferentiel.service.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import sn.ias.gestionreferentiel.domain.Entreprise;
import sn.ias.gestionreferentiel.service.dto.EntrepriseDTO;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-09-12T09:36:28+0000",
    comments = "version: 1.5.2.Final, compiler: javac, environment: Java 11.0.16 (Oracle Corporation)"
)
@Component
public class EntrepriseMapperImpl implements EntrepriseMapper {

    @Override
    public Entreprise toEntity(EntrepriseDTO dto) {
        if ( dto == null ) {
            return null;
        }

        Entreprise entreprise = new Entreprise();

        entreprise.setId( dto.getId() );
        entreprise.setNom( dto.getNom() );
        entreprise.setNinea( dto.getNinea() );
        entreprise.setDateCreation( dto.getDateCreation() );
        entreprise.setNbreEmploye( dto.getNbreEmploye() );

        return entreprise;
    }

    @Override
    public EntrepriseDTO toDto(Entreprise entity) {
        if ( entity == null ) {
            return null;
        }

        EntrepriseDTO entrepriseDTO = new EntrepriseDTO();

        entrepriseDTO.setId( entity.getId() );
        entrepriseDTO.setNom( entity.getNom() );
        entrepriseDTO.setNinea( entity.getNinea() );
        entrepriseDTO.setDateCreation( entity.getDateCreation() );
        entrepriseDTO.setNbreEmploye( entity.getNbreEmploye() );

        return entrepriseDTO;
    }

    @Override
    public List<Entreprise> toEntity(List<EntrepriseDTO> dtoList) {
        if ( dtoList == null ) {
            return null;
        }

        List<Entreprise> list = new ArrayList<Entreprise>( dtoList.size() );
        for ( EntrepriseDTO entrepriseDTO : dtoList ) {
            list.add( toEntity( entrepriseDTO ) );
        }

        return list;
    }

    @Override
    public List<EntrepriseDTO> toDto(List<Entreprise> entityList) {
        if ( entityList == null ) {
            return null;
        }

        List<EntrepriseDTO> list = new ArrayList<EntrepriseDTO>( entityList.size() );
        for ( Entreprise entreprise : entityList ) {
            list.add( toDto( entreprise ) );
        }

        return list;
    }

    @Override
    public void partialUpdate(Entreprise entity, EntrepriseDTO dto) {
        if ( dto == null ) {
            return;
        }

        if ( dto.getId() != null ) {
            entity.setId( dto.getId() );
        }
        if ( dto.getNom() != null ) {
            entity.setNom( dto.getNom() );
        }
        if ( dto.getNinea() != null ) {
            entity.setNinea( dto.getNinea() );
        }
        if ( dto.getDateCreation() != null ) {
            entity.setDateCreation( dto.getDateCreation() );
        }
        if ( dto.getNbreEmploye() != null ) {
            entity.setNbreEmploye( dto.getNbreEmploye() );
        }
    }
}
