import styled from 'styled-components';


export const Input = styled.input`
  width: 300px;
  height: 60px;
  background-color: ${({ checked }) => (checked ? '#1d1742' : '#282250')};
  border: ${({ checked }) => (checked ? '3px solid #ffffff' : '3px solid #7066a5')};
  border-radius: 50px;
  padding: 5px 30px;
  color: ${({ checked }) => (checked ? '#ffffff' : '#7066a5')};
  font-size: 18px;
  font-weight: 400;
  text-transform: uppercase;
  outline: none;
`;
