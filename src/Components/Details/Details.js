import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  HeaderText,
  FlexContainer,
  Text,
  TextInput,
  ButtonsContainer,
  CancelButton,
  CancelButtonText,
  SaveButton,
  SaveButtonText,
} from './styledComponents';

function Details({ slot, slots, handleSlots }) {
  const { id, start, end, status, details } = slot;

  const { firstName, lastName, phoneNumber } = details;

  const [state, setState] = useState({
    fName: firstName,
    lName: lastName,
    pNumber: phoneNumber,
  });

  const { fName, lName, pNumber } = state;

  const handleFirstNameChange = (e) => {
    setState({
      ...state,
      fName: e.target.value,
    });
  };

  const handleLastNameChange = (e) => {
    setState({
      ...state,
      lName: e.target.value,
    });
  };

  const handlePhoneNumberChange = (e) => {
    setState({
      ...state,
      pNumber: e.target.value,
    });
  };

  const onSaveButtonClick = () => {
    let newSlots = [...slots];

    const slotIndex = newSlots.findIndex((element) => element.id === id);

    if (slotIndex > -1) {
      newSlots[slotIndex] = {
        ...newSlots[slotIndex],
        status: 'Booked',
        details: {
          firstName: fName,
          lastName: lName,
          phoneNumber: pNumber,
        },
      };
    }

    fName !== '' && lName !== '' && pNumber !== ''
      ? handleSlots(newSlots)
      : window.alert('Please enter all the details to continue!');
  };

  return (
    <Container>
      <HeaderText>{`SLOT: ${start} to ${end}`}</HeaderText>

      <FlexContainer>
        <Text>First Name:</Text>
        <TextInput
          placeholder="Enter first name"
          value={fName}
          onChange={(e) => handleFirstNameChange(e)}
        />
      </FlexContainer>

      <FlexContainer>
        <Text>Last Name:</Text>
        <TextInput
          placeholder="Enter last name"
          value={lName}
          onChange={(e) => handleLastNameChange(e)}
        />
      </FlexContainer>

      <FlexContainer>
        <Text>Phone Number:</Text>
        <TextInput
          placeholder="Enter phone number"
          value={pNumber}
          onChange={(e) => handlePhoneNumberChange(e)}
        />
      </FlexContainer>

      <ButtonsContainer>
        <Link to="/">
          <CancelButton>
            <CancelButtonText>Cancel</CancelButtonText>
          </CancelButton>
        </Link>

        <Link to={fName !== '' && lName !== '' && pNumber !== '' ? '/' : ''}>
          <SaveButton onClick={onSaveButtonClick}>
            <SaveButtonText>Save</SaveButtonText>
          </SaveButton>
        </Link>
      </ButtonsContainer>
    </Container>
  );
}

export default Details;
