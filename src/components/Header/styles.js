import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 80px;
  padding: 30px;

  display: flex;
  justify-content: space-between;

  color: #FFF;

  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  div {
    display: flex;
    align-items: center;

    button {
      background: transparent;
      border: 0;
      margin: 0 10px;
      cursor: pointer;
    }

    img#avatar {
      width: 30px;
      height: 30px;
      border-radius: 20px;
      margin: 0 10px;
      cursor: pointer;
    }
  }
`;
