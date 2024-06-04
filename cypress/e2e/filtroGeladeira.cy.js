describe('Testando magalu', () => {
    it('abrir o site', () => {
      cy.visit('https://www.magazineluiza.com.br/')
      /* ==== Generated with Cypress Studio ==== */



      /* ==== Generated with Cypress Studio ==== */
      cy.get('[data-testid="input-search"]').click();
      cy.get(':nth-child(2) > [data-testid="item-title"]').click();

      cy.wait(1000);
      cy.url().should('eq', 'https://www.magazineluiza.com.br/busca/geladeira/')
      
      
      
      
    })
  })