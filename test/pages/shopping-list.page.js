class ShoppingListPage {

  get addToListBtn () { return $('=Adicionar a lista') }
  get productCards () { return $$('[data-testid="shopping-cart-product-name"]') }
  get productQuantity () { return $('[data-testid="shopping-cart-product-quantity"]') }
  get emptyListBtn () { return $('button=Limpar Lista') }
  get increaseItemBtn () { return $('[data-testid="product-increase-quantity"]') }

  async addProductToList () {
    await this.addToListBtn.click()
    await expect(browser).toHaveUrlContaining('minhaListaDeProdutos')
  }
}

export default new ShoppingListPage
