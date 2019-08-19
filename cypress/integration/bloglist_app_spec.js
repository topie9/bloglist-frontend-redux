
/* eslint-disable no-undef */
describe('Bloglist app', function() {
  beforeEach(function() {
    cy.visit('http://localhost:3000')
    cy.get('#username')
      .type('test')
    cy.get('#password')
      .type('testpass')
    cy.contains('login')
      .click()
  })

  it('the name of the user is shown after logging in', function() {
    cy.contains('E2E tester logged in')
  })

  it('user can create new blog', function() {
    cy.contains('new blog')
      .click()
    cy.get('#title')
      .type('new_title')
    cy.get('#author')
      .type('new_author')
    cy.get('#url')
      .type('new_url')
    cy.get('form')
      .contains('create')
      .click()
    cy.contains('new_title new_author')
  })

})