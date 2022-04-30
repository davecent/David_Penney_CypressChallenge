/// <reference types="cypress" />
/*it('Login page - should show an error when trying to login with invalid credentials', () => {
   cy.visit('https://instapage.com')

   cy.get('.md-visible').click({force: true})
   cy.get('#email').type('Email@domain.com')
   cy.get('#password').type('Password')
   cy.get('form').contains('Log In').click()
   cy.get('.c-alert__text').should('have.text', 'Incorrect Email or Password')
  })*/


  /*it('Demo page - should load footer with all elements and navigate to the privacy policy', () => {
   cy.visit('https://instapage.com')
   cy.get('.v7-btn-group > .v7-btn-cta').click()
   cy.scrollTo('bottom')
   cy.get('.v7-mt-80').should('be.visible')
   cy.get('[href="https://instapage.com/privacy-policy"]').click({force: true})
   cy.url().should('eq','https://instapage.com/privacy-policy')
  })*/



  it('Resources - should return eight search results', () => {
   cy.visit('https://instapage.com')
   cy.get(':nth-child(5) > .main-footer-menu > :nth-child(1) > .v7-btn-flat-black > span').click({force: true})
   cy.url().should('eq','https://instapage.com/resources')
   cy.get('.v7-search-input').type('Conversion ROAS{Enter}')
   cy.get('#js-load-more-content').children().should('have.length', 8)
  })