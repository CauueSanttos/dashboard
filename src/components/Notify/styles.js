import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background: #FFF;
  border-radius: 3px;
  margin-top: 10px;
  display: flex;
  padding: 10px;

  div {
    display: flex;
    justify-content: center;
    margin: 0 10px;

    img.imgNotify {
      width: 40px;
      height: 40px;
      border-radius: 20px;
    }
  }

  div.notify {
    width: 100%;
    display: flex;
    flex-direction: column;
    color: #6d6d6d;
    margin: 0 6px;
    align-items: flex-start;

    h5 {
      color: #a7a7a7;
    }
  }
`;
