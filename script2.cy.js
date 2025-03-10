//<reference types='cypress' />

import data2 from '../../fixtures/API/Req2.json'


describe('Gousers', () => {
    it('TC001:Post method', function () {

        // let data = {
        //     "name": "neel",
        //     "job": "leader"
        // }

        cy.request({
            url: "https://reqres.in/api/users",
            method: 'POST',
            body: data2
            //result is just a object which we are storing as part of promise resolvd state
        }).then((result) => {
            cy.log(result)
            expect(result.body.name).to.eq(data2.name)
            expect(result.statusText).to.eq("Created")
            // expect(result.body.)
        })



    })

})

data2.forEach((el, idx) => {

    it("TC002:", function () {


        cy.request({
            url: "https://reqres.in/api/users'",
            method: 'POST',
            body: el

        }).then((result) => {
            cy.log(result)

            expect(result.body.job).to.eq(el.job)
            expect(result.status).to.eq(201)
            // expect(result.length).to.eq(3)
        })



    })

})

it('TC003 - verify reqres Api-GET method', function () {
    cy.request({
        url: 'https://reqres.in/api/users?page=1',
        method: 'GET'
    }).then((resGet) => {
        cy.log(resGet)
        cy.log(resGet.body.data[0].first_name)
        expect(resGet.body.data[0].first_name).to.eq('George')
    })
})

it.only('TC004:PUT request', function () {

    cy.request({
        url: 'https://reqres.in/api/users/2',
        method: 'PUT',
        body: {
            "name": "tanish",
            "job": "zion resident"
        }

        }).then((putres)=>{
            cy.log(putres)
            expect(putres.body.name).to.eq("tanish")
        })
    })


    it.only('TC005 - verify reqres Api-DELETE method', function () { 
        cy.request({
            url :"https://reqres.in/api/users/2",
            method:'DELETE'
        }).then((resDel)=>{
            cy.log(resDel)
            expect(resDel.body).to.eq("")
            expect(resDel.status).to.eq(204)
        })
    })
