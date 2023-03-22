import LoginPage from '../pages/login.page.js'
import ShoppingListPage from '../pages/shopping-list.page.js'

describe.only('Shopping list', () => {
  beforeEach(async () => {
    await browser.url('/')
    await LoginPage.fillSubmitForm('generic@email.com', 'generic')
  })

  it('adds an item', async () => {
    await ShoppingListPage.addProductToList()

    await expect(ShoppingListPage.productCards).toBeElementsArrayOfSize(1)
    await expect(ShoppingListPage.productQuantity).toHaveTextContaining(1)
  })

  describe('when an item is already added', () => {
    beforeEach(async () => {
      await ShoppingListPage.addProductToList()
    })

    it('gets empty', async () => {
      const empty = 0

      await ShoppingListPage.emptyListBtn.click()

      await expect(ShoppingListPage.productCards).toBeElementsArrayOfSize(empty)
    })

    it('increases item amount', async () => {
      const newAmount = 2

      await ShoppingListPage.increaseItemBtn.click()

      await expect(ShoppingListPage.productQuantity).toHaveTextContaining(newAmount)
    })
  })
})