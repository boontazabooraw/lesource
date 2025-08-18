import React, { useState } from "react"
import WareCard from "../components/WareCard.jsx"
import WaresContent from "../components/content/WaresContent.jsx"


const Wares = () => {

    const [search, setSearch] = useState('')

    const searchOnChange = (event) => {
        setSearch(event.target.value.toLowerCase())
    }

    WaresContent.sort((a, b) => a.title.localeCompare(b.title))

    return (
        <>
            {/* Search Bar */}
            <div className="flex justify-center">
                <label className="input !outline-none">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
                    <input onChange={searchOnChange} type="search" value={search} />
                </label>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-3 gap-10">

                {WaresContent
                    .filter((ware) => {
                        return search === '' ? ware : ware.title.toLowerCase().includes(search)
                    })
                    .map((ware) => (
                        <WareCard
                            key={ware.title}
                            title={ware.title}
                            link={ware.link}
                        />
                    ))
                }

            </div>
        </>
    )
}

export default Wares