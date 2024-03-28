"use strict";

//const UserStorage = require("../../models/UserStorage");
const User = require("../../models/User");
const output = {
    home : (req, res)=>{
        res.render("home/index");
    },
    login : (req, res) => {
        res.render("home/login")
    },
    register: (req, res) =>{
        res.render("home/register")
    },
}

const process = {
    login : (req, res) => {
        const user = new User(req.body);
        const response = user.login();
        return res.json(response);
        //User model이 없을때
        //console.log(req.body);
        // const id = req.body.id;
        // const psword = req.body.psword;
        // const users = UserStorage.getUsers("id", "psword");
        // const response = {};
        // if(users.id.includes(id))
        // {
        //     const idx = users.id.indexOf(id)
        //     if(users.psword[idx] === psword){
        //         response.success = true;
        //         return res.json(response)
        //     }
        // }
        // response.success = false;
        // response.msg = "로그인에 실패했습니다."
        // return res.json(response)

    },

    register : (req, res) => {
        const user = new User(req.body);
        const response = user.register();
        return res.json(response);
    }
}

// 위 아래 차이 없음.

module.exports = {
    output,
    process,

};