import logoImg from '../../assets/logo.png'
import { Container, Content } from './styles'

export function Header(){
    return(
        <Container>
            <Content>
                <img src={logoImg} alt="CF Money" />

                <button type="button">
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}