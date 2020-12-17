import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount } from 'enzyme';
import { Landing } from './Landing.jsx';
import { Weather } from '../Widgets/Weather/Weather.jsx';

configure({ adapter: new Adapter() });

describe('Landing Component', () => {
  let component;
  beforeEach(() => {
    component = mount(<Landing />);
  });
  it('should render Weather component', () => {
    expect(component.contains(<Weather />)).toBe(true);
  });
  it('should render as expected', () => {
    expect(component.contains(<h2>Your days are hectic.</h2>)).toBe(true);
  });
  it('should have a state attribute called loginComponent initialized to false', () => {
    expect(component.state('loginComponent')).toEqual(false);
  });
});
