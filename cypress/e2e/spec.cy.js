describe("movies testing project", () => {

  const password = "do_not_share!1";

    it("first step - open the app, list of movies", () => {

      cy.visit("https://betterqa.ro/top-movies/");
      cy.get("input[name=post_password]").type(password);
      cy.get("input[name=Submit]").click();
      cy.get(".movies [class*=jss10]").each((item, index, list) => {
        expect(list).to.have.length(40);
      });

    });

    it("second step - open first movie and check if the release date is correct", () => {

      cy.get("button[class*=jss109]").eq(0).click();
      cy.get("input").eq(3).should("have.value", "1994-09-23");
      cy.get("button[class*=jss109]").eq(20).click();

    });

    it("third step - Star Trek is displayed and The Shawshank Redemption is not", () => {

      cy.get("input[type=search]").type('Star Trek').type("{enter}");
      cy.contains('Star Trek: First Contact');
      cy.get(".movies").should("not.have.text", 'The Shawshank Redemption');

    });

    it("fourth step - any movie I like and about it", () => {

      const movie = "The Notebook";

      cy.get("input[type=search]").clear();
      cy.get("input[type=search]").type(movie).type("{enter}");
      cy.contains(movie);
      cy.get("button[type=button]").eq(0).click();
      cy.get("input").eq(3).should("have.value", "2004-06-25");
      cy.get("input").eq(4).should("have.value", "63.036");
      cy.get("input").eq(5).should("have.value", "7.9");
      cy.get("input").eq(6).should("have.value", "9567");

    });

    it("fifth step - the bug i found", () => {

      cy.get("button[class*=jss109]").eq(16).click();
      cy.get("input[type=search]").clear().type("{enter}");

    });
});
