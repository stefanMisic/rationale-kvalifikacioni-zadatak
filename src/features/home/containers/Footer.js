import React from 'react';
// import { Divider, Header, Icon } from 'semantic-ui-react';

import './Containers.css';
import { FooterIconButton, FooterColorButton, FooterTextButton } from '../ui';

const FooterContainer = () => (
  <div className="Footer">
    <div className="FooterLeft">
      <FooterIconButton
        name="exchange"
        onClick={() => console.log("EXCHANGE BUTTON")}
      />
      <FooterIconButton
        name="cocktail"
        onClick={() => console.log("COCKTAIL BUTTON")}
      />
      <FooterIconButton
        name="content"
        onClick={() => console.log("CONTENT BUTTON")}
      />
    </div>
    <div className="FooterRight">
      <FooterColorButton
        color="Green"
        onClick={() => console.log("APPROVE BUTTON")}
        text="Approve"
      />
      <FooterColorButton
        color="Red"
        onClick={() => console.log("REJECT BUTTON")}
        text="Reject"
      />
      <FooterTextButton
        onClick={() => console.log("CLAIM BUTTON")}
        text="Claim"
      />
      <FooterTextButton
        onClick={() => console.log("FORWARD BUTTON")}
        text="Forward"
      />
      <FooterTextButton
        onClick={() => console.log("SUSPEND BUTTON")}
        text="Suspend"
      />
      <FooterIconButton
        name="external share"
        onClick={() => console.log("SHARE BUTTON")}
      />
    </div>
  </div>
);

export default FooterContainer;
