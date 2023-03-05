// import React, { useState } from 'react';

// var [msg, Setmessage] = useState("");
// var [msgshow, Setshowclass] = useState("");
// var [msgtype, Setmessagetype] = useState("");
// var [msgtitle, Setmessagetitle] = useState("");

// var alertify = (message, type) => {
//     var msgbox = document.getElementsByClassName('msgbox');
//     if (type == 1) {
//         // var msgbox = document.getElementsByClassName('msgbox');.
//         Setmessagetype("success");
//         // msgbox.classList.add("success");
//         // msgbox.classList.remove("danger");
//         // document.getElementById('msgtitle').innerHTML = "Success";
//         Setmessagetitle("Success");

//     } else {
//         // msgbox.classList.add("danger");
//         // msgbox.classList.remove("success");
//         Setmessagetype("danger");
//         // document.getElementById('msgtitle').innerHTML = "Error"
//         Setmessagetitle("Error");
//     }
//     Setmessage(message)
//     Setshowclass("show")
//     // msgbox.classList.add("show");
//     setTimeout(() => {
//         // msgbox.classList.add("hide");
//         Setshowclass("hide")
//     }, 2000);
//     setTimeout(() => {
//         // msgbox.classList.remove("show");
//         Setshowclass("");
//         // msgbox.classList.remove("hide");
//     }, 2500);
// }

// const closeModal = () => {
//     Setshowclass("hide");
// }
// export { alertify, msg, msgtype, msgtitle, msgshow }