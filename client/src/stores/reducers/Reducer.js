import {
  GET_ALL_AYAH,
  GET_ALL_SURAH,
  GET_ONE_AYAH,
  GET_RANDOM_AYAH,
  GET_CITY_CODE,
  GET_ADZAN_SCHEDULE,
} from '../actions/Types';

const initialState = {
  allSurah: [],
  allAyah: [],
  oneAyah: null,
  randomAyah: null,
  cityCode: null,
  adzanSchedule: null,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_SURAH:
      return { ...state, allSurah: action.payload };

    case GET_ALL_AYAH:
      return { ...state, allAyah: action.payload };

    case GET_ONE_AYAH:
      return { ...state, oneAyah: action.payload };

    case GET_RANDOM_AYAH:
      return { ...state, randomAyah: action.payload };

    case GET_CITY_CODE:
      return { ...state, cityCode: action.payload };

    case GET_ADZAN_SCHEDULE:
      return { ...state, adzanSchedule: action.payload };

    default:
  }
};

export default reducers;
