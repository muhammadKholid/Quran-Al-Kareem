import React, { useState } from "react"
import { useSelector } from "react-redux"

import "./Search.css"

export default function Search() {
  const [loading] = useState("Loading")
  const { oneAyah } = useSelector((state) => state.Reducer)

  return (
    <div className="search-page">
      <div className="container">
        {oneAyah ? (
          <div className="content">
            <div className="question">
              <p>
                Hasil pencarian QS {oneAyah.suratKe}:{oneAyah.ayahKe}, surat{" "}
                {oneAyah.namaSurat} :
              </p>
            </div>
            <h2 dir="rtl" className="search-result ayat">
              {oneAyah.ayah}
              &nbsp;&nbsp;<small>{oneAyah.ayahKe}</small>
            </h2>
            <h2 className="search-result">{oneAyah.arti}</h2>
          </div>
        ) : (
          loading
        )}
      </div>
    </div>
  )
}
