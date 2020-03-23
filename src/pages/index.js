import React from 'react';
import ProductHero from "../modules/views/ProductHero";
import ProductHowItWorks from "../modules/views/ProductHowItWorks";
import { navigate } from "gatsby"
import AppAppBar from "../modules/views/AppAppBar"
import AppFooter from "../modules/views/AppFooter"

export default () => {
  function goToResults() {
    navigate("/upload");
  }

  return (
    <React.Fragment>
      <AppAppBar/>
      <ProductHero  goToResults={goToResults}/>
      <ProductHowItWorks  goToResults={goToResults} />
      <AppFooter/>
    </React.Fragment>
  );
}

