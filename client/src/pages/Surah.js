import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { getAllSurah } from "../stores/actions/Action"

import List from "../components/List"

import "./Surah.css"

export default function Quran() {
  const [loading] = useState("Loading")
  const [input, setInput] = useState("")
  // const [inputs, setInput] = useState([])
  const { allSurah } = useSelector((state) => state.Reducer)
  const dispatch = useDispatch()
  const searchResults = !input
    ? allSurah
    : allSurah.filter((surah) => {
        return surah.nama.toLowerCase().includes(input.toLowerCase())
      })

  //speech to text recognation
  // const SpeechRecognition =
  //   window.SpeechRecognition || window.webkitSpeechRecognition
  // const recognition = new SpeechRecognition()
  // recognition.continuous = true

  useEffect(() => {
    dispatch(getAllSurah())
  }, [dispatch])

  function findSurah(e) {
    const input = e.target.value
    setInput(input)
  }

  // function handleClick(e) {
  //   recognition.start()
  //   recognition.onresult = (e) => {
  //     const current = e.resultIndex
  //     const transcript = e.results[current][0].transcript
  //     const upperCase = transcript.charAt(0).toUpperCase() + transcript.substring(1)

  //     setInput([...upperCase])
  //   }
  // }
  //

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

          <div className="head-table">
            <input
              type="text"
              placeholder="Hari ini mau membaca surat apa?"
              onChange={findSurah}
            />
          </div>
          {searchResults ? (
            searchResults.map((el, i) => (
              <List
                key={i}
                nomor={el.nomor}
                surat={el.asma}
                nama={el.nama}
                arti={el.arti}
                ayat={el.ayat}
                tipe={el.type}
                audio={el.audio}
              />
            ))
          ) : (
            <div className="loader">loading</div>
          )}
        </div>
      </div>
    </div>
  )
}
