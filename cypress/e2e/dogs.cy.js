
describe('Autotests на поиск ассортимента мага', function () {
    
    it('Проваливаюсь в нужную категорию и ищу в ней товар по названию', function () {
        cy.visit('https://staya.dog/');
        cy.get('[href="/catalog/leashes"] > .category-link__title').click();
        cy.contains('Iced Blue');
        cy.end();
         })

    it('Поиск сертификата по параметрам', function () {
        cy.visit('https://staya.dog/');
        cy.get('[href="/product/gft01-01bsc"] > .category-link__canvas-wrapper > .category-link__canvas').click();
        cy.get('.amount > :nth-child(4)').click();
        cy.get('.CertFormatField > :nth-child(2)').click();
        cy.get('.CertForm__submit').click();
        cy.contains('Создание сертификата');
         })
    })
