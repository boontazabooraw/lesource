import React from "react"

const GuideModal = (props) => {
    return (
        <>
            <dialog key={props.id} id={props.id} className="modal cursor-auto">
                <div className="modal-box w-11/12 max-w-200 text-start">
                    <form method="dialog">
                        <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg text-center">
                        {props.title}
                    </h3>
                    <span dangerouslySetInnerHTML={{ __html: props.content }}></span>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>

        </>
    )
}

export default GuideModal