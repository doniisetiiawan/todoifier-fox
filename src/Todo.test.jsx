import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Todo from './Todo';

describe(Todo, () => {
  const description = 'New Todo';
  const mockRemoveTodo = jest.fn();
  const component = shallow(
    <Todo description={description} removeTodo={mockRemoveTodo} />,
  );
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Todo />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders and matches our snapshot', () => {
    // eslint-disable-next-line no-shadow
    const component = renderer.create(<Todo description="Yo" />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
