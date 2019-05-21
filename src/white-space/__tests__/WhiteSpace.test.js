import React from 'react';
import ReactDOM from 'react-dom';
import WhiteSpace from '../index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WhiteSpace />, div);
  ReactDOM.unmountComponentAtNode(div);
});
