import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { getAllSurah } from "../stores/actions/Action"

import "./Surah.css"

export default function Quran() {
  const [loading] = useState("Loading")
  const { allSurah } = useSelector((state) => state.Reducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllSurah())
  }, [dispatch])

  return (
    <div className="surah-container">
      <div className="container">
        <div className="list-surah">
          <div dir="rtl" className="title">
            <h4> بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْ</h4>
          </div>
          <div dir="rtl" className="head-table">
            <h4>No</h4>
            <h4>Surat</h4>
            <h4>Arti</h4>
            <h4>Ayat</h4>
            <h4>Tipe</h4>
          </div>
          {allSurah
            ? allSurah.map((el, i) => (
                <Link to="/surah/quran">
                  <div dir="rtl" className="surah">
                    <h4 className="nomor">{el.nomor}</h4>
                    <h4>{el.asma}</h4>
                    <h4 className="nomor">{el.arti}</h4>
                    <h4 className="nomor">{el.ayat}</h4>
                    <h4 className="nomor">{el.type}</h4>
                  </div>
                </Link>
              ))
            : loading}
        </div>
      </div>
    </div>
  )
}
