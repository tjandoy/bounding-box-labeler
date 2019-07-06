describe('button', () => {
  beforeEach(() => {
    cy.resetAndInitialize();
  });

  it('shows hello on click', () => {
    cy.get('button').click();
    cy.contains('Hello');
  });
});
