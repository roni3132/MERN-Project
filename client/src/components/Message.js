import React, { useState } from 'react';
export const Message = () => {
    var [msg, Setmessage] = useState("");
    var [msgshow, Setshowclass] = useState("");
    var [msgtype, Setmessagetype] = useState("");
    var [msgtitle, Setmessagetitle] = useState("");

    var alertify = (message, type) => {
        if (type == 1) {
            Setmessagetype("success");
            Setmessagetitle("Success");

        } else {
            Setmessagetype("danger");
            Setmessagetitle("Error");
        }
        Setmessage(message)
        Setshowclass("show")
        setTimeout(() => {
            Setshowclass("hide")
        }, 2000);
        setTimeout(() => {
            Setshowclass("");
        }, 2500);
    }

    const closeModal = () => {
        Setshowclass("hide");
    }
    return (
        <>
            <div className={'msgbox ' + msgtype + msgshow}>
                <div className="row">
                    <div className="col-md-12 ">
                        <div className="d-flex bd-highlight mx-4">
                            <div className="p-2 w-100 bd-highlight" id="msgtitle">{msgtitle}</div>
                            <div className="p-2 flex-shrink-1 bd-highlight">
                                <a href="" className="closemsgbox" onClick={closeModal} >
                                    &times;
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 messeg-body">
                        <p className="mx-3 mt-2" id="messege"> {msg} </p>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Message;
// export { alertify }



