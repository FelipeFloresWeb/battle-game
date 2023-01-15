import { useCallback, useEffect, useState } from "react";
import * as S from "./styles";

export const Monster = () => {
  const [isAttacking, setIsAttacking] = useState(false);
  const [monsterAttacking, setMonsterAttacking] = useState(false);

  const monsterAttack = useCallback(() => {
    setMonsterAttacking(true);

    setTimeout(() => {
      setMonsterAttacking(false);
    }, 1000);
  }, []);

  useEffect(() => {
    setInterval(() => {
      monsterAttack();
    }, 5000);
  }, [monsterAttack]);

  return (
    <S.MonsterContainer monsterattacking={monsterAttacking.toString()}>
      <S.MonsterImage
        isattacking={isAttacking.toString()}
        onClick={() => setIsAttacking(!isAttacking)}
        draggable={false}
        src="images/monsters/stage1/9.png"
        alt="Monster"
      />
    </S.MonsterContainer>
  );
};
