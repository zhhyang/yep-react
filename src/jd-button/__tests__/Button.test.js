import React from 'react';
import Button from '../index';
import ReactDOM from 'react-dom';
describe('Button', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button>OK</Button>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
