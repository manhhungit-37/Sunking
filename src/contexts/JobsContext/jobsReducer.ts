import { ListingData } from '@/constant/listings';
import { AppData } from './initialData';

export interface Action {
  type: string;
  [key: string]: any;
}

export const jobsReducer = (appState: AppData, action: Action): AppData => {
  const newData = { ...appState };
  let jobToChange: ListingData | undefined;

  switch (action.type) {
  case 'UNSAVE_JOB':
    jobToChange = newData.listings.find((job) => job.id === action.id);
    if (!jobToChange) return appState;
    jobToChange.saved = false;
    return newData;
  case 'SAVE_JOB':
    jobToChange = newData.listings.find((job) => job.id === action.id);
    if (!jobToChange) return appState;
    jobToChange.saved = true;
    return newData;
  case 'SET_ACTIVE_LISITNG':
    newData.activeListing = action.listing;
    return newData;
  case 'SET_PAGE':
    newData.page = action.page;
    return newData;
  default:
    console.log('jobsReducer default fired');
    return appState;
  }
};
