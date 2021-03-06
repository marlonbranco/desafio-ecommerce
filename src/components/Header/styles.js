import styled from "styled-components";

export const Container = styled.div`
  background: #202020;
  padding: 10px 0;
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  header {
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
      margin-left: 30px;
      img {
        width: 100%;
      }
    }
    h1 {
      color: #f5f5f5;
      text-decoration: none;
      font-size: 3.5vw;
      transition: 0.8s;
      margin-left: 20px;
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
    @media (max-width: 600px) {
      .logo {
        width: 100%;
      }
      .pageTitle {
        font-size: 4.5vw;
      }
      .cartNav {
        margin-right: 0px;
      }
      .cartIcon {
        width: 25px;
      }
    }
  }
`;
