package sn.ias.gestionreferentiel.service.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import sn.ias.gestionreferentiel.domain.Entreprise;
import sn.ias.gestionreferentiel.domain.TypeSourceFinancement;
import sn.ias.gestionreferentiel.service.dto.EntrepriseDTO;
import sn.ias.gestionreferentiel.service.dto.TypeSourceFinancementDTO;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-09-12T09:36:28+0000",
    comments = "version: 1.5.2.Final, compiler: javac, environment: Java 11.0.16 (Oracle Corporation)"
)
@Component
public class TypeSourceFinancementMapperImpl implements TypeSourceFinancementMapper {

    @Override
    public TypeSourceFinancement toEntity(TypeSourceFinancementDTO dto) {
        if ( dto == null ) {
            return null;
        }

        TypeSourceFinancement typeSourceFinancement = new TypeSourceFinancement();

        typeSourceFinancement.setId( dto.getId() );
        typeSourceFinancement.setCode( dto.getCode() );
        typeSourceFinancement.setLibelle( dto.getLibelle() );
        typeSourceFinancement.entrepriseTypeSourceFinancement( entrepriseDTOToEntreprise( dto.getEntrepriseTypeSourceFinancement() ) );

        return typeSourceFinancement;
    }

    @Override
    public List<TypeSourceFinancement> toEntity(List<TypeSourceFinancementDTO> dtoList) {
        if ( dtoList == null ) {
            return null;
        }

        List<TypeSourceFinancement> list = new ArrayList<TypeSourceFinancement>( dtoList.size() );
        for ( TypeSourceFinancementDTO typeSourceFinancementDTO : dtoList ) {
            list.add( toEntity( typeSourceFinancementDTO ) );
        }

        return list;
    }

    @Override
    public List<TypeSourceFinancementDTO> toDto(List<TypeSourceFinancement> entityList) {
        if ( entityList == null ) {
            return null;
        }

        List<TypeSourceFinancementDTO> list = new ArrayList<TypeSourceFinancementDTO>( entityList.size() );
        for ( TypeSourceFinancement typeSourceFinancement : entityList ) {
            list.add( toDto( typeSourceFinancement ) );
        }

        return list;
    }

    @Override
    public void partialUpdate(TypeSourceFinancement entity, TypeSourceFinancementDTO dto) {
        if ( dto == null ) {
            return;
        }

        if ( dto.getId() != null ) {
            entity.setId( dto.getId() );
        }
        if ( dto.getCode() != null ) {
            entity.setCode( dto.getCode() );
        }
        if ( dto.getLibelle() != null ) {
            entity.setLibelle( dto.getLibelle() );
        }
        if ( dto.getEntrepriseTypeSourceFinancement() != null ) {
            if ( entity.getEntrepriseTypeSourceFinancement() == null ) {
                entity.entrepriseTypeSourceFinancement( new Entreprise() );
            }
            entrepriseDTOToEntreprise1( dto.getEntrepriseTypeSourceFinancement(), entity.getEntrepriseTypeSourceFinancement() );
        }
    }

    @Override
    public TypeSourceFinancementDTO toDto(TypeSourceFinancement s) {
        if ( s == null ) {
            return null;
        }

        TypeSourceFinancementDTO typeSourceFinancementDTO = new TypeSourceFinancementDTO();

        typeSourceFinancementDTO.setEntrepriseTypeSourceFinancement( toDtoEntrepriseId( s.getEntrepriseTypeSourceFinancement() ) );
        typeSourceFinancementDTO.setId( s.getId() );
        typeSourceFinancementDTO.setCode( s.getCode() );
        typeSourceFinancementDTO.setLibelle( s.getLibelle() );

        return typeSourceFinancementDTO;
    }

    @Override
    public EntrepriseDTO toDtoEntrepriseId(Entreprise entreprise) {
        if ( entreprise == null ) {
            return null;
        }

        EntrepriseDTO entrepriseDTO = new EntrepriseDTO();

        entrepriseDTO.setId( entreprise.getId() );

        return entrepriseDTO;
    }

    protected Entreprise entrepriseDTOToEntreprise(EntrepriseDTO entrepriseDTO) {
        if ( entrepriseDTO == null ) {
            return null;
        }

        Entreprise entreprise = new Entreprise();

        entreprise.setId( entrepriseDTO.getId() );
        entreprise.setNom( entrepriseDTO.getNom() );
        entreprise.setNinea( entrepriseDTO.getNinea() );
        entreprise.setDateCreation( entrepriseDTO.getDateCreation() );
        entreprise.setNbreEmploye( entrepriseDTO.getNbreEmploye() );

        return entreprise;
    }

    protected void entrepriseDTOToEntreprise1(EntrepriseDTO entrepriseDTO, Entreprise mappingTarget) {
        if ( entrepriseDTO == null ) {
            return;
        }

        if ( entrepriseDTO.getId() != null ) {
            mappingTarget.setId( entrepriseDTO.getId() );
        }
        if ( entrepriseDTO.getNom() != null ) {
            mappingTarget.setNom( entrepriseDTO.getNom() );
        }
        if ( entrepriseDTO.getNinea() != null ) {
            mappingTarget.setNinea( entrepriseDTO.getNinea() );
        }
        if ( entrepriseDTO.getDateCreation() != null ) {
            mappingTarget.setDateCreation( entrepriseDTO.getDateCreation() );
        }
        if ( entrepriseDTO.getNbreEmploye() != null ) {
            mappingTarget.setNbreEmploye( entrepriseDTO.getNbreEmploye() );
        }
    }
}
