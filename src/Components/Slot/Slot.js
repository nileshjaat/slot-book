import React from 'react';
import {
  AvailableContainer,
  BookedContainer,
  SlotText,
  AvailableText,
  BookedText,
} from './styledComponents';

function Slot({ slot }) {
  const { id, start, end, status } = slot;

  return (
    <>
      {status === 'Available' ? (
        <AvailableContainer>
          <SlotText>{`${start} to ${end}`}</SlotText>
          <AvailableText>{status}</AvailableText>
        </AvailableContainer>
      ) : (
        <BookedContainer>
          <SlotText>{`${start} to ${end}`}</SlotText>
          <BookedText>{status}</BookedText>
        </BookedContainer>
      )}
    </>
  );
}

export default Slot;
