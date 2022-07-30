import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./ContactUs.css"


export default function ContactUs() {

    const [dataD, setdataD] = useState([{ link: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" }]);
    const [pp, setpp] = useState(false);
    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("https://schoolwebsitehosting.herokuapp.com/api/contact/");
            console.log(res.data);
            await setdataD(res.data)
            if (res.data && pp === false) {
                setpp(true)
            }
            // await console.log(res.data);
        }
        if (dataD.length <= 1) fetchPosts();
    }, [pp])

    return (
        <>
            {
                dataD.map((item) => (<div className="border my-3 content-center max-w-sm rounded overflow-hidden shadow-lg">
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Name - {item.name}</div>
                        <div className="font-bold text-xl mb-2">Email - {item.email}</div>
                        <div className="font-bold text-xl mb-2">Number - {item.number}</div>
                        <div className="font-bold text-xl mb-2">Message - {item.message}</div>
                        <div className="font-bold text-xl mb-2">Name - {item.name}</div>

                    </div>
                </div>))
            }


        </>
    )
}
