
describe('API Testing', () => {

    it('Quert Params', () => {


        cy.request({
            url: 'https://reqres.in/api/users',
            method:'GET',
            qs:{page:2}

        }).then((response)=>{

expect(response.body.page).to.eq(2)
expect(response.status).to.eq(200)
expect(response.body.data[0]).have.property('id',7)
expect(response.body.data[1]).have.property('avatar',"https://reqres.in/img/faces/8-image.jpg")


        })
    })


})