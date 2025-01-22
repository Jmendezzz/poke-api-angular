import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsRoutingModule } from './pokemons-routing.module';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { PokemonListPageComponent } from './pages/pokemon-list-page/pokemon-list-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { PokemonDetailPageComponent } from './pages/pokemon-detail-page/pokemon-detail-page.component';
import { PokemonDetailComponent } from './components/pokemon-detail/pokemon-detail.component';


@NgModule({
  declarations: [PokemonListComponent, PokemonListPageComponent, PokemonCardComponent, PokemonDetailPageComponent, PokemonDetailComponent],
  imports: [
    CommonModule,
    PokemonsRoutingModule,
    SharedModule
  ]
})
export class PokemonsModule { }
