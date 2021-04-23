describe("Testing the pizza order app", ()=>{
    beforeEach(()=>{
        cy.visit("http://localhost:3000/pizza");
    })
    // test that you can add text to the box
    // test that you can select multiple toppings
    // test that you can submit the form
    const nameInput = ()=>cy.get('input[id="name-input"]');
    const sizeInput = ()=>cy.get('select[id="size-dropdown"]');
    const topping1 = ()=>cy.get('input[name="topping1"]');
    const topping2 = ()=>cy.get('input[name="topping2"]');
    const topping3 = ()=>cy.get('input[name="topping3"]');
    const topping4 = ()=>cy.get('input[name="topping4"]');

    const submitBtn = ()=>cy.get('button[id="order-button"]');

    it("test that you can add text to the box",()=>{
        nameInput().type("Coding is fun").should("have.value","Coding is fun");
    })

    it("test that you can select multiple toppings",()=>{
        topping1().click().should("be.checked");
        topping2().click().should("be.checked");
        topping3().click().should("be.checked");
        topping4().click().should("be.checked");
    })

    it("test that you can submit the form", ()=>{
        nameInput().type("Jack").should("have.value","Jack");
        sizeInput().select("Medium").should("have.value","Medium");

        topping2().click().should("be.checked");
        submitBtn().click();
    })
})