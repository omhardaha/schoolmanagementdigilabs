import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./Notice.css"
import EditPopUp from './EditPopUp'
export default function Notice({ adminFlag }) {
    const [notices, setNotices] = useState([])
    const [gg, sgg] = useState(false)

    console.log(adminFlag);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("https://schoolwebsitehosting.herokuapp.com/api/notice/");
            await setNotices([...res.data])
            console.log(notices);
            await sgg(true)
        }
        if (notices.length <= 1) fetchPosts();
    }, [])

    const delP = async (id) => {
        console.log(id);
        const res = await axios.delete("https://schoolwebsitehosting.herokuapp.com/api/notice/" + id);
        // console.log(res.data);
        await window.location.reload()
    }

    return (
        <>
            <div className="main-container">
                <div className="heading">
                    <p className="heading__credits">
                        <a
                            className="heading__link"
                            target="_blank"
                        >
                            Notices {adminFlag && "(Admin)"}
                        </a>
                    </p>
                </div>

                <div className="cards">
                    {

                        notices.map((item,index) =>
                        (
                            <>
                                <details>
                                    <summary>{item.notice}</summary>

                                    <ul>
                                        <span>{item.desc}</span>
                                    </ul>
                                </details>


                                <div className='ccentre'>
                                    {adminFlag && <button onClick={() => delP(item._id)} className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1 px-2 border border-red-500 hover:border-transparent rounded">
                                        Delete
                                    </button>}
                                    
                                    {adminFlag && <EditPopUp idx={index} post={item}/>}
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>

        </>
    )
}
