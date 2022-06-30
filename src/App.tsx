import React from 'react';

import { PokemonDataProvider } from './components/hooks/usePokemonData';
import { Panel } from './components/Panel';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <PokemonDataProvider>
      <GlobalStyle />
      <Panel />
    </PokemonDataProvider>
  );
}

export default App;
