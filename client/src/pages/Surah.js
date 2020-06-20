import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { getAllSurah } from "../stores/actions/Action"

import List from "../components/List"

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
            <h4>Latin</h4>
            <h4>Arti</h4>
            <h4>Ayat</h4>
            <h4>Tipe</h4>
          </div>
          {allSurah
            ? allSurah.map((el, i) => (
                <List
                  key={i}
                  nomor={el.nomor}
                  surat={el.asma}
                  nama={el.nama}
                  arti={el.arti}
                  ayat={el.ayat}
                  tipe={el.type}
                />
              ))
            : loading}
        </div>
      </div>
    </div>
  )
}
