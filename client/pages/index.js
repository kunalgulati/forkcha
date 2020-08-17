import React from 'react';

/** Load Componenets */
import NavigationBar from '../components/NavigationBar';
import Footer from '../components/Footer';

import ProductHero from '../components/home/ProductHero';
import ProductHowItWorks from '../components/home/ProductHowItWorks';


// https://github.com/mui-org/material-ui/tree/master/examples/ssr
export default function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <ProductHero />
      <ProductHowItWorks />
      <Footer />
    </React.Fragment>
  );
}
