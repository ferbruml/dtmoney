import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle` // var com letra em maiuscula pq será um componente
    :root {
        --background: #f0f2f5;
        --red: #e52e4d;
        --green: #33cc95;
        --blue: #5429cc;

        --blue-light: #6933ff;

        --text-title: #363f5f;
        --text-body: #969cb3;

        --shape: #ffffff;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%; //15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; //14px
        }
    }

    body {
        background: var(--background);
        -webkit-font-smoothing: antialiased; // hack que permite que as fontes de browsers que utilizem a engine webkit do chrome fiquem mais nítidas
    }

    body, input, textarea, button { // por padrão o input, textarea, button não herdam a fonte do body, por isso colocamos neles tb
        font-family: 'Poppins', sans-serif;
        font-weight: 400; // o size da regular Poppins é 400, mas regular no html é 500, por isso voltamos para 400
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }

    button {
        cursor: pointer; // torna o botão clicável - até hj não sabemos pq não vem isso por default...
    }

    [disable] {
        opacity: 0.6; // deixa o componente mais "apagadinho"
        cursor: not-allowed; // troca o ponteiro por um cursor "bloqueado"
    }

.react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed; // scroll
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
}

.react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
}

.react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;

    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.7);
    }    
}
` // estas aspas são template-literals do JS, que permitem colocar vars e até funcs aqui dentro