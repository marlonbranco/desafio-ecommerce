import styled from "styled-components";

export const Container = styled.div`
  background: #202020;
  padding: 10px 0;

  header {
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    a {
      display: inline-block;
      width: 60px;
      padding: 5px;
      margin-left: 50px;
      img {
        width: 150%;
      }
    }
    h1 {
      color: #f5f5f5;
      text-decoration: none;
      font-size: 4vw;
      transition: 0.8s;
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
