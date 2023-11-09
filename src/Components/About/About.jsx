import React from 'react'
import Header from '../Header/Header'
export default function About() {
  return (
    <>
      <main className='about'  >
        <Header />
        <section style={{ width: "100%", height: '100%', display: "flex", justifyContent: "center", alignItems: "center" }}>

          <button>
            +
          </button>
          <h1>
            0
          </h1>
          <button>
            -
          </button>
        </section>
      </main>

    </>
  )
}
