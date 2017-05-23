import { CourtFinderPage } from './app.po';

describe('court-finder App', () => {
  let page: CourtFinderPage;

  beforeEach(() => {
    page = new CourtFinderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
