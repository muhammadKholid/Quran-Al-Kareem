import React from "react"
import { Link } from "react-router-dom"

import "../pages/Surah.css"

export default function List(props) {
  return (
    <Link to={`/surah/${props.nomor}`}>
      <div dir="rtl" className="surah">
        <h4 className="nomor">{props.nomor}</h4>
        <h4>{props.surat}</h4>
        <h4>{props.nama}</h4>
        <h4 className="nomor">{props.arti}</h4>
        <h4 className="nomor">{props.ayat}</h4>
        <h4 className="nomor">{props.tipe}</h4>
      </div>
    </Link>
  )
}
