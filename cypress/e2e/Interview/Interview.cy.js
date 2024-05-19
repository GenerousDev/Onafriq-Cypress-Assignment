/// <reference types="cypress" />

describe("Onafriq Assignment to ", () => {
  beforeEach(() => {
    cy.visit("https://www.automationexercise.com/");
    cy.fixture("example.json").as("data");
    cy.get(".shop-menu > .nav > :nth-child(4) > a").click();
    cy.get("@data").then((data) => {
      cy.get('[data-qa="login-email"]').type(data.Username);
      cy.get('[data-qa="login-password"]').type(data.Password);
    });
    cy.get('[data-qa="login-button"]').click();
  });

  it("Sort list of appeals under filtered items by price ", () => {
    // Array to hold product details
    const products = [];

    // Collect all product prices and labels
    cy.get(".features_items .productinfo").each(($product) => {
      cy.wrap($product)
        .find("h2")
        .then(($price) => {
          const price = parseInt(
            $price.text().replace("Rs. ", "").replace(",", ""),
            10
          );

          cy.wrap($product)
            .find("p")
            .then(($label) => {
              const label = $label.text().trim();

              // Push the product data to the array
              products.push({ price: price, label: label });

              // Check if we have processed all products
              if (
                products.length ===
                Cypress.$(".features_items .productinfo").length
              ) {
                // Sort products by price in ascending order
                products.sort((a, b) => a.price - b.price);

                // Log the sorted products
                products.forEach((product, index) => {
                  cy.log(
                    `Product ${index + 1}: Price - Rs. ${
                      product.price
                    }, Label - ${product.label}`
                  );
                });
              }
            });
        });
    });
  });

  it("Add items to cart", () => {
    cy.get(
      ":nth-child(1) > .panel-heading > .panel-title > a > .badge > .fa"
    ).click();
    cy.get("#Women > .panel-body > ul > :nth-child(2) > a").click();

    cy.get(
      ":nth-child(5) > .product-image-wrapper > .choose > .nav > li > a"
    ).click();
    cy.get(":nth-child(5) > .btn").click();
    cy.get("#cartModal .close-modal").should("be.visible").click();
    cy.go("back");

    cy.get(
      ":nth-child(7) > .product-image-wrapper > .choose > .nav > li > a"
    ).click();
    cy.get(":nth-child(5) > .btn").click();
    cy.get("#cartModal .close-modal").should("be.visible").click();
    cy.go("back");

    cy.get(".shop-menu > .nav > :nth-child(3) > a").click();
    cy.get(".col-sm-6 > .btn").click();
    cy.get(".form-control").type("Order placed.");
    cy.get(":nth-child(7) > .btn").click();

    cy.get('[data-qa="name-on-card"]').type("Test Card");
    cy.get('[data-qa="card-number"]').type("4100 0000 0000");
    cy.get('[data-qa="cvc"]').type("123");
    cy.get('[data-qa="expiry-month"]').type("01");
    cy.get('[data-qa="expiry-year"]').type("1900");
    cy.get('[data-qa="pay-button"]').click();

    cy.get('[data-qa="continue-button"]').click();
  });
});
