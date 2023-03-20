class SearchPage {

  get product () { return $('aria/Search') }
  get searchBtn () { return $('button=Pesquisar') }
  get productCards () { return $$('h5.card-title') }
  get productCard () { return $('h5.card-title') }

  async searchProduct (product) {
    await this.product.clearValue()
    await this.product.setValue(product)
    await this.searchBtn.click()
  }

}

export default new SearchPage()
