import { IterableObjectPipe } from './iterable-object.pipe';

describe('IterableObjectPipe', () => {
  it('create an instance', () => {
    const pipe = new IterableObjectPipe();
    expect(pipe).toBeTruthy();
  });
});
