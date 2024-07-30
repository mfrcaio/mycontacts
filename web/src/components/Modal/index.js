import { Overlay, Container, Footer } from './styles';

import Button from '../Button';

export default function Modal() {
  return (
    <Overlay>
      <Container>
        <h1>titulo</h1>
        <p>paragrafo</p>
        <Footer>
          <button
            type='button'
            className='cancel-button'
          >
            Cancelar
          </button>
          <Button>
            Deletar
          </Button>
        </Footer>
      </Container>
    </Overlay>
  )
}
