import {EscapeHtmlPipe} from './escape-html.pipe';

describe('EscapeHtmlPipePipe', () => {
  it('create an instance', () => {
    const pipe = new EscapeHtmlPipe();
    expect(pipe).toBeTruthy();
  });
});
