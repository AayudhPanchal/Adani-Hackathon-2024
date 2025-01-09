import { Marketplace } from 'components/MarketPlace/MarketPlace';
import React from 'react';

const MarketplacePage = () => {
  const backgroundImage = require('../assets/images/body-background.png');

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="flex min-h-screen flex-col items-center justify-between p-24"
    >
      <Marketplace />
    </div>
  );
};

export default MarketplacePage;
