import { mount, shallow } from 'enzyme';
import React from 'react';
import Product from '../../components/Product';
import ProductMock from '../../mocks/ProductMock';
import ProviderMock from '../../mocks/ProviderMock';

describe('<Product/>', () => {
  test('Render product component', () => {
    const product = shallow(
      <ProviderMock>
        <Product />
      </ProviderMock>
    );
    expect(product.length).toEqual(1);
  });
  test('check button for shopping', () => {
    const handleAddToCart = jest.fn();
    const wrapper = mount(
      <ProviderMock>
        <Product product={ProductMock} handleAddToCart={handleAddToCart} />
      </ProviderMock>
    );
    wrapper.find('button').simulate('click');
    expect(handleAddToCart).toHaveBeenCalledTimes(1);
  });
});
