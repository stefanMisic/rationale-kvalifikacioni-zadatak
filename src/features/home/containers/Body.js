import React from 'react';

import './Containers.css';
import { Footer } from '../containers';
import { SearchInput, PurchaseDescription, PurchaseTitle } from '../ui';

const BodyContainer = () => (
  <div className="Body">
    <div className="LinearGradient" />
    <div className="DataContainer">
      <div className="Purchases">
        <SearchInput
          refresh={() => console.log('REFRESH')}
          search={() => console.log('SEARCH')}
        />
      </div>
      <div className="Purchase">
        <PurchaseTitle title="Title" />
        <PurchaseDescription
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed nisl ipsum. Vestibulum imperdiet, diam et dapibus mattis, enim est sagittis leo, in fringilla dui ex nec nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse condimentum ut eros et dictum. Nulla facilisi. Donec tincidunt tincidunt orci sit amet rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          title="Purchase Title"
        />
      </div>
      <Footer />
    </div>
    <div className="LinearGradient" />
  </div>
);

export default BodyContainer;
