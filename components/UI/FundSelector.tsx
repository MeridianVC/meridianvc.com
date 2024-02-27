"use client";

import React, { useState } from 'react';
import Header from '../Text/Header';
import './ui.css';

const mainStyle: React.CSSProperties = {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  marginBottom: 'clamp(0px, 3vw, 50px)',
  textDecoration: 'underline',
  textUnderlineOffset: '10px',
  textDecorationColor: '#444444',
  textDecorationThickness: '2px',
}

const FundSelector: React.FC = () => {

  return (
    <div style={mainStyle}>
      <Header type="H6">
        Fund I
      </Header>
    </div>
  );
};

export default FundSelector;
