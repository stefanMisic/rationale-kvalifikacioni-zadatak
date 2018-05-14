import React from 'react';
import { Header } from 'semantic-ui-react';

const PurchaseTitle = ({ title }) => (
  <div className="PurchaseTitleContainer">
    <Header
      as="h5"
      className="PurchaseTitle"
    >
      {title}
    </Header>
    <style>{`
      .PurchaseTitle {
        align-items: center;
        background: #ffffff;
        color: #666666 !important;
        display: flex;
        font-weight: normal !important;
        height: 100%;
        justify-content: center;
        width: 100%;
      }
      .PurchaseTitleContainer {
        background: #e6e6e6;
        height: 40px;
        margin-top: 2px;
      }
      @media screen and (max-width: 425px) {
        .PurchaseTitleContainer {
          border-top: 1px solid #e6e6e6;
          display: ${title.length > 0 ? "normal" : "none"}
        }
      }
    `}</style>
  </div>
  
);

export default PurchaseTitle;
