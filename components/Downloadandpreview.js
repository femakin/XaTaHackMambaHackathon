import React from 'react'
import Previewstyle from '../styles/Preview.module.css'

function Downloadandpreview({ onClick }) {

    return (
        <div>
            <div className="flex mt-10 justify-between ">
                <div onClick={onClick} className={Previewstyle.preview}>Download</div>

                <div className={Previewstyle.preview}>Edit</div>
            </div>

        </div>
    )
}

export default Downloadandpreview