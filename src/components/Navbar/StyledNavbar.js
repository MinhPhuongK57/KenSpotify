import styled from "styled-components";

export const StyledNavBar = styled.div`
  height: 70px;
  width: 100%;
  position: relative;
  background: linear-gradient(to right, #566472, #29323c);

  .navbar {
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    &__logo {
      font-size: 25px;
      font-weight: 700;
      color: #5eead4;

      i {
        padding-right: 15px;
      }
    }

    &__link {
      position: absolute;
      top: 50%;
      right: 50px;
      transform: translateY(-50%);

      a {
        color: #fff;
        font-size: 20px;
        padding-left: 15px;
        transition: all 0.2s linear;

        &:hover {
          transition: all 0.2s linear;
          color: #5eead4;
        }
      }
    }

    @media only screen and (max-width: 768px) {
      .navbar {
        &__link {
          right: 10px;
        }
      }
    }
  }
`;
