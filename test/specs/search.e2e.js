import LoginPage from '../pages/login.page.js'
import SearchPage from '../pages/search.page.js'

describe('Search', () => {
  beforeEach(async () => {
    await browser.url('/')
    await LoginPage.fillSubmitForm('generic@email.com', 'generic')
  })

  it('shows existent product', async () => {
    await SearchPage.searchProduct('Samsung')

    const cardsLength = await browser.waitUntil(async () => {
      const cards = await SearchPage.productCards
      if (cards.length !== 1) {
        return false
      }
  
      return cards.length
    })
    await expect(cardsLength).toEqual(1)
  })

  it('shows warning when no product is found', async () => {
    await SearchPage.searchProduct('Useless')

    await expect(SearchPage.productCard).not.toBeDisplayed()
  })
})
