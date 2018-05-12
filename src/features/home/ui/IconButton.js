import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const IconButton = ({ backgroundColor, name, onClick }) => (
  <Button
    className="IconButton"
    icon
    onClick={() => onClick()}
  >
    <Icon
      name={name}
      size="large"
    />
    <style>{`
      .IconButton {
        background-color: ${backgroundColor} !important;
      }
    `}</style>
  </Button>
);

export default IconButton;
