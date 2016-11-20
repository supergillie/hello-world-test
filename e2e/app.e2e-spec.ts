import { HelloWorldTestPage } from './app.po';

describe('hello-world-test App', function() {
  let page: HelloWorldTestPage;

  beforeEach(() => {
    page = new HelloWorldTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
