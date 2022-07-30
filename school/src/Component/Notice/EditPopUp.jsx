import React, { useState } from 'react'
import axios from 'axios'
import "./EditPopUp.css"
function EditPopUp({ post, idx }) {
    console.log(post);
    const contactSubmit = async () => {
        try {
            const response =await axios.put('https://schoolwebsitehosting.herokuapp.com/api/notice/' + post._id, { notice: NoticeHeade, desc: NoticeDesc, });
            console.log(response.data);

            await window.location.reload()
        } catch (error) {
            console.log(error);
            seterror(true)
        }
    }
    const [NoticeHeade, setNoticeHeade] = useState(post.notice);
    const [NoticeDesc, setNoticeDesc] = useState(post.desc);
    const [logedId, setlogedId] = useState(false);
    const [error, seterror] = useState(false);
    return (
        <><div className="wrapper">
            <a href={"#demo-modal" + idx}>Update</a>
            <div id={"demo-modal" + idx} className="modal">
                <div className="modal__content">
                    <div>
                        <div className=" text-white ">
                            <h1 className="pb-2 pt-4 justify-center">Add Notice</h1>
                            <div className="pb-2 pt-4 justify-center">
                                <input
                                    required
                                    onChange={e => setNoticeHeade(e.target.value)}
                                    type="text"
                                    value={NoticeHeade}
                                    placeholder="Enter Your Notice"
                                    className="block w-1/2 p-4 text-lg rounded-sm bg-black"
                                />
                            </div>
                            <div className="pb-2 pt-4 justify-center">
                                <input
                                    required
                                    onChange={e => setNoticeDesc(e.target.value)}
                                    type="passwrord"
                                    value={NoticeDesc}
                                    placeholder="Enter Your Notice Description"
                                    className="block w-1/2 p-4 text-lg rounded-sm bg-black"
                                />
                            </div>
                            <div className="px-4 pb-2 pt-4 justify-center">
                                <button type='submit' onClick={contactSubmit} style={{ "margin-top": "1rem" }} className="uppercase block w-1/4 p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none">
                                    Update
                                </button>
                            </div>
                            {error && <h1 className="pb-2 pt-4 justify-center">invalid credentials</h1>}
                        </div>
                    </div>
                    <a href="#" className="modal__close">
                        ×
                    </a>
                </div>
            </div>
        </div>
        </>
    )
}

export default EditPopUp