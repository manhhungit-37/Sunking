import { listingsData, ListingData } from '@/constant/listings';

export interface AppData {
  activeListing: ListingData | null;
  page: number;
  listings: ListingData[];
}

export const initialData: AppData = {
  activeListing: null,
  page: 1,
  listings: listingsData,
};
