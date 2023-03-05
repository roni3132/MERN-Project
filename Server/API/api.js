const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
require("../DB/DB");
const User = require("../Modal/userschema");
const Feedback = require("../Modal/feedbackschema");
const authenticate = require("../Middlewares/authenticate");


router.get('/', (req, res) => {
    res.send('Hello World router');
});

/***********INSERT Registration DATA USING PROMISSES ***************/
/*
router.post('/registor', (req, res) => {
    const { uname, email, phone, pass, cpass } = req.body;
    if (!uname || !email || !phone || !pass || !cpass) {
        return res.json({ "status": 0, "message": "All fields Are Required" });
    }
    User.findOne({ email: email })
        .then((user_exist) => {
            if (user_exist) {
                return res.json({ "status": 0, "message": "User Already Exiist" });
            }
            const insertData = new User({ uname, email, phone, pass, cpass });
            insertData.save().then(() => {
                return res.json({ "status": 1, "message": "User Registered Succesfully" });
            }).catch((err) => {
                return res.json({ "status": 0, "message": err });
            })

        }).catch((err) => {
            return res.json({ "status": 0, "message": err });
        })
});
*/

/***********INSERT Registration DATA USING async await  ***************/
router.post('/registor', async (req, res) => {
    const { uname, email, phone, profession, pass, cpass } = req.body;
    if (!uname || !email || !phone || !pass || !cpass) {
        return res.json({ "status": 0, "message": "All fields Are Required" });
    }

    if (pass != cpass) {
        return res.json({ "status": 0, "message": "Password And Confirm Password Should Not Matchd" });
    }

    try {
        const sel = await User.findOne({ email: email });

        if (sel) {
            return res.json({ "status": 0, "message": "User Already Exiist" });
        } else {
            const insertData = new User({ uname, email, phone, profession, pass, cpass });
            const datasaved = await insertData.save();
            if (datasaved) {
                return res.json({ "status": 1, "message": "User Registered Succesfully" });
            }
        }
    } catch (err) {
        return res.json({ "status": 0, "message": err });
    }
});


/*********** Login code ************/
router.post('/login', async (req, res) => {
    const { email, pass } = req.body;
    if (!email || !pass) {
        return res.json({ "status": 0, "message": "All fields Are Required" });
    }
    try {
        const sel = await User.findOne({ email: email });
        var passmatch = false;
        if (sel != null) {
            passmatch = await bcrypt.compare(pass, sel.pass);
            const token = await sel.getJWTtoken();
            res.cookie("token", token);
            // console.log(token);
        }
        if (passmatch) {
            return res.json({ "status": 1, "message": "Login Succesful" });
        } else {
            return res.json({ "status": 0, "message": "Invalide Username or Password" });
        }
    } catch (error) {
        return res.json({ "status": 0, "message": error });
    }
})

/******** About Us Authentication********/
router.get('/about', authenticate, (req, res) => {
    if (req.status == 1) {
        res.send({ "status": 1, "message": "User Valid", data: req.data });

    } else {
        res.send({ "status": 0, "message": "User Not Found" });
    }
});


/*********** Contect US Form Get Data **********/
router.get('/getdata', authenticate, (req, res) => {
    if (req.status == 1) {
        res.send({ "status": 1, "message": "User Valid", data: req.data });

    } else {
        res.send({ "status": 0, "message": "User Not Found" });
    }
});

router.post('/contect', authenticate, async (req, res) => {
    const { userid, uname, email, phone, feedback } = req.body;
    if (!userid || !uname || !email || !phone || !feedback) {
        return res.json({ "status": 0, "message": "All fields Are Required" });
    }
    try {
        const sel = await User.findOne({ email: email });
        if (sel) {
            // message = feedback;
            const insertData = new Feedback({ userid, uname, email, phone, message: feedback });
            const datasaved = await insertData.save();
            if (datasaved) {
                return res.json({ "status": 1, "message": "User Registered Succesfully" });
            }
        } else {
            return res.json({ "status": 0, "message": "User Does Not Exiist" });
        }
    } catch (error) {
        return res.json({ "status": 0, "message": error });
    }
});

/****** Log Out Page *****/
router.get('/logout', (req, res) => {
    res.clearCookie('token', { path: '/' });
    res.json({ status: 1, message: 'User Logout' })
});

module.exports = router;