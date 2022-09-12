package sn.ias.gestionreferentiel.service.impl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import sn.ias.gestionreferentiel.domain.TypeSourceFinancement;
import sn.ias.gestionreferentiel.repository.TypeSourceFinancementRepository;
import sn.ias.gestionreferentiel.service.TypeSourceFinancementService;
import sn.ias.gestionreferentiel.service.dto.TypeSourceFinancementDTO;
import sn.ias.gestionreferentiel.service.mapper.TypeSourceFinancementMapper;

/**
 * Service Implementation for managing {@link TypeSourceFinancement}.
 */
@Service
@Transactional
public class TypeSourceFinancementServiceImpl implements TypeSourceFinancementService {

    private final Logger log = LoggerFactory.getLogger(TypeSourceFinancementServiceImpl.class);

    private final TypeSourceFinancementRepository typeSourceFinancementRepository;

    private final TypeSourceFinancementMapper typeSourceFinancementMapper;

    public TypeSourceFinancementServiceImpl(
        TypeSourceFinancementRepository typeSourceFinancementRepository,
        TypeSourceFinancementMapper typeSourceFinancementMapper
    ) {
        this.typeSourceFinancementRepository = typeSourceFinancementRepository;
        this.typeSourceFinancementMapper = typeSourceFinancementMapper;
    }

    @Override
    public Mono<TypeSourceFinancementDTO> save(TypeSourceFinancementDTO typeSourceFinancementDTO) {
        log.debug("Request to save TypeSourceFinancement : {}", typeSourceFinancementDTO);
        return typeSourceFinancementRepository
            .save(typeSourceFinancementMapper.toEntity(typeSourceFinancementDTO))
            .map(typeSourceFinancementMapper::toDto);
    }

    @Override
    public Mono<TypeSourceFinancementDTO> update(TypeSourceFinancementDTO typeSourceFinancementDTO) {
        log.debug("Request to save TypeSourceFinancement : {}", typeSourceFinancementDTO);
        return typeSourceFinancementRepository
            .save(typeSourceFinancementMapper.toEntity(typeSourceFinancementDTO))
            .map(typeSourceFinancementMapper::toDto);
    }

    @Override
    public Mono<TypeSourceFinancementDTO> partialUpdate(TypeSourceFinancementDTO typeSourceFinancementDTO) {
        log.debug("Request to partially update TypeSourceFinancement : {}", typeSourceFinancementDTO);

        return typeSourceFinancementRepository
            .findById(typeSourceFinancementDTO.getId())
            .map(existingTypeSourceFinancement -> {
                typeSourceFinancementMapper.partialUpdate(existingTypeSourceFinancement, typeSourceFinancementDTO);

                return existingTypeSourceFinancement;
            })
            .flatMap(typeSourceFinancementRepository::save)
            .map(typeSourceFinancementMapper::toDto);
    }

    @Override
    @Transactional(readOnly = true)
    public Flux<TypeSourceFinancementDTO> findAll(Pageable pageable) {
        log.debug("Request to get all TypeSourceFinancements");
        return typeSourceFinancementRepository.findAllBy(pageable).map(typeSourceFinancementMapper::toDto);
    }

    public Mono<Long> countAll() {
        return typeSourceFinancementRepository.count();
    }

    @Override
    @Transactional(readOnly = true)
    public Mono<TypeSourceFinancementDTO> findOne(Long id) {
        log.debug("Request to get TypeSourceFinancement : {}", id);
        return typeSourceFinancementRepository.findById(id).map(typeSourceFinancementMapper::toDto);
    }

    @Override
    public Mono<Void> delete(Long id) {
        log.debug("Request to delete TypeSourceFinancement : {}", id);
        return typeSourceFinancementRepository.deleteById(id);
    }
}
