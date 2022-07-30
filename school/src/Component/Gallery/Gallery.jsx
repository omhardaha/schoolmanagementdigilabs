import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./Gallery.css"
export default function Gallery({ deleteIcon }) {

    const [file, setFile] = useState(null)

    const uploadPic = async (media) => {
        try {
            const form = new FormData();
            form.append("file", media);
            form.append("upload_preset", "social_media_app");
            form.append("cloud_name", "dkihap7de");
            const res = await axios.post("https://api.cloudinary.com/v1_1/dkihap7de/image/upload", form);
            return res.data.url;
        } catch (error) {
            return;
        }
    };

    const [photos, setPhotos] = useState([{ link: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921" }]);
    const [pp, setpp] = useState(false);
    const [upload, setupload] = useState(false);



    const deletePosts = async (e) => {
        console.log(e.target.name);
        const res = await axios.delete("https://schoolwebsitehosting.herokuapp.com/api/gallery/", { link: e.target.name });
        await setPhotos(photos.filter(item => item.link !== e.target.name));
        console.log(res.data);
    }

    const addFile = async (e) => {
        setupload(true)

        console.log(e.target.files[0]);
        const link = await uploadPic(e.target.files[0]);
        console.log(link);
        if (!link) return

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ link: link })
        };
        const response = await fetch('https://schoolwebsitehosting.herokuapp.com/api/gallery/', requestOptions);
        const data = await response.json();
        console.log(data);
        setPhotos((prev) => [...prev, data])
        await setupload(false)

    }

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get("https://schoolwebsitehosting.herokuapp.com/api/gallery/");
            console.log(res.data);
            await setPhotos(res.data)
            if (res.data && pp === false) {
                setpp(true)
            }
            // await console.log(res.data);
        }
        if (photos.length <= 1) fetchPosts();
    }, [pp])

    return (
        <>
            <h1 className='gaH1'>Gallery {deleteIcon && "(Admin)"} </h1>
            <div className=''>

                <ul className="grid">
                    {deleteIcon && <li className='center'>
                        <label htmlFor="fileInput" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" >

                            {(upload) ? "Uploading" : "Add Image"}
                        </label>
                        <input type="file" id="fileInput" className="fileInput" onChange={async (e) => { setFile(e.target.files[0]); await addFile(e) }} />
                    </li>}

                    {
                        photos.map((photoItem) =>
                        (<li className='ccentre'>
                            <figure className="grid__figure">
                                <img className={!deleteIcon && 'grid__figureimg'} src={photoItem.link} alt="" />
                            </figure>
                            {deleteIcon && <button onClick={deletePosts} name={photoItem.link} className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-1 px-2 border border-red-500 hover:border-transparent rounded">
                                Delete
                            </button>}
                        </li>)
                        )
                    }

                </ul>
            </div>
        </>
    )
}
