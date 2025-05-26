import React from "react"
import GuideModal from "./GuideModal"

const GuideItem = (props) => {
    return (
        <>
            <button
                className="btn py-20 lg:text-xl"
                onClick={() => document.getElementById(props.id).showModal()}
            >
                {props.title}
                <GuideModal
                    key={props.id}
                    id={props.id}
                    title={props.title}
                    content={props.content} />
            </button>

        </>
    )

}

export default GuideItem