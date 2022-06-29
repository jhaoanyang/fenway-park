import React from 'react';
import './App.scoped.scss';

import content from './content';

function App() {
  return (
    <main>
      {content.map(((item) => (
        <section
          key={Object.entries(item)[0]}
        >
          {JSON.stringify(item)}
        </section>
      )))}
    </main>
  );
}

export default App;
