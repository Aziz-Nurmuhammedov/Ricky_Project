import React from 'react'
import Header from '../Header/Header'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../../store/counter/counterSlice'


export default function About() {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()


  return (
    <>
      <main className='about'  >
        <Header />
        <section style={{ width: "100%", height: '100%', display: "flex", justifyContent: "center", alignItems: "center" }}>
          <button onClick={() => dispatch(increment())}>
            +
          </button>
          <h1>
            {count}
          </h1>
          <button onClick={() => dispatch(decrement())}>
            -
          </button>
        </section>
      </main>

    </>
  )
}
