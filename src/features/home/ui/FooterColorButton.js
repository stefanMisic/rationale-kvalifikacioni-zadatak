import React from 'react';
import { Button } from 'semantic-ui-react';

const FooterColorButton = ({ color, onClick, text }) => (
  <Button
    className={color}
    onClick={() => onClick()}
    size="tiny"
  >
    {text}
    <style>{`
      .Green {
        background-color: #007f36 !important;
        border-radius: 2px !important;
        color: #ffffff !important;
        font-weight: normal !important;
        height: 35px;
        padding: 0 10px !important;
      }
      .Red {
        background-color: #e00000 !important;
        border-radius: 2px !important;
        color: #ffffff !important;
        font-weight: normal !important;
        height: 35px;
        margin-left: 5px !important;
        padding: 5px 10px !important;
      }
    `}</style>
  </Button>
);

export default FooterColorButton;
