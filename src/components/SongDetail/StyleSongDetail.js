import styled from "styled-components";

export const StyleSongDetail = styled.div`
  .songDetail {
    padding-right: 10px;

    span {
      font-size: 18px;
      color: #f1f1fe;
      font-weight: 600;
    }

    &__name {
      font-size: 20px;
      color: #5eead4;
      font-weight: 700;
      padding-top: 5px;
    }

    &__content {
      margin-top: 10px;
      width: 100%;
      padding: 0 50px;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;

      &--img {
        width: 320px;
        height: 320px;
        margin: 0 auto;

        img {
          border-radius: 5px;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      &--detail {
        margin-top: 20px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-direction: row;
      }

      &--detailImg {
        width: 50px;
        height: 50px;
        border-radius: 50%;

        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #fff;
          padding: 2px;
          box-shadow: 0 0 100px 10px rgba(255, 255, 255, 0.6);
        }
      }

      &--detailAuthor {
        font-size: 18px;
        font-weight: 600;
        color: transparent;
        text-shadow: 4px 3px 0px #fff, 9px 8px 0px rgba(255, 255, 255, 0.15);
      }
    }

    @keyframes rotating {
      from {
        -webkit-transform: rotate(0deg);
      }
      to {
        -webkit-transform: rotate(360deg);
      }
    }

    .rotating {
      -webkit-animation: rotating 7s linear infinite;
    }

    @media only screen and (max-width: 1024px) {
      margin: 0 auto;
      .songDetail {
        &__name {
          white-space: nowrap;
        }
        &__content {
          padding: 0;
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-direction: row-reverse;

          &--img {
            width: 400px;
            height: 250px;

            img {
              border-radius: 10%;
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }

          &--detail {
            display: flex;
            justify-content: flex-start;
          }

          &--detailImg {
            width: 100px;
            height: 100px;
            margin-right: 20px;

            img {
              width: 100%;
              height: 100%;
            }
          }

          &--detailAuthor {
            font-size: 22px;
          }
        }
      }
    }
    @media only screen and (max-width: 768px) {
      .songDetail {
        width: 100%;

        &__content {
          width: 100%;
          margin-top: 20px;
          display: flex;
          align-items: center;
          flex-direction: row;

          &--img {
            display: none;
          }

          &--detail {
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
          }

          &--detailImg {
            max-width: 120px;
            max-height: 120px;

            img {
              width: 100%;
              height: 100%;
            }
          }

          &--detailAuthor {
            margin-top: 10px;
            font-size: 22px;
          }
        }
      }
    }
  }
`;
