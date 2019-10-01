import React from "react";
import { Conteiner, ConteinerRelease, ConteinerTittle, 
    ConteinerText, ConteinerIMG, ConteinerReleaseText,
    ConteinerText2} from "./styles";


const Jogo3 = () => {
return  (
    <Conteiner>
        <ConteinerRelease>
            <ConteinerIMG/>
            <ConteinerReleaseText>
                <ConteinerTittle>Curiosidades presentes sobre o jogo</ConteinerTittle>
                <ConteinerText>
                Lançado em 2024 introduzindo o exoesqueleto como plataforma para 
                jogos FPS, muito criticado pelos jogadores porém as criticas foram 
                superadas quando o jogo atingiu o top 1 de mais jogado no ano. A novidade 
                de lançamento do exoesqueleto junto com capacete de virtualização 
                transformou os computadores em plataformas esquecidas e abriu um leque 
                novo para jogos.
                </ConteinerText>
            </ConteinerReleaseText>
        </ConteinerRelease>
        <ConteinerText2>
        Primeiro jogo online com exoesqueleto produzido pela Xgames. MaP é um FPS 
        (First Person Shooter) com Mechas, baseado nas lutas robóticas onde os 
        personagens lutam em diversas fases diferentes, além do controle utilizado 
        com o exoesqueleto o capacete de virtualização foi lançado na mesma data 
        contribuindo ainda mais para o desenvolvimento de cenário de guerras e 
        realismo em suas ações. O jogo contribuiu ainda mais para o avanço da 
        tecnologia pela forma que consegue prender a atenção dos jogadores, 
        fazendo com que esqueçam do tempo em que foi passado durante o jogo. 
        Uma de suas maiores criticas foi pelos nutricionistas e filosos modernos, 
        principalmente apontando que os jogos iriam atrapalhar o desenvolvimento 
        das pessoas em geral.
        </ConteinerText2>
    </Conteiner>
);
};

export default Jogo3;