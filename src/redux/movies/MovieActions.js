
import {
 Types
} from './MovieTypes'

export const storeData =   (payload) => {
  return {
    type: Types.STORE_DATA,
    payload: payload
  }
  
}



