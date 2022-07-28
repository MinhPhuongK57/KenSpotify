import styled from "styled-components";

export const StyledPlayingSong = styled.div`
  .rhap_container {
    height: 105px !important;
    background: linear-gradient(to right, #a56477, #49a09d) !important;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px !important;
    color: #fff !important;
  }

  .rhap_progress-section,
  .rhap_controls-section,
  .rhap_controls-section,
  .rhap_current-time,
  .rhap_total-time,
  .rhap_button-clear {
    color: #fff !important;
    font-weight: 600;
  }
  .rhap_volume-indicator {
    background-color: #fff !important;
  }
  .rhap_progress-indicator,
  .rhap_progress-filled {
    background-color: #5eead4;
  }

  @media only screen and (max-width: 1024px) {
    .rhap_container {
      position: fixed;
      bottom: 0;
      height: 90px !important;
    }
  }
  @media only screen and (max-width: 768px) {
    .rhap_container {
      position: fixed;
      bottom: 0;
      height: 110px !important;
    }
  }
`;
