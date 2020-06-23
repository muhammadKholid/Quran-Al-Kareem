import React from "react"
import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

import "../pages/Surah.css"

export default function List(props) {
  // const myRef = createRef()
  return (
    <div className="surah">
      <div className="per-surah">
        <h4 className="nomor">Surat ke : {props.nomor}</h4>
        <h4>{props.surat}</h4>
        <h4 className="nomor">Surat : {props.nama}</h4>
        <h4 className="nomor">Arti : {props.arti}</h4>
        <h4 className="nomor">Jumlah Ayat : {props.ayat}</h4>
        <h4 className="nomor">Diturunkan di : {props.tipe}</h4>
      </div>
      <div className="audio">
        <Link to={`/surah/${props.nomor}`}>
          <FontAwesomeIcon icon={faArrowRight} className="icon" />
        </Link>
      </div>
    </div>
  )
}
