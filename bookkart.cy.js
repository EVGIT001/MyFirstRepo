

describe('Get All Books', () => {

    it('Get All books', () => {

        cy.request({
            url: 'https://fakestoreapi.com/products',
            method: 'GET'
        }
        ).then((response)=>{

            expect(response.status).to.eq(200)
            expect(response.body[0]).have.property('id')
        })
    })

})