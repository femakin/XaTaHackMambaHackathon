import React, { useEffect, useState } from 'react'
import Previewstyle from '../styles/Preview.module.css'
import { useRouter } from 'next/router'


function Downloadandpreview({ onClick }) {
    const router = useRouter()
    const [alldata, setAlldata] = useState()


    useEffect(() => {


        JSON.parse(localStorage?.getItem('user_id')) === '' ||
            JSON.parse(localStorage?.getItem('user_id')) === undefined ||
            JSON.parse(localStorage?.getItem('user_id')) === null ||
            JSON.parse(localStorage?.getItem('user_id')) === '{}'
            ? router.push('/')
            : router.push('/preview')

        fetch('/api/fetchall', {
            headers: { 'Content-Type': 'application/json' },
            method: 'GET',
        })
            .then((response) => response.json())
            .then((response) => {
                let newObjectuser = JSON.parse(localStorage.getItem('user_id'))
                setAlldata(
                    response?.filter((x) => x?.unique_id === newObjectuser.unique_id),
                )

            })
            .catch((err) => console.error(err))
    }, [])

    return (
        <div>
            <div className="flex mt-10 justify-between ">
                <div onClick={onClick} className={Previewstyle.preview}>
                    Download
                </div>


                <div
                    onClick={() =>
                        router.push({
                            pathname: '/edit',
                            query: {
                                userdata: {
                                    data: alldata[0],
                                },

                                useravailabledata: `${alldata}`,
                            },
                        })
                    }
                    className={Previewstyle.preview}
                >
                    Edit
                </div>
            </div>
        </div>
    )
}

export default Downloadandpreview
