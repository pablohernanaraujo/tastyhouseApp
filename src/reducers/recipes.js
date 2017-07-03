import * as types from '../actions/types'
import initialState from './initialState'

export default function recipesReducer(state = initialState.recipes, action){
  switch(action.type){
    case types.FETCH_RECIPES:
      return action.recipes;

    default:
      return state;
  }
}
