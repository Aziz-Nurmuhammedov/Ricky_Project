import React from 'react'
import Header from '../Header/Header'

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <div className="main-container">
                    <div className="text">
                        <h2>
                            Ricky and <span>Morty </span> ga hush kelibsiz
                        </h2>
                        <p>Dasturdan foydalanish uchun Ruyhattan o'ting</p>
                    </div>
                </div>
            </main>
        </>
    )
}
