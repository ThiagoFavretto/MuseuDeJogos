import React from "react";
import { Conteiner, ConteinerRelease, ConteinerTittle, 
    ConteinerText, ConteinerIMG, ConteinerReleaseText,
    ConteinerText2} from "./styles";


const Jogo1 = () => {
return  (
    <Conteiner>
        <ConteinerRelease>
            <ConteinerIMG/>
            <ConteinerReleaseText>
                <ConteinerTittle>Curiosidades presentes sobre o jogo</ConteinerTittle>
                    <ConteinerText>
                    Lançado no ano de 2023, o jogo consta com os diversos 
                    personagens principais dos jogos ja lançados da franquia 
                    Grand Theft Auto, promovendo grande sucesso e empolgação 
                    para os jogadores dos antigos jogos da empresa, fazendo 
                    com que os jogadores moldem a historia do jogo mudando os 
                    acontecimentos conforme as escolhas do jogador.
                    </ConteinerText>
            </ConteinerReleaseText>
        </ConteinerRelease>
        <ConteinerText2>
            Maior jogo e ultimo jogo da empresa Rokstar Games destinados as 
            plataformas rústicas de computadores de mesa. O jogo reúne os
            grandes jogos da franquia Grand Theft Auto inicialmente lançados 
            do ano de 2000 à 2014 reunindo os principais aspectos dos jogos em um só.
            Os desenvolvedores relatam que o jogo foi lançado com o objetivo de 
            trazer novamente os prazeres de andar pela famosa Los Santos, 
            Liberty City e Vice City, deixando o jogador decidir as características 
            principais do personagem e definir uma história única durante o jogo.
        </ConteinerText2>
    </Conteiner>
);
};

export default Jogo1;