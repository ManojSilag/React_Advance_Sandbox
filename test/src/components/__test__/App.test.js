import React, { createElement } from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

test('shows a comment box', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    expect(div.innerHTML).toContain('Comment BOx')
    ReactDOM.unmountComponentAtNode(div)

})