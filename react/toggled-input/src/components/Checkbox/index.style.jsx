import styled from 'styled-components';

export const Checkbox = styled.input`
width: 100px;
height: 40px;
position: relative;
z-index: -1;
opacity: 0;
`;

export const CheckboxLabel = styled.label`
position: relative;
cursor: pointer;
`;

export const CheckboxBackground = styled.div`
content: '';
position: absolute;
top: -4px;
left: 0;
width: 100px;
height: 50px;
border-radius: 30px;
background: ${({ checked }) => (checked ? '#8BC34A' : '#ee3a33')};
box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.5);
transition: 0.2s;
`;

export const CheckboxToggle = styled.div`
content: '';
position: absolute;
top: -2px;
left: ${({ checked }) => (checked ? '51px' : '2px')};
width: 47px;
height: 47px;
border-radius: 50px;
background: #FFF;
box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
transition: 0.2s;
`;