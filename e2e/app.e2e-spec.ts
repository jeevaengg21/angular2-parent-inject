import { SampleroutePage } from './app.po';

describe('sampleroute App', function() {
  let page: SampleroutePage;

  beforeEach(() => {
    page = new SampleroutePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
