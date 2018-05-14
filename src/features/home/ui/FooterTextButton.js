import React from 'react';
import { Button } from 'semantic-ui-react';

const FooterColorButton = ({ onClick, text }) => (
  <Button
    className="FooterTextButton"
    onClick={() => onClick()}
    size="tiny"
  >
    {text}
    <style>{`
      .FooterTextButton {
        background-color: #3b4549 !important;
        color: #ffffff !important;
        font-weight: normal !important;
        height: 35px;
        margin-left: 5px !important;
        padding: 0 10px !important;
      }
    `}</style>
  </Button>
);

export default FooterColorButton;
