import React from 'react';
import { Button, Header } from 'semantic-ui-react';

const PurchaseCard = ({ select, purchase }) => (
  <Button
    className="PurchaseCardButton"
    onClick={() => select()}
  >
    <div className="PurchaseCardContent">
      {purchase.reservedBy !== "None" &&
        <Header
          as="h5"
          className="PurchaseCardReservedBy"
        >
          Reserved by {purchase.reservedBy}
        </Header>
      }
      <Header
        as="h4"
        className="PurchaseCardTitle"
      >
        {purchase.title}
      </Header>
      <div className="PurchaseCardSubtitle">
        <Header
          as="h5"
          className="PurchaseCardCategory"
        >
          {purchase.category}
        </Header>
        <Header
          as="h5"
          className="PurchaseCardType"
        >
          {purchase.type}
        </Header>
      </div>
    <style>{`
      .PurchaseCardButton {
        background-color: #ffffff !important;
        border-radius: 0 !important;
        margin: 0 !important;
        margin-bottom: 2px !important;
        padding: 0 !important;
        width: 100%;
      }
      .PurchaseCardCategory {
        color: #666666 !important;
        font-weight: normal !important;
        margin: 0 !important;
        text-align: left;
        width: 50%;
      }
      .PurchaseCardContent {
        display: flex;
        flex-direction: column;
        height: 100%;
        padding: 15px 15px 30px 15px;
        width: 100%;
      }
      .PurchaseCardReservedBy {
        color: #666666 !important;
        font-weight: normal !important;
        margin: 0 !important;
        margin-bottom: 10px !important;
        text-align: left;
      }
      .PurchaseCardSubtitle {
        display: flex;
        flexDirection: row;
        margin-top: 10px !important;
        width: 100%;
      }
      .PurchaseCardTitle {
        color: #000000 !important;
        font-weight: normal !important;
        text-align: left;
        margin: 0 !important;
        width: 100%;
      }
      .PurchaseCardType {
        color: #000000 !important;
        font-weight: normal !important;
        margin: 0 !important;
        text-align: right;
        width: 50%;
      }
    `}</style>
    </div>
  </Button>
);

export default PurchaseCard;
