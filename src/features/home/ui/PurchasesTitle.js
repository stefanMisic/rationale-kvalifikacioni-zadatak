import React from 'react';
import { Button, Icon, Header } from 'semantic-ui-react';

const PurchasesTitle = ({ goBack, purchasesNumber, viewList }) => (
  <div className="PurchasesTitleContainer">
    <Button
      className="PurchasesTitleButton"
      icon
      onClick={() => goBack()}
    >
      <Icon
        name="arrow left"
        size="large"
      />
    </Button>
    <Header
      as="h5"
      className="PurchasesTitle"
    >
      All items ({purchasesNumber})
    </Header>
    <Button
      className="PurchasesTitleButton"
      icon
      onClick={() => viewList()}
    >
      <Icon
        name="unordered list"
        size="large"
      />
    </Button>
    <style>{`
      .PurchasesTitle {
        align-items: center;
        background: #ffffff;
        color: #666666 !important;
        display: flex;
        font-weight: normal !important;
        height: 100%;
        justify-content: center;
        margin: 0 !important;
        width: 100%;
      }
      .PurchasesTitleButton {
        background-color: #ffffff !important;
        border-radius: 0 !important;
        margin: 0 !important;
      }
      .PurchasesTitleContainer {
        background: #e6e6e6;
        display: flex;
        flex-direction: row;
        height: 40px;
        padding: 0 2px;
      }
    `}</style>
  </div>
  
);

export default PurchasesTitle;
