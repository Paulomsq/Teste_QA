describe('Barra de Busca', () => {

    beforeEach(() => {
      cy.visit('/');

      /*Verifica se modal existe e fecha*/
      cy.get('div[id="new-LTBOXC"]').invoke('prop', 'hidden').then((id) => {
        if(id==false){
          cy.get('div[id="new-LTBOXC"]').invoke('hide');
        }
      })
    })

  it('Busca por Parachoque', () => {
    cy.get('input[id="neemu-input"]').type("Parachoque ");
    cy.get('input[value="Buscar"]').click();
    cy.get('h3').should('contain', 'Parachoque');
  })

  it('Busca por Capacete clicando na Lupa', () => {
    cy.get('input[id="neemu-input"]').type("Capacete");
    cy.get('input[value="Buscar"]').click();
    cy.get('h3').should('contain', 'Capacete');
  })

  it('Busca por Volante clicando em Enter', () => {
    cy.get('input[id="neemu-input"]').type("Volante{enter}");
    cy.get('h3').should('contain', 'Volante');    
  })

  it('Busca por Volante Renault', () => {
    cy.get('input[id="neemu-input"]').type("Volante Renault");
    cy.get('input[value="Buscar"]').click();
    cy.get('h3').should('contain', 'Volante')
      .and('contain', 'Renault');
  })

  it('Busca por Parachoque Cromado', () => {
    cy.get('input[id="neemu-input"]').type("Parachoque Cromado");
    cy.get('input[value="Buscar"]').click();
    cy.get('h3').should('contain', 'Parachoque')
      .and('contain', 'Cromado');
  })

  it('Busca por Retrovisor Onix', () => {
    cy.get('input[id="neemu-input"]').type("Retrovisor Onix");
    cy.get('input[value="Buscar"]').click();
    cy.get('h3').should('contain', 'Retrovisor')
      .and('contain', 'Onix');
  })

  it('Busca por Farol Milha Saveiro', () => {
    cy.get('input[id="neemu-input"]').type("Farol Milha Saveiro");
    cy.get('input[value="Buscar"]').click();
    cy.get('h3').should('contain', 'Farol')
      .and('contain', 'Milha')
      .and('contain', 'Saveiro');
  })

})