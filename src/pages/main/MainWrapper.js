import styled from "styled-components";
const MainWrapper = styled.div`
  min-height: 100vh;
  svg {
    font-size: 24px;
  }
  .plus {
    border-radius: 10px important;
    border: 2px solid #000000;
    margin: 30px auto;
    width: 100px;
    display: flex;
    justify-content: center;
  }
  h1 {
    font-weight: bold;
    font-size: 100px !important;
    line-height: 122px;
    /* identical to box height */

    text-align: center;

    /* border: 2px solid #282a30; */
  }
`;

export default MainWrapper;
