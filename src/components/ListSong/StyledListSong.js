import styled from "styled-components";

export const StyledListSong = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 40px;
  border-radius: 5px;
  overflow-y: scroll;

  .text-center {
    text-align: center;
  }
  .listSongBlock {
    display: none;
  }
  .noWrap {
    white-space: nowrap;
  }

  .listSong {
    table-layout: auto;
    position: relative;
    width: 100%;
    padding-top: 40px;
    height: 100%;

    &__heading {
      font-size: 16px;
      white-space: nowrap;
      position: sticky;
      top: 0;
      color: #fff;
      background: linear-gradient(to right, #29323c, #566472);
      height: 40px;
      width: 100%;
      font-weight: 500;
      line-height: 2.2;

      &--textLeft {
        display: flex;
        text-align: left;
      }

      &--percent10 {
        width: 10%;
      }
    }

    &__body {
      padding-top: 40px;
      height: 100%;
      overflow-y: scroll;

      &--author {
        display: flex;
      }

      &--BG {
        background: linear-gradient(to right, #1b2b3c, #29323c);
        cursor: pointer;
        color: grey;
        height: 40px;
        line-height: 40px;
        transition: all 0.1s linear;

        &:hover {
          color: #5eead4;
          transition: all 0.1s linear;
          background: linear-gradient(to right, #566472, #29323c);
        }
      }
      &--BGChecked {
        background: linear-gradient(to right, #566472, #29323c);
        color: #5eead4;
        box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
      }
      tr td a i {
        font-size: 16px;
      }
    }

    @media only screen and (max-width: 1024px) {
      .listSong {
        &__body {
          &--author {
            display: inline-flex;
          }
        }

        &__heading {
          tr th {
            white-space: nowrap;
          }

          &--percent15 {
            width: 15%;
          }
        }
      }

      .listSongHidden {
        display: none;
      }

      .listSongBlock {
        display: block;
      }
    }
    @media only screen and (max-width: 768px) {
      .listSong {
        &__body {
          &--author {
            display: inline-flex;
            flex-direction: column;
            font-size: 18px;
          }
        }
      }

      .listSongHidden {
        display: none;
      }

      .listSongBlock {
        display: block;
      }
    }
  }
`;
