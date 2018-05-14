import React from 'react';
import { Divider, Header, Icon } from 'semantic-ui-react';

import './Containers.css';
import { HeaderIconButton, UserButton, VerticalDivider } from '../ui';

const HeaderContainer = () => (
  <div className="Header">
    <HeaderIconButton
      name="home"
      onClick={() => console.log("HOME BUTTON")}
    />
    <VerticalDivider />
    <div className="TitleContainer">
      <Header
        as="h2"
        className="Title"
      >
        Demo App
      </Header>
    </div>
    <HeaderIconButton
      name="cloud upload"
      onClick={() => console.log("CLOUD BUTTON")}
    />
    <VerticalDivider/>
    <HeaderIconButton
      name="question circle outline"
      onClick={() => console.log("QUESTION BUTTON")}
    />
    <VerticalDivider />
    <UserButton
      onClick={() => console.log("USER BUTTON")}
      user="Guest"
    />
  </div>
);

export default HeaderContainer;
