export interface PokemonListResponseDTO {
    count: number;
    next: string;
    previous: string;
    results: PokemonListItemDTO[];
}

export interface PokemonListItemDTO {
    name: string;
    url: string;
}

export interface PokemonDetailResponseDTO {
    id: number;
    name: string;
    height: number;
    weight: number;
    abilities: PokemonAbilityDTO[];
    sprites: PokemonSpritesDTO;
}

export interface PokemonAbilityDTO {
    ability: {
        name: string;
        url: string;
    };
    is_hidden: boolean;
    slot: number;
}

export interface PokemonSpritesDTO{
    front_default: string;
}
