import styled from "@emotion/styled";

interface CursorContainer {
  cursorIcon: string;
  isAttacking: string;
  ref: any;
}

export const CursorContainer = styled.div`
  width: 60px;
  height: 60px;
  /* border: 1px solid white; */
  /* border-radius: 50%; */
  position: absolute;
  pointer-events: none;
  z-index: 2;

  /* background-image: url("https://ani.cursors-4u.net/cursors/cur-13/cur1165.png"); */
  background-image: url(${(props: CursorContainer) => props.cursorIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  /* border: chartreuse solid 1px; */
  animation: ${(props) =>
    props.isAttacking === "true" ? "cursorAnimator .2s forwards" : "none"};

  @keyframes cursorAnimator {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(90deg);
    }
  }
`;

export const AttackArea = styled.div`
  width: 22px;
  height: 100px;
  position: absolute;
  pointer-events: none;
  border-start-end-radius: 15px;
  border-end-end-radius: 15px;
  z-index: 1;
  background-color: #b80606;
  display: ${({ isAttacking }: { isAttacking: string }) =>
    isAttacking === "true" ? "block" : "none"};
  animation: ${({ isAttacking }) =>
    isAttacking === "true" ? "attackAnimator .1s forwards" : "none"};

  @keyframes attackAnimator {
    0% {
      opacity: 0.1;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.1;
    }
  }
`;
