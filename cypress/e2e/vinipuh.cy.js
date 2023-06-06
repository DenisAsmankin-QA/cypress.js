describe('Тестирование поисковика google', function () {
   it('Проверка, что при поиске Винни Пух есть Винни Пух на Вики', function () {
        cy.visit('https://google.com');
        cy.get('#APjFqb').type('Винни Пух').type('{enter}');
        cy.contains('Винни-Пух - Википедия');
    })
})