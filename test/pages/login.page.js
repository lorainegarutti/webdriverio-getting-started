class LoginPage {

  get username () { return $('#email') }
  get password () { return $('#password') }
  get enterBtn () { return $('button=Entrar') }

  async fillSubmitForm (user, pass) {
    await this.username.setValue(user)
    await this.password.setValue(pass)
    await this.enterBtn.click()
  }

}

export default new LoginPage()
