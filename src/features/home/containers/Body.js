import React from 'react';
import { connect } from 'react-redux';

import './Containers.css';
import { Footer } from '../containers';
import { selectPurchase as selectPurchaseAction } from '../modules';
import { SearchInput, PurchaseCard, PurchaseDescription, PurchaseTitle, PurchasesTitle } from '../ui';

const BodyContainer = ({ activePurchase, purchases, selectPurchase }) => (
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
              isActive={activePurchase.id}
              key={purchase.id}
              purchase={purchase}
              select={selectPurchase}
            />
          )}
        </div>
      </div>
      <div className="Purchase">
        <PurchaseTitle title={activePurchase.title} />
        <PurchaseDescription
          description={activePurchase.description}
        />
      </div>
      <Footer />
    </div>
    <div className="LinearGradient" />
  </div>
);

const mapDispatchToProps = {
  selectPurchase: selectPurchaseAction
};

const mapStateToProps = ({ home }) => ({
  activePurchase: home.activePurchase,
  purchases: home.purchases
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BodyContainer);
