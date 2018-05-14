import React from 'react';

import './Containers.css';
import { Footer } from '../containers';
import { SearchInput, PurchaseCard, PurchaseDescription, PurchaseTitle, PurchasesTitle } from '../ui';

const purchases = [
  {
    category: 'Category 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed nisl ipsum. Vestibulum imperdiet, diam et dapibus mattis, enim est sagittis leo, in fringilla dui ex nec nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse condimentum ut eros et dictum. Nulla facilisi. Donec tincidunt tincidunt orci sit amet rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    id: '1',
    reservedBy: 'You',
    title: 'Purchase order title number 0000000000001',
    type: 'Type 1'
  },
  {
    category: 'Category 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed nisl ipsum. Vestibulum imperdiet, diam et dapibus mattis, enim est sagittis leo, in fringilla dui ex nec nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse condimentum ut eros et dictum. Nulla facilisi. Donec tincidunt tincidunt orci sit amet rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    id: '2',
    reservedBy: 'None',
    title: 'Purchase order title number 0000000000002',
    type: 'Type 2'
  },
  {
    category: 'Category 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed nisl ipsum. Vestibulum imperdiet, diam et dapibus mattis, enim est sagittis leo, in fringilla dui ex nec nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse condimentum ut eros et dictum. Nulla facilisi. Donec tincidunt tincidunt orci sit amet rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    id: '3',
    reservedBy: 'You',
    title: 'Purchase order title number 0000000000003',
    type: 'Type 3'
  },
  {
    category: 'Category 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed nisl ipsum. Vestibulum imperdiet, diam et dapibus mattis, enim est sagittis leo, in fringilla dui ex nec nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse condimentum ut eros et dictum. Nulla facilisi. Donec tincidunt tincidunt orci sit amet rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    id: '4',
    reservedBy: 'None',
    title: 'Purchase order title number 0000000000004',
    type: 'Type 4'
  },
  {
    category: 'Category 5',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed nisl ipsum. Vestibulum imperdiet, diam et dapibus mattis, enim est sagittis leo, in fringilla dui ex nec nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse condimentum ut eros et dictum. Nulla facilisi. Donec tincidunt tincidunt orci sit amet rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    id: '5',
    reservedBy: 'You',
    title: 'Purchase order title number 0000000000005',
    type: 'Type 5'
  }
]

const BodyContainer = () => (
  <div className="Body">
    <div className="LinearGradient" />
    <div className="DataContainer">
      <div className="Purchases">
        <PurchasesTitle
          goBack={() => console.log('GO BACK')}
          purchasesNumber={100}
          viewList={() => console.log('VIEW LIST')}
        />
        <SearchInput
          refresh={() => console.log('REFRESH')}
          search={() => console.log('SEARCH')}
        />
        <div className="PurchaseCards">
          {purchases.map(purchase =>
            <PurchaseCard
              key={purchase.id}
              purchase={purchase}
              select={() => console.log('SELECT')}
            />
          )}
        </div>
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
