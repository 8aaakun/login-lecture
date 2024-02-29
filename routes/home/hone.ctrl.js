"use strict";

const home = (req, res)=>{
    res.render("home/index");
}

function login(req, res) {
    res.render("home/login")
}
// 위 아래 차이 없음.

module.exports = {
    home, // key를 하나만 입력해주게 되면 key : key 와 같아진다.
    login,
};