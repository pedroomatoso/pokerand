import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  overflow: hidden;
  width: 65%;
`;

export const Listing = styled.div`
  overflow-y: scroll;

  background: #fefefe;
  max-height: 500px;
  padding: 1em;

  /* hide scrollbar */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

  ::-webkit-scrollbar {
    display: none;
  }
`;