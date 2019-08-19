
/* eslint-disable no-undef */
describe('Bloglist app', function() {
  beforeEach(function() {
    cy.request('POST', 'http://localhost:3003/api/testing/reset')
    const user = {
      name: 'E2E tester',
      username: 'test',
      password: 'testpass'
    }
    cy.request('POST', 'http://localhost:3003/api/users/', user)
  })

  describe('when logged in', function() {
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

    it('user can log out', function() {
      cy.contains('logout')
        .click()
      cy.contains('login')
    })

    describe('when user added a blog', function() {
      beforeEach(function() {
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

      it('user can add like to a blog', function() {
        cy.contains('new_title new_author')
          .click()
        cy.contains('0 likes')
        cy.get('#like')
          .click()
        cy.contains('1 likes')
      })

      it('user can add a comment to blog', function() {
        cy.contains('new_title new_author')
          .click()
        cy.get('#comment')
          .type('test comment')
        cy.get('form')
          .contains('add comment')
          .click()
        cy.contains('test comment')
      })

      it('trying to add empty comment fails with warning', function() {
        cy.contains('new_title new_author')
          .click()
        cy.get('form')
          .contains('add comment')
          .click()
        cy.contains('cannot add empty comment')
      })
    })
  })
})