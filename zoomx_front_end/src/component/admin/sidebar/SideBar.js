import React from 'react';
export function SideBar({ setIsPage }) {
    return (
        <>
            <ul style={{ width: '20vw', color: '#fff', backgroundColor: '#333', height: '100vh' }}>
                <li style={{cursor:'pointer'}} onClick={() => setIsPage("investment")}>Linh vuc dau tu</li>
                <li style={{cursor:'pointer'}} onClick={() => setIsPage("project")}>Du an</li>
                <li style={{cursor:'pointer'}} onClick={() => setIsPage("blog")}>Blog</li>
                <li style={{cursor:'pointer'}} onClick={() => setIsPage("recruitment")}>Tuyen dung</li>
                <li style={{cursor:'pointer'}} onClick={() => setIsPage("partner")}>Doi tac</li>
            </ul>
        </>
    )
}
