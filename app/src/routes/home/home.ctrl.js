"use strict";


const users = {
    id : ["smsh0807", "박건", "문송은"],
    psword : ["1234", "0807", "4313"],
}

const output = {
    home : (req, res)=>{
        res.render("home/index");
    },
    login : (req, res) => {
        res.render("home/login")
    },
}

const process = {
    login : (req, res) => {
        //console.log(req.body);
        const id = req.body.id;
        const psword = req.body.psword;
        
        if(users.id.includes(id))
        {
            const idx = users.id.indexOf(id)
            if(users.psword[idx] === psword){
                return res.json({
                    success: true,
                })
            }
        }
        return res.json({
            success: false,
            msg : "로그인에 실패했습니다.",
        })

    }
}

// 위 아래 차이 없음.

module.exports = {
    output,
    process,

};