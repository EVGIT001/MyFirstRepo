describe('Add a new book', () => {

    it('Add a single book', () => {

        cy.request({

            url: 'https://fakestoreapi.com/products',
            method: 'POST',
            body: {


                "title": "New Book",
                "price": 10.99,
                "description": "A great new book",
                "image": "https://example.com/book.jpg",
                "category": "fiction"


            }
        }).then((response) => {

            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('id')

            const bookId = response.body.id

      
            cy.request({

                url: `https://fakestoreapi.com/products/${bookId}`,

                method: 'PUT',
                body: {


                    "title": "Updated Book",
                    "price": 11.99,
                    "description": "An updated description",
                    "image": "https://example.com/book.jpg",
                    "category": "NewFiction"
                }
            }).then((response1)=>{

                expect(response1.status).to.eq(200)
                expect(response1.body.title).to.eq("Updated Book")
            })



        })
    })
})