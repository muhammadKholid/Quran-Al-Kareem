import {
  GET_ALL_AYAH,
  GET_ALL_SURAH,
  GET_ONE_AYAH,
  GET_RANDOM_AYAH,
  GET_CITY_CODE,
  GET_ADZAN_SCHEDULE,
} from "./Types"

export const getAdzanSchedule = (cityCode) => {
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
        const code = cityCode.kota.id
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
        const arti = oneAyah.ayat.data.id[0].teks
        const dataAyah = { ayah, arti }
        console.log(dataAyah)
        dispatch({
          type: GET_ONE_AYAH,
          payload: dataAyah,
        })
      })
  }
}
