describe('Автотесты для сайта - путь пользователя', function () {

	it('Автотест для Hunting Pony', function () {
        cy.visit('https://huntingpony.com/');
        cy.get('[data-index="1"] > .header__collections-controls > .header__collections-link').click();
        cy.contains('Лежанки');
        //cy.wait(5000);
        cy.get('[data-product-id="338933592"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click();
        cy.wait(5000);
        cy.get('.add-cart-counter__btn').click();
        cy.wait(5000);
        cy.get('[data-add-cart-counter-plus=""]').click();
        cy.get('.header__cart > .icon').click();
        cy.get('.cart-controls > .button').click();
        cy.contains('Оформление заказа');
        cy.wait(8000);
        cy.get('#client_surname').type('Mega');
        cy.get('#client_contact_name').type('Pony');
        cy.get('#client_phone').type('0123');
        //cy.wait(2000);
        cy.get('#client_email').type('Ekb@rus.ru');
        //cy.wait(2000);
        cy.get('#shipping_address_street').type('Академическая');
        //cy.wait(2000);
        cy.get('#shipping_address_house').type('1');
        //cy.wait(2000);
        cy.get('#shipping_address_flat').type('2');
        //cy.wait(2000);
        cy.get('#checkout_buyer_fields > .co-input--required > .co-input-select > .co-input-field').select('Мальчик');
        cy.contains('Мальчик');
        cy.wait(2000);
        cy.get('.co-delivery_method-list > .co-input--captcha > .g-recaptcha > [style="width: 304px; height: 78px;"] > div > iframe').click();
        cy.wait(8000);
        cy.get('#create_order').click();

        })

})
