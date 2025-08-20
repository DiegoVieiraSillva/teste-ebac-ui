/// <reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {
    
    beforeEach(() => {
     cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
        
    });

it('Deve selecionar o produto desejado', () => {
   cy.get('.product-block')
            .contains('Apollo Running Short')
            .click()
    cy.get('#tab-title-description > a').should('contain','Descrição')
            cy.get('.button-variable-item-36').click()
            cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
            cy.get('.single_add_to_cart_button').click()
            cy.get('.stock').should('contain','Fora de estoque')
            
});

it('Deve selecionar o primeiro produto', () => {
    cy.get('.product-block')
                .first()
                .click()
                cy.get('#tab-title-description > a').should('contain','Descrição')
                cy.get('.button-variable-item-M').click()
                cy.get('.button-variable-item-Red').click()
                cy.get('.single_add_to_cart_button').click()
                cy.get('.stock').should('contain','Fora de estoque')

   
});

it('Deve selecionar o ultimo produto', () => {
     cy.get('.product-block')
                .last()
                .click()
                cy.get('.woocommerce-tabs').should('contain','Descrição')
                cy.get('.button-variable-item-M').click()
                cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
                cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
                cy.get('.single_add_to_cart_button').click()
    
});

it('Deve selecionar o terceiro produto', () => {
    cy.get('.product-block')
                .eq(2)
                .click()
                cy.get('#tab-title-description > a').should('contain','Descrição')
                cy.get('.button-variable-item-36').click()
                cy.get('.button-variable-item-Green').click()
                cy.get('.single_add_to_cart_button').click()
                cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
               

});

});