import React, { useState, useEffect, createRef } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { getAllAyah } from "../stores/actions/Action"

import "./Quran.css"

export default function Quran() {
  const { quran } = useParams()
  const [loading] = useState("Loading")
  const { allAyah, allSurah } = useSelector((state) => state.Reducer)
  const dispatch = useDispatch()
  const myRef = createRef()

  const quranAudio = allSurah.filter((audioData) => {
    return Number(audioData.nomor) === Number(quran)
  })

  useEffect(() => {
    dispatch(getAllAyah(quran))
  }, [quran, dispatch])

  return (
    <div className="quran-container">
      <div className="container">
        <div className="ayah">
          <div className="audio">
            <audio ref={myRef} src={quranAudio[0].audio} controls />
          </div>
          {allAyah
            ? allAyah.map((el, i) => (
                <div key={i} className="per-ayah">
                  <h4 dir="rtl" className="arab">
                    {el.ar}
                    &nbsp;<small>{i + 1}</small>
                  </h4>
                  <h4>{el.id}</h4>
                </div>
              ))
            : loading}
        </div>
      </div>
    </div>
  )
}
