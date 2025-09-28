"use client";
import Country from "./Country.jsx"

const Navbar = () => {

    return (
        <div className="navbar flex bg-transparent items-center justify-between lg:px-50">
            <button className="btn btn-ghost text-xl hover:text-base-content hover:border-none hover:bg-transparent">LeSource</button>
            <Country />
        </div>
    )

}

export default Navbar