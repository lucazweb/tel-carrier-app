import styled from 'styled-components';

export const ModalOverflow = styled.div`
  display: ${(props) => (props.display ? 'block' : 'none')};
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 800;
  background: rgba(0, 0, 0, 0.8);
`;

export const ModalWrapper = styled.div.attrs({
  className: 'modal fade show',
  // boostrap stuff
  tabindex: '-1',
  role: 'dialog',
  ['aria-hidden']: 'true',
})`
  display: block;
`;
