import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import * as S from "./styles";

export const GameWindow = () => {
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);

  useEffect(() => {
    setImageUrl("https://cdn-icons-png.flaticon.com/128/2457/2457005.png");
    // setImageUrl("../../images/sword.png");
  }, []);

  const imageURL2 = "https://cdn-icons-png.flaticon.com/128/2466/2466937.png";
  const imageURL3 = "https://cdn-icons-png.flaticon.com/128/9276/9276150.png";
  const imageURL4 = "https://cdn-icons-png.flaticon.com/128/842/842031.png";
  const imageURL5 = "https://cdn-icons-png.flaticon.com/128/2131/2131200.png";

  return (
    <S.GameWindowContainer>
      <Flex>Player</Flex>{" "}
      {/* <S.TrainerContainer imageString={imageUrl}>Sword 1</S.TrainerContainer>
      <S.TrainerContainer imageString={imageURL2}>Sword 2</S.TrainerContainer>
      <S.TrainerContainer imageString={imageURL3}>Sword 3</S.TrainerContainer>
      <S.TrainerContainer imageString={imageURL4}>Sword 4</S.TrainerContainer>
      <S.TrainerContainer imageString={imageURL5}>Sword 5</S.TrainerContainer> */}
      {/* <Image
            src={imageUrl}
            alt="sword"
            w={50}
            onError={() =>
            setImageUrl(
                "https://img.freepik.com/vetores-gratis/ups-erro-404-com-ilustracao-de-conceito-de-robo-quebrado_114360-5529.jpg?w=2000"
            )
            }
        /> */}
    </S.GameWindowContainer>
  );
};
