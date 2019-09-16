import React from 'react';
import { shallow } from 'enzyme';
import { Container } from '../Container/Container';

describe('Container', () => {
  it('should match the snapshot', () => {
    let wrapper = shallow(<Container />)
    expect(wrapper).toMatchSnapshot()
  })
})