import { createAction, props } from "@ngrx/store";

export const sumarAction = createAction('[Contador Component] Sumar',props<{ add:number }>())
export const restarAction = createAction('[Contador Component] Restar')