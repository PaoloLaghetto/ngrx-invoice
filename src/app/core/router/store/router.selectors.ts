import { createFeatureSelector } from '@ngrx/store';
import {RouterReducerState} from "@ngrx/router-store";

// createFeatureSelector identifica una parte dello store top level
export const getRouter = createFeatureSelector<any, RouterReducerState>('router');
// export const getRoute = state => state.router;
