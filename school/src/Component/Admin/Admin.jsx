import React, { useState } from 'react'
import axios from 'axios'
import "./Admin.css"
import Gallery from '../Gallery/Gallery'
import Notice from '../Notice/Notice'

export default function Admin() {
    const contactSubmit = async () => {
        try {
            
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ notice: NoticeHeade, desc: NoticeDesc })
            };
            const response = await fetch('https://schoolwebsitehosting.herokuapp.com/api/notice/', requestOptions);
            const data = await response.json();
            console.log(data);
            await window.location.reload()
        } catch (error) {
            console.log(error);
            seterror(true)
        }
    }
    const [NoticeHeade, setNoticeHeade] = useState("");
    const [NoticeDesc, setNoticeDesc] = useState("");
    const [logedId, setlogedId] = useState(false);
    const [error, seterror] = useState(false);
    return (
        <>
            <div className=" text-white ">
                <h1 className="pb-2 pt-4 justify-center">Add Notice</h1>
                <div className="pb-2 pt-4 justify-center">
                    <input
                        required
                        onChange={e => setNoticeHeade(e.target.value)}
                        type="text"
                        placeholder="Enter Your Notice"
                        className="block w-1/2 p-4 text-lg rounded-sm bg-black"
                    />
                </div>
                <div className="pb-2 pt-4 justify-center">
                    <input
                        required
                        onChange={e => setNoticeDesc(e.target.value)}
                        type="passwrord"
                        placeholder="Enter Your Notice Description"
                        className="block w-1/2 p-4 text-lg rounded-sm bg-black"
                    />
                </div>
                <div className="px-4 pb-2 pt-4 justify-center">
                    <button type='submit' onClick={contactSubmit} style={{ "margin-top": "1rem" }} className="uppercase block w-1/4 p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none">
                        Submit
                    </button>
                </div>
                {error && <h1 className="pb-2 pt-4 justify-center">invalid credentials</h1>}
            </div>
            <Notice adminFlag={true} />
            <Gallery deleteIcon={true} />
        </>
    )
}
