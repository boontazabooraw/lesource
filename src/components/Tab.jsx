import React from "react"
import Wares from "../Pages/Wares.jsx"
import Guides from "../Pages/Guides.jsx"
import About from "../Pages/About.jsx"

const Tab = () => {

    return (
        <>
            <div className="items-center justify-center tabs tabs-lift">
                <input type="radio" name="my_tabs_3" className="tab" aria-label="Wares" />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    <Wares />
                </div>

                <input type="radio" name="my_tabs_3" className="tab" aria-label="Guides" defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    <Guides />
                </div>

                <input type="radio" name="my_tabs_3" className="tab" aria-label="About" />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    <About />
                </div>
            </div>
        </>

    )
}

export default Tab