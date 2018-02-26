/* global cy Cypress describe it beforeEach */

describe('Login', () => {
  beforeEach(() => {
    cy.setCookie('browserupdateorg', 'pause')
  })
  it('logs in', () => {
    cy.visit(Cypress.env('TEST_HOST'))
    cy.get('.signup > nav a:last-child').click()
    cy.get('input[type=email]').type(Cypress.env('NRFCLOUD_LOGIN'))
    cy.get('input[type=password]').type(Cypress.env('NRFCLOUD_PASSWORD'))
    cy.get('button[type=submit]').click()
    cy.get('section.sidebar a.dashboard').should('be.visible')
  })
  it('logs out', () => {
    cy.get('#profile-button').click()
    cy.get('.dropdown-menu a').contains('Logout').click()
    cy.get('.modal-dialog *[role=toolbar] button').contains('OK').click()
    cy.get('nav.unauthorized').should('be.visible')
  })
})
