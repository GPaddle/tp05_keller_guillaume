import { MetaData } from './meta-data';
import { Product } from './product';

describe('Product', () => {
  it('should create an instance', () => {
    expect(new Product(1,"Pomme", "Super bon", 10, ["Fruit"],'🍎', [new MetaData("Sucre", "++")])).toBeTruthy();
  });
});
