describe('Testando walkdog', () => {
    it('abrir o site walkdog', () => {
     cy.visit('https://walkdog.vercel.app/signup')


     /* ==== Generated with Cypress Studio ==== */
     cy.get(':nth-child(3) > :nth-child(2) > .field > input').clear('B');
     cy.get(':nth-child(3) > :nth-child(2) > .field > input').type('Braga Junior');
     cy.get(':nth-child(3) > :nth-child(1) > input').clear('q');
     cy.get(':nth-child(3) > :nth-child(1) > input').type('qa.braga.jr@hotmail.com');
     cy.get(':nth-child(3) > :nth-child(2) > input').clear('06335516004');
     cy.get(':nth-child(3) > :nth-child(2) > input').type('06335516004');
     /* ==== End Cypress Studio ==== */
     /* ==== Generated with Cypress Studio ==== */
     cy.get(':nth-child(4) > :nth-child(2) > :nth-child(1) > input').clear('96845-620');
     cy.get(':nth-child(4) > :nth-child(2) > :nth-child(1) > input').type('96845-620');
     cy.get(':nth-child(2) > :nth-child(2) > input').click();
     cy.get(':nth-child(4) > :nth-child(1) > input').clear('4');
     cy.get(':nth-child(4) > :nth-child(1) > input').type('450');

     cy.get('.walker-service > :nth-child(1) > img').click();
     cy.get('p > svg > line').click();
     cy.get('.button-register').click();


     // cy.get('.walker-service > :nth-child(1) > img').click();


     /* ==== Generated with Cypress Studio ==== */
     // cy.get('p > svg').click();
     //cy.get('.button-register').click();
      })


     it('Confirmar registro', () => {
      'Aumentar o timeout para aguardar a caixa de confirmação'
      cy.wait(2000).then(() => console.log(window.history.length));
     /* ==== Generated with Cypress Studio ==== */
     })
     /* ==== End Cypress Studio ==== */
    })
