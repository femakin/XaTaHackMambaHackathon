import React from 'react'
import Previewstyle from '../styles/Preview.module.css'
import { useRouter } from 'next/router'

function Downloadandpreview({ onClick }) {
    const router = useRouter()

    return (
        <div>
            <div className="flex mt-10 justify-between ">
                <div onClick={onClick} className={Previewstyle.preview}>Download</div>

                <div onClick={() => router.push('/stepone')} className={Previewstyle.preview}>Edit</div>
            </div>

        </div>
    )
}

export default Downloadandpreview