import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const HeaderIconButton = ({ name, onClick }) => (
  <Button
    className="HeaderIconButton"
    icon
    onClick={() => onClick()}
  >
    <Icon
      name={name}
      size="large"
    />
    <style>{`
      .HeaderIconButton {
        background-color: #e6e6e6 !important;
      }
    `}</style>
  </Button>
);

export default HeaderIconButton;
