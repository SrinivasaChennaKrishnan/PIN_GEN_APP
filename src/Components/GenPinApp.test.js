import React from 'react';
import ReactDOM from 'react-dom';
import GenPinApp from './GenPinApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GenPinApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
