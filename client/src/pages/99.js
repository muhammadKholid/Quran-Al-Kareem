import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { getAsmaulHusna } from "../stores/actions/Action"

import "./99.css"

export default function AsmaulHusna() {
  const [loading] = useState("Loading")
  const { asmaulHusna } = useSelector((state) => state.Reducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAsmaulHusna())
  }, [dispatch])

  return (
    <div className="asmaul-container">
      <div className="container">
        <div className="title">
          <h2>نَسْأَلُكَ يَامَنْ هُوَ اللهُ الَّذِيْ لآَ إِلَهَ إِلّاَ هُوَ</h2>
        </div>
        <div dir="rtl" className="sub-container">
          {asmaulHusna
            ? asmaulHusna.map((el, i) => (
                <div dir="rtl" key={i} className="item">
                  <h2>
                    {el.arab}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<small>{el.urutan}</small>
                  </h2>
                  <p dir="ltr" className="latin">
                    {el.latin}
                  </p>
                  <p dir="ltr">{el.arti}</p>
                </div>
              ))
            : loading}
        </div>
      </div>
    </div>
  )
}
