describe('Login parabank', () => {
    it('abrir o site parabank', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');




        /* ==== Generated with Cypress Studio ==== */
        
        cy.get(':nth-child(2) > .input').type('john');
        cy.get(':nth-child(4) > .input').type('demo');
        cy.get(':nth-child(5) > .button').click();
        // Verificar se o usuário foi redirecionado para a página de sucesso após o login
        cy.url().should('include', '/overview.htm');

        // Verificar se há algum elemento específico na página de sucesso para garantir que o login foi bem-sucedido
        cy.get('h1').should('contain', 'Accounts Overview');

    });

        it('deve exibir mensagem de erro ao tentar fazer login com senha inválida', () => {
            cy.visit('https://parabank.parasoft.com/parabank/index.htm');
    
            cy.get(':nth-child(2) > .input').type('john');
            cy.get(':nth-child(4) > .input').type('senha_incorreta');
            cy.get(':nth-child(5) > .button').click();
    
            cy.get('.error', { timeout: 60000 }).should('contain', 'An internal error has occurred and has been logged.');
        });
    
        it('deve exibir mensagem de erro ao tentar fazer login com usuário inválido', () => {
            cy.visit('https://parabank.parasoft.com/parabank/index.htm');
    
            cy.get(':nth-child(2) > .input').type('Braga Junior');
            cy.get(':nth-child(4) > .input').type('demo');
            cy.get(':nth-child(5) > .button').click();
    
            cy.get('.error').should('contain', 'An internal error has occurred and has been logged.');
    })
    
})