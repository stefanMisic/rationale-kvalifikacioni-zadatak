import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const FooterIconButton = ({ name, onClick }) => (
  <Button
    className="FooterIconButton"
    icon
    onClick={() => onClick()}
  >
    <Icon
      inverted
      name={name}
      size="large"
    />
    <style>{`
      .FooterIconButton {
        background-color: #3b4549 !important;
      }
    `}</style>
  </Button>
);

export default FooterIconButton;
