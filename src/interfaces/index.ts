export interface RandomBeer {
  abv: string;
  createDate: string;
  id: string;
  isRetired: string;
  name: string;
  nameDisplay: string;
  status: string;
  statusDisplay: string;
  style: {};
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
