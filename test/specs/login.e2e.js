import LoginPage from '../pages/login.page.js'

describe('Application login', () => {
  it('signs in with valid credentials', async () => {
    await browser.url('/')

    await LoginPage.fillSubmitForm('generic@email.com', 'generic')

    await expect(browser).toHaveUrlContaining('home')
    await expect($('h1')).toHaveTextContaining('Serverest Store')
  })

  it('shows error message with wrong password', async () => {
    await browser.url('/')

    await LoginPage.fillSubmitForm('generic@email.com', 'wrong')

    await expect($('.alert')).toHaveTextContaining('Email e/ou senha inválidos')
  })
})

