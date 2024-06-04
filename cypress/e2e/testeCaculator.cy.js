describe('Teste calculator', () => {
    it('Teste de adição', () => {
        cy.visit('http://127.0.0.1:5500/cypress/e2e/index.html');
        cy.get('#num1').type('5');
        cy.get('#operator').select('+');
        cy.get('#num2').type('3');
        cy.get('button').click();
        cy.get('#result').should('contain', '8');
    });

    it('Teste de subtração', () => {
        cy.visit('http://127.0.0.1:5500/cypress/e2e/index.html');
        cy.get('#num1').type('10');
        cy.get('#operator').select('-');
        cy.get('#num2').type('4');
        cy.get('button').click();
        cy.get('#result').should('contain', '6');
    });

    it('Teste de multiplicação', () => {
        cy.visit('http://127.0.0.1:5500/cypress/e2e/index.html');
        cy.get('#num1').type('5');
        cy.get('#operator').select('*');
        cy.get('#num2').type('2');
        cy.get('button').click();
        cy.get('#result').should('contain', '10');
    });

    it('Teste de divisão', () => {
        cy.visit('http://127.0.0.1:5500/cypress/e2e/index.html');
        cy.get('#num1').type('20');
        cy.get('#operator').select('/');
        cy.get('#num2').type('4');
        cy.get('button').click();
        cy.get('#result').should('contain', '5');
    });

    it('Teste de divisão por zero', () => {
        cy.visit('http://127.0.0.1:5500/cypress/e2e/index.html');
        cy.get('#num1').type('10');
        cy.get('#operator').select('/');
        cy.get('#num2').type('0');
        cy.get('button').click();
        cy.get('#result').should('contain', 'Divisão por zero não é permitida');
    });
});