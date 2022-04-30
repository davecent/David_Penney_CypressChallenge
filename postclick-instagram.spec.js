/// <reference types="cypress" />
it('should navigate to instapage site', () => {
   cy.visit('https://instapage.com')

   cy.get('.md-visible').click({force: true})
   cy.get('#email').type('Email@domain.com')
   cy.get('#password').type('Password')
   cy.get('form').contains('Log In').click()
   cy.get('.c-alert__text').should('have.text', 'Incorrect Email or Password')
  })