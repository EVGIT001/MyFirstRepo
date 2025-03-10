///<reference types='cypress' />

import postData from '../../fixtures/API/GoPost'
import putData from'../../fixtures/API/GoPUT'

describe('TS001 : verify reqres Api for gorest', function () {

    postData.forEach((el,index)=>{

        it("verify e2e testing of api",()=>{
            const token = "2e5d6a76c6c9f78db8669486a0bc356d8c5acaa7a0adac87796e8eaef1619f8e"
            cy.request({
                url : "https://gorest.co.in/public/v2/users",
                method : 'POST',
                body : el,
                headers : {
                    Authorization : `Bearer ${token}`
                }
            }).then((resPost)=>{
                //cy.log(resPost)
                expect(resPost.body.name).to.eq(el.name)
                expect(resPost.status).to.eq(201)
                return resPost.body.id
            }).then((userId)=>{
                cy.request({
                    url : `https://gorest.co.in/public/v2/users/${userId}`,
                    method : 'PUT',
                    body  :putData[index],
                    headers:{
                        Authorization: `Bearer ${token}`
                    } }).then((resPut)=>{
                        //cy.log(resPut)
                        expect(resPut.body.name).to.eq(putData[index].name)
                    }).then(()=>{
                        cy.request({
                            url : `https://gorest.co.in/public/v2/users/${userId}`,
                            method : 'DELETE',
                            headers : {
                                Authorization : `Bearer ${token}`
                            }
                        }).then((resDelete)=>{
                            //cy.log(resDelete)
                            expect(resDelete.body).to.eq("")
                            expect(resDelete.status).to.eq(204)
                        })
                    })
                })
            })
        })
        })