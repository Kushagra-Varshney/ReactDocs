import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Homepage() {
    return (
        <>
            <div>Homepage</div>
            <Outlet />
        </>
    )
}
