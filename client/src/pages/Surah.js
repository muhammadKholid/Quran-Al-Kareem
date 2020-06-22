import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { getAllSurah } from "../stores/actions/Action"

import List from "../components/List"

import "./Surah.css"

export default function Quran() {
  const [loading] = useState("Loading")
  // const [inputs, setInput] = useState([])
  const { allSurah } = useSelector((state) => state.Reducer)
  const dispatch = useDispatch()

  //speech to text recognation
  // const SpeechRecognition =
  //   window.SpeechRecognition || window.webkitSpeechRecognition
  // const recognition = new SpeechRecognition()
  // recognition.continuous = true

  useEffect(() => {
    dispatch(getAllSurah())
  }, [dispatch])

  // function handleClick(e) {
  //   recognition.start()
  //   recognition.onresult = (e) => {
  //     const current = e.resultIndex
  //     const transcript = e.results[current][0].transcript
  //     const upperCase = transcript.charAt(0).toUpperCase() + transcript.substring(1)

  //     setInput([...upperCase])
  //   }
  // }

  return (
    <div className="surah-container">
      <div className="container">
        <div className="list-surah">
          <div dir="rtl" className="title">
            <h4> بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْ</h4>
          </div>
          {/* testing speech recognition */}
          {/* <div> */}
          {/*   <h1>Comment Section</h1> */}
          {/*   <button onClick={handleClick}>Click to speak</button> */}
          {/*   <button onClick={() => recognition.stop()}>Click to stop</button> */}
          {/*   <div className="comment-block"> */}
          {/*     <p>{inputs}</p> */}
          {/*   </div> */}
          {/* </div> */}

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
