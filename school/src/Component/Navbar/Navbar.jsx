import React, { useState } from 'react'
import axios from 'axios'
import "./Navbar.css"

export default function Navbar() {

    return (
        <>
            <nav className="navMenu">
                <a href="/">Home</a>
                <a href="/gallery">Gallery</a>
                <a href="/admin">AdminPanel</a>
                <a href="/contact">Contact us</a>
                <a href="/contactreq">Contact Req (Admin)</a>
            </nav>

        </>
    )
}
