import React from "react";
import { Conteiner, ConteinerRelease, ConteinerTittle, 
    ConteinerText, ConteinerIMG, ConteinerReleaseText,
    ConteinerText2} from "./styles";


const Jogo2 = () => {
return  (
    <Conteiner>
        <ConteinerRelease>
            <ConteinerIMG/>
            <ConteinerReleaseText>
                <ConteinerTittle>Curiosidades presentes sobre o jogo</ConteinerTittle>
                <ConteinerText>
                Lançado pela empresa DatingUS em 2022, com a forte popularização de inteligência
                artificial e machinne learning, o jogo Muiiy foi lançado com a premissa de ser uma 
                acompanhante virtual e aprender as maneiras de se portar em ambientes derivados,
                o jogo se popularizou rapidamente como "acompanhante perfeita".
                </ConteinerText>
            </ConteinerReleaseText>
        </ConteinerRelease>
        <ConteinerText2>
        Primeiro aplicativo de IA que apesar de ser um jogo também funciona
        como um acompanhante virtual, ligado ao smartphone o aplicativo consegue
        interagir com o ambiente utilizando os óculos Xs, lançados pela empresa 
        Xgames, o aplicativo contém as mais derivadas feições e total interação 
        do usuário na criação das mais diversas formas físicas, falas e modo de 
        comportamento.
        Atualmente é possivel se casar com o acompanhante virtual criado e construir 
        uma vida com os plugins disponíveis no mercado. A empresa Xgames afirma que 
        não era esperado tal repercursão e agradece aos fãs que aclamam por atualizções.
        </ConteinerText2>
    </Conteiner>
);
};

export default Jogo2;