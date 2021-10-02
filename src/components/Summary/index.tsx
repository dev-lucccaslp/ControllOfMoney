import { Container, Icon0, Icon1, Icon2 } from "./styles";

import { FaChevronCircleDown, FaChevronCircleUp  } from 'react-icons/fa'
import { ImCoinDollar } from 'react-icons/im'

export function Summary() {
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <Icon0>
                        <FaChevronCircleUp />
                    </Icon0>
                </header>
                <strong>R$ 1000,00</strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <Icon1>
                        <FaChevronCircleDown />
                    </Icon1>
                </header>
                <strong>- R$500,00</strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <Icon2>
                        <ImCoinDollar />
                    </Icon2>
                </header>
                <strong>R$500,00</strong>
            </div>
        </Container>
    );
}