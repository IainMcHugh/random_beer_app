import { StringLiteral } from "typescript";

export interface RandomBeer {
  abv: string;
  createDate: string;
  id: string;
  isRetired: string;
  name: string;
  nameDisplay: string;
  status: string;
  statusDisplay: string;
  style: {
    description: string;
  };
  styleId: string;
  updateDate: string;
  labels?: Labels
}

export interface BeerInterface extends RandomBeer {
  available: {},
  availableId: number;
  glass: {},
  glasswareId: number,
  isOrganic: string,
  srm: {},
  srmId: number,
  labels: Labels
}

export interface Labels {
  contentAwareIcon: string;
  contentAwareLarge: string;
  contentAwareMedium: string;
  icon: string;
  large: string;
  medium: string;
}

export interface BreweryShortInterface {
  createDate: string;
  id: string;
  isInBusiness: string;
  isVerified: string;
  name: string;
  nameShortDisplay: string;
  status: string;
  statusDisplay: string;
  updateDate: string;
}

export interface BreweryInterface {
  createDate: string;
  description: string;
  established: string;
  id: string;
  images: {
    icon: string;
    large: string;
    medium: string;
    squareLarge: string;
    squareMedium: string;
  }
  isInBusiness: string;
  isMassOwned: string;
  isVerified: string;
  isOrganic: string;
  name: string;
  nameShortDisplay: string;
  status: string;
  statusDisplay: string;
  updateDate: string;
  website: string;
}