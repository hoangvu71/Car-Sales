import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { connect } from 'react-redux';

import { removeFeature, buyItem } from "./actions/index"

const App = (props) => {

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={props.removeFeature}/>
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} buyItem={props.buyItem}/>
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    ...state,
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice,
  }
}

export default connect(mapStateToProps, {removeFeature, buyItem})(App)
