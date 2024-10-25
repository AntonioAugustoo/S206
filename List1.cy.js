/// <reference =  cypress>

describe("Teste de login ", () => {
  it("Teste para criar login com sucesso", () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('#login-button').click()
    cy.get('.product_label').should("contain","Products")

  }); 

  it("Teste para criar login incorreto", () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.get('[data-test="username"]').type("standard_user3")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should("contain","Epic sadface: Username and password do not match any user in this service")

  });
  it("Teste para criar login com senha incorreta", () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce3")
    cy.get('#login-button').click()
    cy.get('[data-test="error"]').should("contain","Epic sadface: Username and password do not match any user in this service")

  });

  it("Teste para colocar produto no carrinho", () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
   cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('#login-button').click()
    cy.get('.product_label').should("contain","Products")
    cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
    cy.get('.btn_secondary').should("contain","REMOVE")
  });

  it("Teste para remover produto do carrinho", () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
   cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('#login-button').click()
    cy.get('.product_label').should("contain","Products")
    cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
    cy.get('.btn_secondary').should("contain","REMOVE") 
    cy.get('.btn_secondary').click()
    cy.get(':nth-child(1) > .pricebar > .btn_primary').should("contain","ADD TO CART")
    
  });

  it("Teste para criar login com sucesso", () => {
    cy.visit('https://www.saucedemo.com/v1/index.html')
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('#login-button').click()
    cy.get('.product_label').should("contain","Products")
    cy.get('.bm-burger-button > button').click()
    cy.get('#logout_sidebar_link').click()
    cy.get('#login_credentials > h4').should("contain","Accepted usernames are:")

  }); 




  




   



})






