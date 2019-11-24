import styled from 'styled-components';

export const Container = styled.div`
  width: 70px;
  height: 100%;
  background: #101823;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 80px;

    li {
      button {
        width: 40px;
        height: 40px;
        border-radius: 20px;
        margin-top: 5px;
        border: 0;
        background: #48494a;
        cursor: pointer;
      }

      button:hover {
        background: #606163
      }

      button[type="danger"] {
        background-color: #ef193c;
      }
      
      button[type="mail"] {
        background-color: #22b66e;
      }
      
      button[type="message"] {
        background-color: #2196f3;
      }
    }
  }
`;
