// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('List of overall tasks');
    cy.contains('a', 'Login').click();
    cy.get('input[type=text]').type('rayners');
    cy.get('input[type=password]').type('password');
    cy.get('button').click();
    cy.contains('a', 'Add a task').click();
    cy.get('input').type('My new task!');
    cy.get('button').click();
    cy.contains('li', 'My new task');
  });

  it('does stuff with no backend', () => {
    cy.server();
    cy.route('/tasks', []);
    cy.visit('/');

    cy.contains('a', 'Login').click();
    cy.get('input[type=text]').type('rayners');
    cy.get('input[type=password]').type('password');

    cy.route({
      method: 'POST',
      url: '/users/login',
      status: 401,
      response: {
        error: 'Username unknown'
      }
    });
    cy.get('button').click();

    cy.contains('p', 'Username unknown');
  })
});
