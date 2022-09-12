package sn.ias.gestionreferentiel.service.impl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import sn.ias.gestionreferentiel.domain.Entreprise;
import sn.ias.gestionreferentiel.repository.EntrepriseRepository;
import sn.ias.gestionreferentiel.service.EntrepriseService;
import sn.ias.gestionreferentiel.service.dto.EntrepriseDTO;
import sn.ias.gestionreferentiel.service.mapper.EntrepriseMapper;

/**
 * Service Implementation for managing {@link Entreprise}.
 */
@Service
@Transactional
public class EntrepriseServiceImpl implements EntrepriseService {

    private final Logger log = LoggerFactory.getLogger(EntrepriseServiceImpl.class);

    private final EntrepriseRepository entrepriseRepository;

    private final EntrepriseMapper entrepriseMapper;

    public EntrepriseServiceImpl(EntrepriseRepository entrepriseRepository, EntrepriseMapper entrepriseMapper) {
        this.entrepriseRepository = entrepriseRepository;
        this.entrepriseMapper = entrepriseMapper;
    }

    @Override
    public Mono<EntrepriseDTO> save(EntrepriseDTO entrepriseDTO) {
        log.debug("Request to save Entreprise : {}", entrepriseDTO);
        return entrepriseRepository.save(entrepriseMapper.toEntity(entrepriseDTO)).map(entrepriseMapper::toDto);
    }

    @Override
    public Mono<EntrepriseDTO> update(EntrepriseDTO entrepriseDTO) {
        log.debug("Request to save Entreprise : {}", entrepriseDTO);
        return entrepriseRepository.save(entrepriseMapper.toEntity(entrepriseDTO)).map(entrepriseMapper::toDto);
    }

    @Override
    public Mono<EntrepriseDTO> partialUpdate(EntrepriseDTO entrepriseDTO) {
        log.debug("Request to partially update Entreprise : {}", entrepriseDTO);

        return entrepriseRepository
            .findById(entrepriseDTO.getId())
            .map(existingEntreprise -> {
                entrepriseMapper.partialUpdate(existingEntreprise, entrepriseDTO);

                return existingEntreprise;
            })
            .flatMap(entrepriseRepository::save)
            .map(entrepriseMapper::toDto);
    }

    @Override
    @Transactional(readOnly = true)
    public Flux<EntrepriseDTO> findAll(Pageable pageable) {
        log.debug("Request to get all Entreprises");
        return entrepriseRepository.findAllBy(pageable).map(entrepriseMapper::toDto);
    }

    public Mono<Long> countAll() {
        return entrepriseRepository.count();
    }

    @Override
    @Transactional(readOnly = true)
    public Mono<EntrepriseDTO> findOne(Long id) {
        log.debug("Request to get Entreprise : {}", id);
        return entrepriseRepository.findById(id).map(entrepriseMapper::toDto);
    }

    @Override
    public Mono<Void> delete(Long id) {
        log.debug("Request to delete Entreprise : {}", id);
        return entrepriseRepository.deleteById(id);
    }
}
