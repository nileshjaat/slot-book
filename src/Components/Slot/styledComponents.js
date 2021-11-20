import styled from 'styled-components';

export const AvailableContainer = styled.div`
  cursor: pointer;
  margin: 0 32px 32px 0;
  height: 200px;
  width: 300px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #7ee8fa;
  background-image: linear-gradient(315deg, #7ee8fa 0%, #80ff72 74%);
  box-shadow: -2px -2px 4px 2px #ffffff, 2px 2px 4px 2px #dddddd;

  &:hover {
    transform: scale(1.1);
  }
`;

export const BookedContainer = styled.div`
  cursor: pointer;
  margin: 0 32px 32px 0;
  height: 200px;
  width: 300px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f7b42c;
  background-image: linear-gradient(315deg, #f7b42c 0%, #fc575e 74%);
  box-shadow: -2px -2px 4px 2px #ffffff, 2px 2px 4px 2px #dddddd;

  &:hover {
    transform: scale(1.1);
  }
`;

export const SlotText = styled.h1`
  color: #333333;
  font-family: 'Public Sans';
  font-size: 30px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 20px;
`;

export const AvailableText = styled.h1`
  color: #0e820c;
  font-family: 'Public Sans';
  font-size: 30px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 20px;
`;

export const BookedText = styled.h1`
  color: #802b2b;
  font-family: 'Public Sans';
  font-size: 30px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 20px;
`;
