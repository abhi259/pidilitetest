"use client"

import Image from "next/image"
import { Inter } from "next/font/google"
import axios from "axios"
import { useEffect, useState } from "react"
import { SearchSuggestion } from "./components/SearchSuggestion"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  const [data, setData] = useState([])
  const [input, setInput] = useState("")
  const [filteredData, setFilteredData] = useState([])

  const getData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
    setData(res.data)
  }

  const handleInput = (e) => {
    setInput(e.target.value)

    const suggestionData = data.filter((item) => {
      return item.title.includes(e.target.value)
    })

    if (e.target.value.length > 0) {
      setFilteredData(suggestionData)
    } else {
      setFilteredData([])
    }
  }

  useEffect(() => {
    getData()
  }, [])
  // console.log(data)

  return (
    <div className="min-h-screen flex justify-center items-center  flex-col">
      <div className="flex flex-col justify-center items-center relative ">
        <input
          className={`text-black outline-none w-[500px] h-12  p-2 px-5  ${filteredData.length > 0 ? 'rounded-t-2xl' : "rounded-2xl"}  ` }
          type="string"
          onChange={handleInput}
          value={input}
          placeholder="Search Title"
        />
        <div className="absolute top-12 ">
          <SearchSuggestion filteredData={filteredData} />
        </div>
      </div>
    </div>
  )
}
