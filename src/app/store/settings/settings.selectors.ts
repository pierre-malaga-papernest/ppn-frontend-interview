import { Settings } from "@interfaces/settings";
import { createFeatureSelector } from "@ngrx/store";

export const selectSettings = createFeatureSelector<Settings>('settings');

