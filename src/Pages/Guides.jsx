import { React, useState } from "react"
import GuideItem from "../components/GuideItem"
import GuidesContent from "../components/content/GuidesContent"

const Guides = () => {


    const [search, setSearch] = useState('')

    const searchOnChange = (event) => {
        setSearch(event.target.value.toLowerCase())
    }


    return (
        <div className="place-items-center">
            {/* Search Bar */}
            <label className="input mb-5 !outline-none">
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
                <input onChange={searchOnChange} type="search" value={search} />
            </label>
            <div className="flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 lg:gap-7 lg:grid-cols-3">
                    {
                        GuidesContent
                            .filter((guide) => {
                                return search === '' ? guide : guide.title.toLowerCase().includes(search)
                            })
                            .map((guide) => {
                                return (
                                    <GuideItem
                                        key={guide.title}
                                        title={guide.title}
                                        id={guide.id}
                                        content={guide.content}
                                    />
                                )
                            })
                        // Array.from({ length: GuidesContent.length })
                        //     .map((__item, i) => (
                        //         <GuideItem
                        //             key={GuidesContent[i].id}
                        //             title={GuidesContent[i].title}
                        //             id={GuidesContent[i].id}
                        //             content={GuidesContent[i].content}
                        //         />
                        //     ))


                    }
                </div>
            </div>
        </div>

    )
}

export default Guides