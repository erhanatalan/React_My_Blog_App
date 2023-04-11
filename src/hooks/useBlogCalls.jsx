import axios from "axios"
import {
  fetchFail,
  fetchStart,
  blogSuccess,
  postLike,
} from "../features/blogSlice"

import { useDispatch } from "react-redux"
// import { useNavigate } from "react-router-dom"
// import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify"

const useBlogCall = () => {
  const dispatch = useDispatch()
//   const navigate = useNavigate()

  const BASE_URL = "https://32226.fullstack.clarusway.com/"

  const getBlogs = async () => {
    dispatch(fetchStart())
    try {
      const { data } = await axios.get(
        `${BASE_URL}api/blogs/`
      )
      dispatch(blogSuccess(data))
      // console.log(data)
    } catch (error) {
      dispatch(fetchFail())
      console.log(error)
    //   toastErrorNotify("error!!!")
    }
  }
  const postLikes = async (id) => {
    dispatch(fetchStart())
    try {
      const { data } = await axios.post(
        `${BASE_URL}api/likes/${id}/`, id
      )
      dispatch(postLike(data))
      // console.log(data)
    } catch (error) {
      dispatch(fetchFail())
      console.log(error)
    //   toastErrorNotify("error!!!")
    }
  }

  return { getBlogs, postLikes}
}

export default useBlogCall