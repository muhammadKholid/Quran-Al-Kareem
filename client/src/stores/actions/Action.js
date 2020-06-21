import {
  GET_ALL_AYAH,
  GET_ALL_SURAH,
  GET_ONE_AYAH,
  GET_RANDOM_AYAH,
  GET_CITY_CODE,
  GET_ADZAN_SCHEDULE,
  GET_ASMAUL_HUSNA,
} from "./Types"

import asmaAllah from "../../assets/AsmaulHusna"

export const getAsmaulHusna = () => {
  return (dispatch, _) => {
    dispatch({
      type: GET_ASMAUL_HUSNA,
      payload: asmaAllah,
    })
  }
}

export const getAdzanSchedule = (cityCode = 667) => {
  return (dispatch, _) => {
    fetch(
      `https://api.banghasan.com/sholat/format/json/jadwal/kota/${cityCode}/tanggal/${
        new Date().toISOString().split("T")[0]
      }`
    )
      .then((res) => res.json())
      .then((adzanSchedule) => {
        const schedule = adzanSchedule.jadwal.data
        dispatch({
          type: GET_ADZAN_SCHEDULE,
          payload: schedule,
        })
      })
  }
}

export const getCityCode = (city) => {
  return (dispatch, _) => {
    fetch(`https://api.banghasan.com/sholat/format/json/kota/nama/${city}`)
      .then((res) => res.json())
      .then((cityCode) => {
        const code = cityCode.kota[0].id
        dispatch({
          type: GET_CITY_CODE,
          payload: code,
        })
      })
  }
}

export const getRandomAyah = () => {
  return (dispatch, _) => {
    fetch(`https://api.banghasan.com/quran/format/json/acak`)
      .then((res) => res.json())
      .then((randomAyah) => {
        const ayah = randomAyah.acak.ar.teks
        const arti = randomAyah.acak.id.teks
        const dataAyah = { ayah, arti }
        console.log(dataAyah)
        dispatch({
          type: GET_RANDOM_AYAH,
          payload: dataAyah,
        })
      })
  }
}

export const getAllAyah = (surah) => {
  return (dispatch, _) => {
    fetch(`https://al-quran-8d642.firebaseio.com/surat/${surah}.json?print=pretty`)
      .then((res) => res.json())
      .then((oneSurah) => {
        dispatch({
          type: GET_ALL_AYAH,
          payload: oneSurah,
        })
      })
  }
}

export const getAllSurah = () => {
  return (dispatch, _) => {
    fetch(`https://al-quran-8d642.firebaseio.com/data.json?print=pretty`)
      .then((res) => res.json())
      .then((allSurah) => {
        dispatch({
          type: GET_ALL_SURAH,
          payload: allSurah,
        })
      })
  }
}

export const getOneAyah = (ayah, surah) => {
  return (dispatch, _) => {
    fetch(`https://api.banghasan.com/quran/format/json/surat/${surah}/ayat/${ayah}`)
      .then((res) => res.json())
      .then((oneAyah) => {
        const ayah = oneAyah.ayat.data.ar[0].teks
        const ayahKe = oneAyah.ayat.data.ar[0].ayat
        const arti = oneAyah.ayat.data.id[0].teks
        const namaSurat = oneAyah.surat.nama
        const suratKe = oneAyah.surat.nomor
        const dataAyah = { ayah, arti, ayahKe, namaSurat, suratKe }
        console.log(dataAyah)
        dispatch({
          type: GET_ONE_AYAH,
          payload: dataAyah,
        })
      })
  }
}
