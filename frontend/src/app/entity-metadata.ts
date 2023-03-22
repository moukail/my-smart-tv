import {EntityMetadataMap} from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Channel: {},
  //Registration: {},
};

// because the plural of "hero" is not "heros"
const pluralNames = { Channel: 'Channels' };

export const entityConfig = {
  entityMetadata,
  pluralNames
};
