import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const SearchInput = ({ refresh, search }) => (
  <div className="SearchInputContainer">
    <input
      onKeyDown={(event) => console.log(event.target.value)}
      onKeyPress={(event) => console.log(event.target.value)}
      placeholder="Search"
      style={{
        borderRadius: 0,
        borderWidth: 0,
        border: "none",
        color: "#666666",
        height: 36 + "px",
        padding: "0 15px",
        width: 100 + "%"
      }}
    />
    <Button
      className="SearchIconButton"
      icon
      onClick={() => search()}
    >
      <Icon
        name="search"
        size="large"
      />
    </Button>
    <Button
      className="SearchIconButton"
      icon
      onClick={() => refresh()}
    >
      <Icon
        name="refresh"
        size="large"
      />
    </Button>
    <style>{`
      .SearchIconButton {
        align-items: center;
        background-color: #ffffff !important;
        border-radius: 0 !important;
        flex-direction: column;
        height: 36px;
        justify-content: center;
        margin: 0 !important;
        width: 36px;
      }
      .SearchInputContainer {
        align-items: center;
        background: #e6e6e6;
        display: flex;
        flex-direction: row;
        height: 40px;
        justify-content: center;
        margin: 2px 0;
        padding: 0 4px;
        width: 100%;
      }
    `}</style>
  </div>
);

export default SearchInput;
