import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { getAdzanSchedule, getAsmaulHusna } from "../stores/actions/Action"

import "./Home.css"

import kitab from "../assets/reading-quran-nigth-ramadhan-illustration_19181-27.jpg"
import asmaul from "../assets/Islamic_Wall_Decal_Art_of_Surah_Ikhlas_in_Square_Kufic__17267.1440393611.300.300.jpg"

export default function Home() {
  const [loading] = useState("loading")
  const [rundomNumber, setRundomNumber] = useState(0)
  const dispatch = useDispatch()
  const { adzanSchedule, asmaulHusna } = useSelector((state) => state.Reducer)

  function getNumber() {
    const generateNumber = Math.floor(Math.random() * 99)
    return generateNumber
  }

  function calledOnce() {
    dispatch(getAsmaulHusna())
    dispatch(getAdzanSchedule())
    setRundomNumber(getNumber())
  }

  useEffect(() => {
    calledOnce()
  }, [asmaulHusna])

  return (
    <div className="App">
      <div className="container">
        <div className="sub-container">
          <div className="header">
            <div className="adzanSchedule">
              <div className="schedule">
                <h2>{adzanSchedule ? adzanSchedule.subuh : loading}</h2>
                <p>Subuh</p>
              </div>
              <div className="schedule">
                <h2>{adzanSchedule ? adzanSchedule.dzuhur : loading}</h2>
                <p>Dzuhur</p>
              </div>
              <div className="schedule">
                <h2>{adzanSchedule ? adzanSchedule.ashar : loading}</h2>
                <p>Ashar</p>
              </div>
              <div className="schedule">
                <h2>{adzanSchedule ? adzanSchedule.maghrib : loading}</h2>
                <p>Maghrib</p>
              </div>
              <div className="schedule">
                <h2>{adzanSchedule ? adzanSchedule.isya : loading}</h2>
                <p>Isya</p>
              </div>
            </div>
            <div className="header-title">
              <h2>Islamic Center</h2>
            </div>
            {asmaulHusna[rundomNumber] ? (
              <div className="random">
                <h2 dir="rlt">{asmaulHusna[rundomNumber].arab}</h2>
                <p className="mean">{asmaulHusna[rundomNumber].arti}</p>
              </div>
            ) : (
              loading
            )}
          </div>
        </div>
        <div className="row">
          <div className="navigation">
            <div className="item">
              <img src={asmaul} alt="Al Quran" />
              <div className="item-title">
                <Link to="/asmaul-husna">
                  <h4>Asmaul Husna</h4>
                </Link>
              </div>
            </div>
            <div className="item">
              <img src={kitab} alt="asmaul husna" />
              <div className="item-title">
                <Link to="/surah">
                  <h4>Al-Quran</h4>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
