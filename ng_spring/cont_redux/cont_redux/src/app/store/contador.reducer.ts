import { createReducer, on } from "@ngrx/store";
import { restarAction, sumarAction } from "./contador.action";

export const inititalState = 0;

export const counterReducer = createReducer(  inititalState, 
    on( sumarAction, (state, payload)=>{
        return  state + payload.add
    } ),
    on( restarAction, (state)=>{
        return state - 1
    } ),

)