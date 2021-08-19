import React from 'react';

import logo from './images/googlelogo_color_272x92dp.png';
import SearchBox from './components/SearchBox';
import GButton from './components/GButton';

function App() {
  return React.createElement(
    'div',
    { className: 'radioBox' },
    React.createElement('img', { src: logo, className: 'App-logo', alt: 'logo' }),
    React.createElement(SearchBox, null),
    React.createElement(
      'div',
      { className: 'buttonBox' },
      React.createElement(GButton, { text: 'Search by text' }),
      React.createElement(GButton, { text: 'Search by audio' })
    )
  );
}

export default App;

