import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonDetailResponseDTO, PokemonListResponseDTO } from '../models/pokemon.model';
import { Pagination } from 'src/app/shared/models/pagination.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2';

  constructor(private readonly httpClient: HttpClient) {

  }

  getPokemons({ limit, offset }: Pagination): Observable<PokemonListResponseDTO> {
    return this.httpClient.get<PokemonListResponseDTO>(`${this.apiUrl}/pokemon?limit=${limit}&offset=${offset}`);
  }

  getPokemonDetail(name: string): Observable<PokemonDetailResponseDTO> {
    return this.httpClient.get<PokemonDetailResponseDTO>(`${this.apiUrl}/pokemon/${name}`);
  }

      
}
