import styled from "styled-components";

export const Container = styled.div`
  background: #202020;
  padding: 30px 0;

  img {
    width: 12%;
    margin-left: 50px;
  }
  header {
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      color: #f5f5f5;
      text-decoration: none;
      font-size: 5vw;
      transition: opacity 0.2s;
    }
    nav {
      margin-right: 50px;
      a {
        color: #f5f5f5;
        text-decoration: none;
        transition: opacity 0.2s;
        img {
          width: 50%;
        }
        &:hover {
          opacity: 0.6;
        }
      }
    }
  }
`;
