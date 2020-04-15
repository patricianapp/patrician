import React, { ReactElement } from 'react';
import CollectionComponent from '../../src/components/collection/Collection';
import collectionMockData from '../../data/mock-data-1.json';

interface Props {

}

export default function UserPage({}: Props): ReactElement {
  return (
    <div>
      <CollectionComponent collection={collectionMockData}></CollectionComponent>
    </div>
  );
}
