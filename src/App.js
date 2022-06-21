import './App.css'
import Header from "./Components/Header"
import React from "react"
import { Routes, Route } from "react-router-dom"
import Search from "./Components/Search"
import Watchlist from "./Components/Watchlist"

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Search />}>
        </Route>
        <Route path="/watchlist" element={<Watchlist />}>
        </Route>
      </Routes>
    </>
  )
}

export default App
