import React, { Component } from 'react';
import './Slots.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Slot from '../../Components/Slot/Slot';
import { setSlotDetailsInfo } from '../SlotDetails/Dispatch';

export class Slots extends Component {
  constructor(props) {
    super(props);
  }

  handleSlotClick = (slot) => {
    this.props.setSlotDetailsInfo(slot);
  };

  render() {
    return (
      <>
        <h1 className="heading">Click on a slot to book/edit booking</h1>
        <div className="wrapper">
          <>
            {this.props.slots.slotsData?.map((slot) => (
              <Link
                to="/slot-details"
                key={slot.id}
                onClick={() => this.handleSlotClick(slot)}
              >
                <Slot slot={slot} />
              </Link>
            ))}
          </>
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

export default connect(mapStateToProps, { setSlotDetailsInfo })(Slots);
