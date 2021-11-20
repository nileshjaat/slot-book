import React, { Component } from 'react';
import './SlotDetails.css';
import { connect } from 'react-redux';
import Details from '../../Components/Details/Details';
import { setSlotsInfo } from '../Slots/Dispatch';

export class SlotDetails extends Component {
  constructor(props) {
    super(props);
  }

  handleSlots = (slots) => {
    this.props.setSlotsInfo(slots);
  };

  render() {
    return (
      <>
        <h1 className="heading">Please enter/edit details to book the slot</h1>
        <div className="details">
          <Details
            slot={this.props.slotDetails.slotDetailsData}
            slots={this.props.slots.slotsData}
            handleSlots={this.handleSlots}
          />
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    slots: state.slots,
    slotDetails: state.slotDetails,
  };
};

export default connect(mapStateToProps, { setSlotsInfo })(SlotDetails);
