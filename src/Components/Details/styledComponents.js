import styled from 'styled-components';

export const Container = styled.div`
  background-color: #bffaff;
  border-radius: 10px;
  border: 1px solid #333333;
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 20px;
  box-shadow: -2px -2px 4px 2px #ffffff, 2px 2px 4px 2px #dddddd;
`;

export const HeaderText = styled.h1`
  color: #0505ff;
  font-family: 'Public Sans';
  font-size: 40px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 20px;
  margin-right: 10px;
  text-align: center;
`;

export const FlexContainer = styled.div`
  display: flex;
`;

export const Text = styled.h1`
  color: #333333;
  font-family: 'Public Sans';
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 20px;
  margin-right: 10px;
`;

export const TextInput = styled.input`
  background-color: #bffaff;
  color: #802b2b;
  font-family: 'Public Sans';
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 20px;
  border: none;

  &:focus {
    outline: none;
    background-color: #f2f2f2;
    caret-color: #971b13;
  }

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #bbbbbb;
  }
  :-ms-input-placeholder {
    color: #bbbbbb;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CancelButton = styled.button`
  cursor: pointer;
  background-color: #ffffff;
  border: 1px solid #000000;
  border-radius: 8px;
  padding: 8px 15px;
  margin-right: 64px;
`;

export const CancelButtonText = styled.h1`
  color: #333333;
  font-family: 'Public Sans';
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 20px;
  margin: 0;
`;

export const SaveButton = styled.button`
  cursor: pointer;
  background-color: #1a73e8;
  border: 1px solid #0505ff;
  border-radius: 8px;
  padding: 8px 15px;
`;

export const SaveButtonText = styled.h1`
  color: #ffffff;
  font-family: 'Public Sans';
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 20px;
  margin: 0;
`;
