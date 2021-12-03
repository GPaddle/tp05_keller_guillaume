import { MetaData } from './meta-data';

describe('MetaData', () => {
  it('should create an instance', () => {
    expect(new MetaData("test","cool")).toBeTruthy();
  });
});
