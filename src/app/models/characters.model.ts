export interface CharacterDataWrapper {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  data: CharacterDataContainer;
  etag: string;
}

export interface CharacterDataContainer {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Character[];
}

export interface Character {
  id: number;
  name: string;
  description: string;
  modified: Date;
  resourceURI: string;
  urls: Url[];
  thumbnail: Image;
  comics: ComicList;
  stories: StoryList;
  events: EventList;
  series: SeriesList;
}

export interface Url {
  type: string;
  url: string;
}

export interface Image {
  path: string;
  extension: string;
}

export interface ComicList {
  available: number;
  returned: number;
  collectionURI: string;
  items: ComicSummary[];
}

export interface ComicSummary {
  resourceURI: string;
  name: string;
}

export interface StoryList {
  available: number;
  returned: number;
  collectionURI: string;
  items: StorySummary[];
}

export interface StorySummary {
  resourceURI: string;
  name: string;
  type: string;
}

export interface EventList {
  available: number;
  returned: number;
  collectionURI: string;
  items: EventSummary[];
}

export interface EventSummary {
  resourceURI: string;
  name: string;
}

export interface SeriesList {
  available: number;
  returned: number;
  collectionURI: string;
  items: SeriesSummary[];
}
export interface SeriesSummary {
  resourceURI: string;
  name: string;
}

export interface CharactersParameters {
  name?: string;
  nameStartsWith?: string;
  modifiedSince?: Date;
  comics?: number;
  series?: number;
  events?: number;
  stories?: number;
  orderBy?: string;
  limit?: number;
  offset?: number;
}

export interface PaginationParams {
  currentPage: number;
  limit: number;
  offset?: number;
  total?: number;
  pagesTotal?: number;
}
