import styled from 'styled-components';

export const Container = styled.div`
  width: 250px;
  height: 190px;
  display: flex;
  flex-direction: column;
  align-items: center;

  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  border-right: 1px solid rgba(255, 255, 255, 0.08);
  
  div {
    width: 100%;
    text-align: center;
    display: flex;
    justify-content: center;
  }

  div.icon-arrow {
    width: 100%;
    justify-content: space-between;
    padding: 35px 35px 0 35px;
  }
  
  div.counter {
    font-size: 18px;
    color: #FFF;
  }

  div.description {
    font-size: 14px;
    color: gray;
    padding: 12px 0;
  }
`;
