import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { getAllAyah } from "../stores/actions/Action"

import "./Quran.css"

export default function Quran() {
  const { quran } = useParams()
  const [loading] = useState("Loading")
  const { allAyah } = useSelector((state) => state.Reducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllAyah(quran))
  }, [quran, dispatch])

  return (
    <div className="quran-container">
      <div className="container">
        <div className="ayah">
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
