import React, { useContext, useEffect, useState } from 'react'
import Previewstyle from '../styles/Preview.module.css'
import { useRouter } from 'next/router'
import { signupContext } from '../context/signupContext'
import { GlobalContext } from '../context/globalContext'

function Downloadandpreview({ onClick }) {
    const router = useRouter()
    const [alldata, setAlldata] = useState()
    const { user, setUser, loggedinuser, setLoggedinuser } = useContext(GlobalContext)
    const { signupid, setsignupid } = useContext(signupContext)


    useEffect(() => {



        console.log(JSON.parse(localStorage.getItem('user_details')))

        console.log(user, 'user')
        console.log(signupid, 'signupid')
        // console.log(newObjectuser)



        JSON.parse(localStorage?.getItem('user_id')) === '' ||
            JSON.parse(localStorage?.getItem('user_id')) === undefined ||
            JSON.parse(localStorage?.getItem('user_id')) === null ||
            JSON.parse(localStorage?.getItem('user_id')) === '{}'
            ? router.push('/')
            : router.push('/edit')




        fetch('/api/fetchall', {
            headers: { 'Content-Type': 'application/json' },
            method: 'GET',
        })
            .then((response) => response.json())
            .then((response) => {
                console.log(response, 'response allllll from download page')
                let newObjectuser = JSON.parse(localStorage.getItem('user_id'))
                setAlldata(
                    response?.filter((x) => x?.unique_id === newObjectuser.unique_id),
                )
                setLoading(true)
            })
            .catch((err) => console.error(err))
    }, []);




    return (
        <div>
            <div className="flex mt-10 justify-between ">

                {
                    console.log(alldata, 'alldata')
                }

                <div onClick={onClick} className={Previewstyle.preview}>Download</div>

                <div onClick={() => router.push({
                    pathname: '/edit',
                    query: {
                        userdata: {


                            data: alldata[0]
                        }

                        ,
                        useravailabledata: `${alldata}`
                    }




                })} className={Previewstyle.preview}>Edit</div>
            </div>

        </div>
    )
}

export default Downloadandpreview