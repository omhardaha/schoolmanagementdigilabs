import React, { useState } from 'react'
import axios from 'axios'
import "./ContactUs.css"


export default function ContactUs() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);
    const [send, setSend] = useState(false);

    const contactSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
            const res = await axios.post("https://schoolwebsitehosting.herokuapp.com/api/contact/", { name, email, message, number });
            // res.data && window.location.replace("/login")
            setSend(true)
            res.data && window.location.replace("/")
            console.log(res.data);
        } catch (error) {
            setError(true)
            console.log(error);
        }
    }

    return (
        <>
            <section className="justify-center min-h-screen flex items-stretch text-white">

                <div
                    className=" lg:w-1/2 w-full flex  items-center justify-center text-center md:px-16 px-0 z-0"

                >
                    <div className="w-full py-6 z-20">
                        <h1 className="my-6 LoginPagelogo" >
                            Contact Us
                        </h1>
                        <form action="" className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
                            <div className="pb-2 pt-4">
                                <input
                                    required
                                    onChange={e => setName(e.target.value)}
                                    type="text"
                                    placeholder="Enter Your Name"
                                    className="block w-full p-4 text-lg rounded-sm bg-black"
                                />
                            </div>
                            <div className="pb-2 pt-4">
                                <input
                                    required
                                    onChange={e => setEmail(e.target.value)}
                                    type="email"
                                    placeholder="Enter Your Email"
                                    className="block w-full p-4 text-lg rounded-sm bg-black"
                                />
                            </div>
                            <div className="pb-2 pt-4">
                                <input
                                    required
                                    onChange={e => setNumber(e.target.value)}
                                    type="number"
                                    placeholder="Enter Your Contact Number"
                                    className="appearance-none block w-full p-4 text-lg rounded-sm bg-black"
                                />
                            </div>
                            <div className="pb-2 pt-4">
                                <input
                                    required
                                    onChange={e => setMessage(e.target.value)}
                                    className="block w-full p-4 text-lg rounded-sm bg-black"
                                    type="text"
                                    placeholder="Enter Your Message"
                                />
                            </div>
                            <div className="px-4 pb-2 pt-4">
                                {(error && <span>
                                    Your Message Sended We will contact you As Soon As Possible
                                </span>)}
                                {(send && <span>
                                    Your Message Sended We will contact you As Soon As Possible
                                </span>)}
                                <button onClick={contactSubmit} style={{ "margin-top": "1rem" }} className="uppercase block w-full p-4 text-lg rounded-full bg-indigo-500 hover:bg-indigo-600 focus:outline-none">
                                    Submit
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}
