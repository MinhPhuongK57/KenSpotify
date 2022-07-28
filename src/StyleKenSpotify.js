import styled from "styled-components";

export const StyleKenSpotify = styled.div`
  ::selection {
    background-color: transparent;
    color: transparent;
  }
  height: 100%;
  min-height: 100vh;
  margin: 0 auto;
  width: 100%;
  background-color: #fff;
  line-height: 1.2;
  letter-spacing: 0.5px;

  button,
  a {
    outline: none !important;
  }

  .boxSong {
    padding: 0 20px;
    padding-top: 20px;
    background: linear-gradient(to right, #1b2b3c, #29323c);
    width: 100%;
    display: grid;
    grid-template-columns: 400px auto;
    grid-gap: 20px;
    height: 500px;
    overflow: hidden;
  }

  @media only screen and (max-width: 1024px) {
    .boxSong {
      display: grid;
      grid-template-columns: 1fr;
      padding: 20px 30px;
      height: 1000px;
      width: 100%;
      max-width: 100%;
      margin: 0 auto;
    }
  }
  @media only screen and (max-width: 768px) {
    .boxSong {
      display: grid;
      grid-template-columns: 1fr;
      padding: 20px;
      height: 500px;
      width: 100%;
      max-width: 100%;
      margin: 0 auto;
    }
  }
`;
