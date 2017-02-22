import { AngularPolymerSamplePage } from './app.po';

describe('angular-polymer-sample App', () => {
  let page: AngularPolymerSamplePage;

  beforeEach(() => {
    page = new AngularPolymerSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
