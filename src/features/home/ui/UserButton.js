import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const UserButton = ({ onClick, user }) => (
  <Button
    className="UserButton"
    onClick={() => onClick()}
  >
    <Icon
      name="user plus"
      size="large"
    />
    {user}
    <Icon
      className="Arrow"
      name="angle down"
      size="large"
    />
    <style>{`
      .Arrow {
        padding-bottom: 20px;
        padding-left: 10px;
      }
      .UserButton {
        background-color: #e6e6e6 !important;
        font-size: 0.8em !important;
        min-width: 10em;
      }
    `}</style>
  </Button>
);

export default UserButton;
