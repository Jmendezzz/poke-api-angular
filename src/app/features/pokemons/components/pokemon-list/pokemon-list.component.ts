import { Component } from '@angular/core';
import { FetchDataComponent } from 'src/app/shared/abstracts/fetch-data/fetch-data.component';
import { PokemonListResponseDTO } from '../../models/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';
import { Observable } from 'rxjs';
import { Pagination } from 'src/app/shared/models/pagination.model';
import { PaginationService } from 'src/app/shared/services/pagination.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent extends FetchDataComponent<PokemonListResponseDTO> {
  totalItems = 1240;

  constructor(private readonly pokemonService: PokemonService, paginationService: PaginationService) {
    super(paginationService);
  }

  override fetchData(pagination: Pagination): Observable<PokemonListResponseDTO> {
    return this.pokemonService.getPokemons(pagination);
  }

}
