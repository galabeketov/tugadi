import styled from "styled-components";

const ProductsWrapper = styled.div`
  .imgProduct {
    position: relative;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
    .btns {
      position: absolute;
      bottom: 5px;
      right: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      opacity: 0;
      transition: 0.1;

      .editBtn {
        background-color: transparent;
        border: 2px solid #f6ff8d;
        box-sizing: border-box;
        border-radius: 10px;
        svg {
          color: #f6ff8d;
        }
      }
      .deleteBtn {
        background-color: transparent;
        border: 2px solid #ff5b5b;
        box-sizing: border-box;
        border-radius: 10px;
        svg {
          color: #ff5b5b;
        }
      }
    }
    &:hover {
      .filter {
        filter: blur(2.8px);
        /* -webkit-backdrop-filter: blur(11.8px); */
        /* opacity: 0.4; */
      }
      .btns {
        opacity: 1;
      }
    }
  }

  p {
    margin: 0;
    padding: 0;
  }
  .nameProduct {
    font-weight: bold;
    font-size: 18px;
    line-height: 27px;
    color: #282a30;
  }
  .price {
    font-weight: 600;
    font-size: 14px;
    line-height: 27px;
    color: rgba(40, 42, 48, 0.3);
  }
`;

export default ProductsWrapper;
