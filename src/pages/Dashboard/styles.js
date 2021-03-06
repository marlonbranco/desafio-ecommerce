import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0px auto;
  padding: 40px 20px;
`;

// export const Select = styled.div`
//   position: relative;
//   max-width: 1120px;
//   right: 0;
// `;

export const ProductsContainer = styled.li`
  display: inline-table;
  background-color: #fff;
  border-radius: 5px;
  border: 2px #f5f5f5;
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 30px;
  height: 350px;
  max-width: 250px;

  img {
    border-radius: 5px;
    width: 90%;
    padding: 30px;
    margin-left: 10px;
  }

  h4 {
    font-size: 14px;
    margin: 13px;
    color: #202020;
  }
  p {
    font-size: 15px;
    color: #202020;

    margin-left: 20px;
  }
  span {
    p {
      margin-top: 14px;
      margin-bottom: 14px;
      strong {
        font-size: 28px;
        color: #202020;
      }
    }
    button {
      position: relative;
      right: 0;
      height: 40px;
      width: 40px;
      img {
        color: #202020;
        width: 100%;
        padding: 5px;
      }
    }
  }
`;
