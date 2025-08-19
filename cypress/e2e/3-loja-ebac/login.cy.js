/// <reference types="cypress"/>

describe('funcionalidade login',() => {

    beforeEach(() => {cy.visit ('http://lojaebac.ebaconline.art.br/minha-conta/')
        
    });

    afterEach(() => {
        cy.screenshot()
    });
        it('Deve fazer login com sucesso', () => {

            cy.get('#username').type('dhego.teste@teste.com.br')
            cy.get('#password'). type('teste123')
            cy.get('.woocommerce-form > .button').click()

            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, dhego.teste (não é dhego.teste? Sair)')
        });
        it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {

            cy.get('#username').type('dhhhego.teste@teste.com.br')
            cy.get('#password'). type('teste123')
            cy.get('.woocommerce-form > .button').click()

            cy.get('.woocommerce-error').should('contain' , 'Endereço de e-mail desconhecido.')
   
        });

        it('Deve apresentar uma mensagem de erro ao digitar a senha inválida', () => {
            
            cy.get('#username').type('dhego.teste@teste.com.br')
            cy.get('#password'). type('teste1234')
            cy.get('.woocommerce-form > .button').click()

            cy.get('.woocommerce-error').should('contain' , 'Erro: A senha fornecida para o e-mail dhego.teste@teste.com.br está incorreta. Perdeu a senha?')
            cy.get('.woocommerce-error').should('exist')

        });

    })