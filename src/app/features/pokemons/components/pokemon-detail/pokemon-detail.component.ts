import { Component, OnInit } from '@angular/core';
import { FetchDataComponent } from 'src/app/shared/abstracts/fetch-data/fetch-data.component';
import { PokemonDetailResponseDTO } from '../../models/pokemon.model';
import { Observable } from 'rxjs';
import { PokemonService } from '../../services/pokemon.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent extends FetchDataComponent<PokemonDetailResponseDTO> implements OnInit{
  constructor (private readonly pokemonService: PokemonService, private readonly route: ActivatedRoute){
    super();
  }
  override fetchData(): Observable<PokemonDetailResponseDTO> {
    const name =  this.route.snapshot.paramMap.get('name');

    if(!name){throw new Error('Pokemon name is not defined');}

    return this.pokemonService.getPokemonDetail(name);
  }

}
