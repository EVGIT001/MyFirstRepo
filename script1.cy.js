
import data from "../../fixtures/API/Req1.json"
import data from"../../fixtures/API/Req2.json"
describe('APT Request', function () {

    it('TC001 GET request', function () {
        cy.request({
            url: "https://reqres.in/api/users?page=1",
            method: 'GET'
        }).then((res) => {

            cy.log(res)
            cy.log(res.body.data[0].first_name)
            expect(res.status).to.eq(200)
            expect(res.statusText).to.eq("OK")
            expect(res.body.data[0].first_name).to.eq("George")

        })
    })
})

it.only('TC002 Post REquest', () => {

    // let user = {
    //     "name": "dipanshu",
    //     "job": "leader"
    // }

    cy.request({

        url: "https://reqres.in/api/users",
        method: 'POST',
        body: data

        // user = {
        //     "name": "dipanshu",
        //     "job": "leader"
        // }


    }).then((respost) => {
        cy.log(respost)
        // expect(respost.body.name).to.eq("dipanshu")

//data is imported from  fixture
        // expect(respost.body.name).to.eq(data.name)
    }

    )

})

///data2 is from fixtrure>re

// data2.forEach((el, indx) => {

//     it.only('TC003 - verify reqres Api-POST method', function () {

//         cy.request({
//             url: "https://reqres.in/api/users",
//             method: "POST",
//             body: el
//         }).then((resPost) => {
//             cy.log(resPost)

//             expect(resPost.body.name).to.eq(el.name)
//         })
//     })
// })
