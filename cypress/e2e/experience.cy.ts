const website = Cypress.env("website");

const visitOptions = {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    onBeforeLoad(win) {
        Object.defineProperty(win.navigator, "language", {
            value: "pt-br",
        });
    },
};

describe("experiences page", () => {
    it("opens the website", () => {
        cy.visit(website, visitOptions);
    });

    it("can visit the experiences tab", () => {
        cy.visit(website, visitOptions);

        cy.get("a")
            .contains(/Experiência Profissional|Professional Experience/, {
                matchCase: false,
            })
            .click();

        cy.contains(/Habilidades|Skills/);
    });

    it("can filter experiences by skill", () => {
        const filterSelector = "fieldset > input";

        cy.visit(website + "/experience", visitOptions);

        cy.get("article").find("> article").should("have.length.above", 1);

        cy.get(filterSelector).type("sup");

        cy.get("article").find("> article").should("have.length", 1);

        cy.get(filterSelector).clear();

        cy.get("article").find("> article").should("have.length.above", 1);
    });
});
