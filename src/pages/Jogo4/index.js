import React from "react";
import { Conteiner, ConteinerRelease, ConteinerTittle, 
    ConteinerText, ConteinerIMG, ConteinerReleaseText,
    ConteinerText2} from "./styles";


const Jogo4 = () => {
return  (
    <Conteiner>
        <ConteinerRelease>
            <ConteinerIMG/>
            <ConteinerReleaseText>
                <ConteinerTittle>Curiosidades presentes sobre o jogo</ConteinerTittle>
                <ConteinerText>
                Lançado em 2032 inicialmente Imersion mesmo antes de seu lançamento era tratado como inovação
                na ciência e avanço tecnológico, sendo o seu principal marco de primeiro jogo de imersão total 
                do corpo humano, ganhando varios premios dentre eles o prêmio de "Melhor jogo ja feito" assim 
                apontado pelos criticos, algo que nenhum jogo tinha alcançado antes.
                </ConteinerText>
            </ConteinerReleaseText>
        </ConteinerRelease>
        <ConteinerText2>
            Imersion bateu recordes de vendas, conseguindo vender todas as copias em um dia, 
            o jogo se passa em Nova York, sendo uma cópia fiel da cidade graças aos scanners 
            espalhados pela empresa Xgames em todo o estado, o que primeiramente gerou confusões 
            com o governo em relação a empresa. Imersion leva o jogador a um mundo de fantasia MMORPG,
            utilizando o capacete inspirado em uma Visual Novel japonesa Sword Art Online e no seu jogo
            anterior MaP. Imersion desencadeou mais criações de jogos de imersão corporal, mais mundos e tecnologias.
        </ConteinerText2>
    </Conteiner>
);
};

export default Jogo4;