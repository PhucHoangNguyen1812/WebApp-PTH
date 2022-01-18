export const ALL_PRODUCT_REQUEST = "ALL_PRODUCT_REQUEST";
export const ALL_PRODUCT_SUCCESS = "ALL_PRODUCT_SUCCESS";
export const ALL_PRODUCT_FAIL = "ALL_PRODUCT_FAIL";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export type ProductType = {
    abilities: ProductAbility[],
    sprites: ProductSprites,
    stats: ProductStat[]
}

export type ProductAbility = {
    ability: {
      name: string
      url: string
    }
  }
  
  export type ProductSprites = {
    front_default: string
  }
  
  export type ProductStat = {
    base_stat: number,
    stat: {
      name: string
    }
  }

export type ErrorType = {
    // abilities: PokemonAbility[],
    // sprites: PokemonSprites,
    // stats: PokemonStat[]
}

export type FailType = {
    // abilities: PokemonAbility[],
    // sprites: PokemonSprites,
    // stats: PokemonStat[]
}

export interface ProductRequest {
    type: typeof ALL_PRODUCT_REQUEST
}

export interface ProductFail {
    type: typeof ALL_PRODUCT_FAIL
    //payload: FailType
}

export interface ProductSuccess {
    type: typeof ALL_PRODUCT_SUCCESS,
    payload: ProductType
}

export interface ProductError {
    type: typeof CLEAR_ERRORS,
    //payload: ErrorType
}

export type ProductDispatchTypes = ProductRequest | ProductFail | ProductSuccess | ProductError