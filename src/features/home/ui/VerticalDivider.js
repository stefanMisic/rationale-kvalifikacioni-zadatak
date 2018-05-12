import React from 'react';

const VerticalDivider = () => (
  <div className="DividerContainer">
    <div className="Divider" />
    <style>{`
      .Divider {
        background-color: rgba(0, 0, 0, 0.1);
        height: 25px;
        width: 1px;
      }
      .DividerContainer {
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;
      }
    `}</style>
  </div>
);

export default VerticalDivider;
