import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import App from './App.jsx'
import Main from './Components/Main/Main.jsx';

configure({ adapter: new Adapter() });

describe('App Component', () => {
  let component;
  beforeEach(() => {
    component = shallow(<App />);
  });
  it('Should contain Main component', () => {
    expect(component.contains(<Main />)).toBe(false);
  });
});
