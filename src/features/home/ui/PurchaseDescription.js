import React from 'react';
import { Header } from 'semantic-ui-react';

const PurchaseDescription = ({ description, title }) => (
  <div className="PurchaseDescriptionContainer">
    <Header
      as="h4"
      className="PurchaseDescriptionTitle"
    >
      {title}
    </Header>
    <Header
      as="h4"
      className="PurchaseDescription"
    >
      {description}
    </Header>
    <style>{`
      .PurchaseDescription {
        color: #666666 !important;
        font-weight: normal !important;
        text-align: justify;
      }
      .PurchaseDescriptionContainer {
        background: #d5f2f5;
        height: 100%;
        padding: 30px;
        padding-bottom: 100px;
      }
      .PurchaseDescriptionTitle {
        color: #666666 !important;
      }
    `}</style>
  </div>
);

export default PurchaseDescription;
