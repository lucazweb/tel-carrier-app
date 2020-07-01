import styled, { keyframes } from 'styled-components';

const Spin = keyframes`
    from {transform:rotate(0deg);}
    to {transform:rotate(360deg);}
`;

export const StyledLoading = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 6em;
  color: #6699cc;
  margin-top: 32px;
  svg {
    animation: ${Spin} 2s ease-in-out 0s infinite;
  }
`;
