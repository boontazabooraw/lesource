import React from "react"

const Card = (props) => {

    

    return (
        <div className="card h-50 bg-base-100 card-md shadow-sm">
            <div className="flex flex-column justify-between card-body">
                <h2 className="card-title lg:w-100">{props.title}</h2>
                <div className="justify-end card-actions">
                    <button
                        onClick={() => window.open(props.link, '_blank')}
                        className="btn btn-primary">Download</button>
                </div>
            </div>
        </div>
    )
}

export default Card