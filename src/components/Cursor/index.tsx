import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import * as S from "./styles";

export const Cursor = () => {
  const cursorRef = useRef<any>(null);
  const attackRef = useRef<any>(null);
  const [canAttack, setCanAttack] = useState(true);
  const [isAttacking, setIsAttacking] = useState(false);

  const imageDefault =
    "https://cdn-icons-png.flaticon.com/128/9380/9380429.png";
  const imageURL2 = "https://cdn-icons-png.flaticon.com/128/2466/2466937.png";
  const imageURL3 = "https://cdn-icons-png.flaticon.com/128/9276/9276150.png";
  const imageURL4 = "https://cdn-icons-png.flaticon.com/128/842/842031.png";
  const imageURL5 = "https://cdn-icons-png.flaticon.com/128/2131/2131200.png";

  const attack = useCallback(
    (e: any) => {
      setCanAttack(false);
      if (canAttack) {
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
    [canAttack]
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
    cursorIcon: imageURL5,
    ref: cursorRef,
    isAttacking: isAttacking.toString(),
  };

  const attackAreaProps = {
    isAttacking: isAttacking.toString(),
    ref: attackRef,
  };

  return (
    <Fragment>
      <S.CursorContainer {...cursorContainerProps} />
      <S.AttackArea {...attackAreaProps} />
    </Fragment>
  );
};
