import { useEffect } from "react";
import Cards from "../components/Card";
import useBlogCall from "../hooks/useBlogCalls";
import { useSelector } from "react-redux";


const Home = () => {
  const { getBlogs } = useBlogCall()
  useEffect(() => {
    getBlogs()
  }, [])
  const {blogs} = useSelector((state)=> state.blogs)
  console.log(blogs);
  return (
    <div>
      {blogs.map((item, index)=>(<Cards key={index} item={item}/>)
      )}
      
    </div>
  )
}

export default Home;