import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
  /* Eric Meyer's reset css */
  ${reset}

  /* Set default box-sizing to border-box */
  html {
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

  /* Set font-size to 62.5%
   * (https://www.aleksandrhovhannisyan.com/blog/62-5-percent-font-size-trick/)
   */
  html {
    font-size: 62.5%
  }

  body {
    font-size: 1.6rem;
  }

  /* Other styles */
  body {
    background: linear-gradient(to bottom right, #98E08C, #4FCE9B, #4ACD9B);
    font-family: 'Rubik', sans-serif;
    height: 100vh;
  }
`;