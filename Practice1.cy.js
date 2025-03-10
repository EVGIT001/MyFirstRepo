

describe('API Testing', () => {


    it('POST Request with dynamic', () => {
        const request = {


            name: Math.random().toString(4).substring(2),//math.random() will return a random number then it will convert to string in 4 character
            job: "QA",
            Email: Math.random().toString(4).substring(2) + "@gmail.com"

        }
        cy.request({
            url: 'https://reqres.in/api/users',
            method: 'POST',
            body: request

        }).then((response) => {

            cy.log(response)
            expect(response.status).to.eq(201)
            expect(response.body.Email).to.eq(request.Email)
            expect(response.body.job).to.eq('QA')
            expect(response.body.name).to.eq(request.name)

        })
    })

    it.only("Approach 2 using Fixture", () => {

        cy.fixture('Practice').then((myData) => {

            let requestBody = myData;

            cy.request({
                url: 'https://reqres.in/api/users',
                method: 'POST',
                body: requestBody

            }).then((response) => {

                cy.log(response)
                expect(response.status).to.eq(201)
                expect(response.body.Email).to.eq(requestBody.Email)
                expect(response.body.job).to.eq('DEveloper')
                expect(response.body.name).to.eq(requestBody.name)
                expect(response.body).has.property('Email',requestBody.Email)

            })




        })














    })
})