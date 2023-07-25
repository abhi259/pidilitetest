import React from "react"

export const SearchSuggestion = ({ filteredData }) => {
  console.log(filteredData)

  return (
    <div className="w-[500px]  bg-white text-black max-h-[500px] overflow-auto scroll rounded-b-2xl ">
      {filteredData.map((item, index) => {
        let length = filteredData.length

        return (
          <div
            key={item.id}
            className={`hover:bg-[#adadad] transition duration-300 delay-75  p-3 ${
              index === length ? "rounded-b-2xl " : "rounded-none"
            }  `}
          >
            <h1>{item.title}</h1>
          </div>
        )
      })}
    </div>
  )
}
