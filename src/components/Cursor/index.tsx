import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import * as S from "./styles";

export const Cursor = () => {
  const cursor = `images/swords/1.webp`;

  const cursorRef = useRef<any>(null);
  const attackRef = useRef<any>(null);
  const [canAttack, setCanAttack] = useState(true);
  const [isAttacking, setIsAttacking] = useState(false);

  const attack = useCallback(
    (e: any) => {
      setCanAttack(false);
      if (canAttack && cursor !== "images/swords/0.webp") {
        const posX = e.pageX - 50;
        const posY = e.pageY + 35;
        cursorRef?.current?.setAttribute(
          "style",
          "top: " + posY + "px; left: " + posX + "px;"
        );
        setIsAttacking(true);
      }

      setTimeout(() => {
        const posY = e.pageY - 6;
        const posX = e.pageX - 50;

        if (cursorRef?.current == null) return;

        cursorRef?.current?.setAttribute(
          "style",
          "top: " + posY + "px; left: " + posX + "px;"
        );
        setIsAttacking(false);
      }, 200);

      setTimeout(() => {
        setCanAttack(true);
      }, 2000);
    },
    [canAttack, cursor]
  );

  useEffect(() => {
    if (!canAttack) {
      document.removeEventListener("click", attack);
      return;
    }
    document.addEventListener("click", (e) => attack(e), { once: true });
  }, [attack, canAttack]);

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const posY = e.pageY - 6;
      const posX = e.pageX - 50;

      const posXattack = posX + 50;

      if (cursorRef?.current == null) return;

      cursorRef?.current?.setAttribute(
        "style",
        "top: " + posY + "px; left: " + posX + "px;"
      );
      if (isAttacking) {
        attackRef?.current?.setAttribute(
          "style",
          "top: " + posY + "px; left: " + posXattack + "px;"
        );
      }
    }),
      { once: true };
  }, [isAttacking]);

  const cursorContainerProps = {
    cursorIcon: cursor,
    ref: cursorRef,
    isAttacking:
      cursor !== "images/swords/0.webp" ? isAttacking.toString() : "false",
  };

  const attackAreaProps = {
    isAttacking:
      cursor !== "images/swords/0.webp" ? isAttacking.toString() : "false",
    ref: attackRef,
  };

  return (
    <Fragment>
      <S.CursorContainer {...cursorContainerProps} />
      <S.AttackArea {...attackAreaProps} />
    </Fragment>
  );
};
