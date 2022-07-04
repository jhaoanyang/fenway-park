import React from 'react';
import './App.scoped.scss';
import cx from 'classnames';

import content from './content';

function App() {
  const renderSection = (item) => {
    const {
      h1, h2, h3, img, list, quote,
    } = item;
    if (h1) {
      return (
        <section
          className="front-page"
          key={Object.entries(item)[0]}
        >
          <h1>{h1}</h1>
          <h2>{h2}</h2>
          <h3>{h3}</h3>
        </section>
      );
    }
    if (img) {
      return (
        <section
          key={Object.entries(item)[0]}
        >
          {h2 && <h2>{h2}</h2>}
          {h3 && <h3>{h3}</h3>}
          <div className={cx('img', img)} />
        </section>
      );
    }
    if (list && list.length !== 0) {
      return (
        <section
          key={Object.entries(item)[0]}
          className="right"
        >
          {h2 && <h2>{h2}</h2>}
          {h3 && <h3>{h3}</h3>}
          {list.map((listItem) => <div key={listItem}>{listItem}</div>)}
        </section>
      );
    }
    if (h2 && !img && !list && !quote) {
      return (
        <section
          key={Object.entries(item)[0]}
          className="split"
        >
          <h2>{h2}</h2>
          {h3 && <h3>{h3}</h3>}
        </section>
      );
    }
    if (quote) {
      return (
        <section
          key={Object.entries(item)[0]}
        >
          {h2 && <h2>{h2}</h2>}
          {h3 && <h3>{h3}</h3>}
          <div className="quote">{quote}</div>
        </section>
      );
    }
    if (h3) {
      return (
        <section
          key={Object.entries(item)[0]}
        >
          {h2 && <h2>{h2}</h2>}
          <h3>{h3}</h3>
        </section>
      );
    }
    return (
      <section
        key={Object.entries(item)[0]}
      >
        {JSON.stringify(item)}
      </section>
    );
  };

  return (
    <main>
      {content.map(((item) => renderSection(item)))}
    </main>
  );
}

export default App;
