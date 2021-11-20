import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Slots from './View/Slots/Slots';
import SlotDetails from './View/SlotDetails/SlotDetails';

export class View extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" exact element={<Slots />} />
          <Route path="/slot-details" exact element={<SlotDetails />} />
        </Routes>
      </div>
    );
  }
}

export default View;
