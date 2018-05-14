import React from 'react';
import { Header } from 'semantic-ui-react';

const PurchaseDescription = ({ description }) => (
  <div className="PurchaseDescriptionContainer">
    <Header
      as="h4"
      className="PurchaseDescriptionTitle"
    >
      {description.length > 0 ? 'Purchase order' : 'Select a purchase'}
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
        background: ${description.length > 0 ? "#d5f2f5" : "#ffffff"};
        height: 100%;
        padding: 30px;
        padding-bottom: 100px;
      }
      .PurchaseDescriptionTitle {
        color: #666666 !important;
      }
      @media screen and (max-width: 425px) {
        .PurchaseDescriptionContainer {
          border-top: 1px solid #e6e6e6;
        }
      }
    `}</style>
  </div>
);

export default PurchaseDescription;
