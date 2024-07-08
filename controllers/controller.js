const fs = require('fs')
const path = require('path')

const createUser = async (req, res) => {
    let input = req.body
    console.log(input)
    let filepath = path.join(__dirname + "../../database/shabnam.json")
    console.log(filepath)
    fs.readFile(filepath, 'utf-8', (error, data) => {

        if (error) console.log(error)
        else {
            if (!data) {

                let inputdata = []
                inputdata = JSON.stringify(inputdata)
                fs.writeFile(filepath, inputdata, (error) => {
                    if (error) console.log(error)
                    else {
                        res.status(200).json({
                            status: 200,
                            message: 'sended',
                            data: {}
                        })

                    }

                })


            }
            else {
                data = JSON.parse(data)
                req.body.ID = data.length + 1;
                data.push(req.body)
                data = JSON.stringify(data)
                console.log(data)
                fs.writeFile(filepath, data, (error) => {
                    if (error) console.log(error)
                    else {
                        res.status(200).json({
                            status: 200,
                            message: 'sended',
                            data: {}
                        })
                    }
                })
            }
        }
    })

}
const updateUser = async (req, res) => {

    let input = req.body
    console.log(input)
    let inputdata = req?.query?.id
    console.log(inputdata)
    let filepath = path.join(__dirname + "../../database/shabnam.json")
    console.log(filepath)

    fs.readFile(filepath, 'utf-8', (error, data) => {
        if (error) console.log(error)
        else {
            if (data) {
                data = JSON.parse(data)
                data = data.map((x) => {
                    if (x.ID == inputdata) {
                        x.name = input.name,
                            x.age = input.age,
                            x.email = input.email,
                            x.DOB = input.DOB,
                            x.mobileNumber = input.mobileNumber

                    }
                    return x

                })

                data = JSON.stringify(data)
                fs.writeFile(filepath, data, (error) => {
                    if (error) console.log(error)
                    else {
                        console.log('invalid data')
                    }
                })

            }


        }
        res.send('updated')
    })



}
const deleteUser = async (req, res) => {
    let input = req?.query?.id
    console.log(input)
    let filepath = path.join(__dirname + "../../database/shabnam.json")
    console.log(filepath)
    fs.readFile(filepath, 'utf-8', (error, data) => {

        if (error) console.log(error)
        else {
            if (data) {
                data = JSON.parse(data)
                data = data.filter((x) => x.ID != input)
            }
            data = JSON.stringify(data)
            fs.writeFile(filepath, data, (error) => {
                if (error) console.log(error)
                else {
                    console.log('deleted')
                }

            })

        }
        res.status(200).json({
            status: 200,
            message: 'deleted sucesssfully',
            data: {}
        })
    })




}
const getUserByList = async (req, res) => {

    let filepath = path.join(__dirname + "../../database/shabnam.json")
    console.log(filepath)
    fs.readFile(filepath, 'utf-8', (error, data) => {

        if (error) console.log(error)
        else {
            if (data) {
                data = JSON.parse(data)
                res.status(200).json({
                    status: 200,
                    message: 'sended',
                    data: data

                })

            }
        }
    })


}
const getUserById = async (req, res) => {
    let input = req?.query?.id
    console.log(input)
    let filepath = path.join(__dirname + "../../database/shabnam.json")
    console.log(filepath)
    fs.readFile(filepath, 'utf-8', (error, data) => {

        if (error) console.log(error)
        else {
            if (data) {
                data = JSON.parse(data)
                data = data.filter((x) => x.ID == input)

                res.status(200).json({
                    status: 200,
                    message: 'sended',
                    data: data

                })

            }
        }
    })




}
module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getUserByList,
    getUserById
}


