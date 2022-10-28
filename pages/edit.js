import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { set, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import Header from '../components/Header'
import Home from '../styles/Home.module.css'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useNavigate } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
// import { BasicInfoProvider, useBasicInfoContext } from './basicInfo'
import { useReducer } from 'react'
import { GlobalContext } from '../context/globalContext'
import Nav from '../components/Nav'
import { signupContext } from '../context/signupContext'
import { BsTypeH1 } from 'react-icons/bs'


function Edit() {
    const schema = yup.object().shape({
        email: yup.string().email().required('Email is required'),
    })

    const { user, setUser, loggedinuser, setLoggedinuser } = useContext(GlobalContext)
    const { newObjectuser, setnewObjectuser } = useContext(signupContext)
    const [signnedin, setSigneedIn] = useState(false)
    const [alldata, setAlldata] = useState([])


    const router = useRouter()
    //   const navigate = useNavigate()
    const {
        control,
        getValues,
        setValue,
        trigger,
        register,
        reset,
        watch,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'all',
    })

    const generateRandom = (length) => {
        var result = ''
        var characters =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        var charactersLength = characters.length
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength))
        }
        return result
    }

    // const PreviewPage = (data) => {
    //   return (
    //     <Link
    //       href={{
    //         pathname: '/preview',
    //         query: { slug: data },
    //       }}
    //     />
    //   )
    // }

    const onSubmit = async (data) => {
        // setUser(() => {
        //   return data
        // })


        console.log(alldata[0], 'alldata')

        let UniqueId = JSON.parse(localStorage?.getItem('user_id'))
        reset({
            resumelink: '',
        })

        if (
            data.MyImage[0].name != '' &&
            data.email !== ' ' &&
            data.address !== ' ' &&
            data.full_name !== ' ' &&
            data.phonenumber !== ' ' &&
            data.role !== ' '
        ) {

            const fileName = generateRandom(4)
            var formdata = new FormData()
            formdata.append('file', data.MyImage[0], '[PROXY]')
            formdata.append('upload_preset', 'ml_default')
            formdata.append('public_id', `${fileName}`)
            formdata.append('api_key', `${process.env.REACT_APP_CLOUDINARY_API_KEY}`)

            var requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'follow',
            }

            fetch(
                'https://api.cloudinary.com/v1_1/femakin/image/upload',
                requestOptions,
            )
                .then(async (response) => {
                    return await response.json()
                })
                .then(async (result) => {
                    console.log(result, 'result   from step one')
                    console.log(loggedinuser, 'loggedinuser')
                    console.log(newObjectuser, 'newObjectuser')





                    if (result?.secure_url !== ' ') {


                        router.push({
                            pathname: '/afteredit',
                            query: {
                                ...data, steponedata: {


                                    Full_name: `${alldata.full_name}`,
                                    Email: `${data.email}`,
                                    Role: `${data.role}`,
                                    Phone_number: `${data.phonenumber}`,
                                    Address: `${data.address}`,
                                    Profile_Photo_Url: `${result.secure_url}`,
                                    Public_id: `${result.public_id}`,
                                    unique_id: `${newObjectuser?.unique_id === undefined || newObjectuser?.unique_id === null ? UniqueId?.unique_id : newObjectuser?.unique_id}`,

                                },
                                img_url: `${result.secure_url}`,
                                unique_id: `${newObjectuser?.unique_id === undefined || newObjectuser?.unique_id === null ? UniqueId?.unique_id : newObjectuser?.unique_id}`,
                                profile_phot_public_id: `${result.public_id}`,
                            },
                        })


                        console.log(
                            {
                                ...data, steponedata: {


                                    Full_name: `${alldata[0].full_name}`,
                                    Email: `${data.email}`,
                                    Role: `${data.role}`,
                                    Phone_number: `${data.phonenumber}`,
                                    Address: `${data.address}`,
                                    Profile_Photo_Url: `${result.secure_url}`,
                                    Public_id: `${result.public_id}`,
                                    unique_id: `${newObjectuser?.unique_id === undefined || newObjectuser?.unique_id === null ? UniqueId?.unique_id : newObjectuser?.unique_id}`,

                                },
                                img_url: `${result.secure_url}`,
                                unique_id: `${newObjectuser?.unique_id === undefined || newObjectuser?.unique_id === null ? UniqueId?.unique_id : newObjectuser?.unique_id}`,
                                profile_phot_public_id: `${result.public_id}`,
                            },
                        )


                        // setUser(() => {
                        //     return {
                        //         Full_name: `${data.full_name}`,
                        //         Email: `${data.email}`,
                        //         Role: `${data.role}`,
                        //         Phone_number: `${data.phonenumber}`,
                        //         Address: `${data.address}`,
                        //         Profile_Photo_Url: `${result.secure_url}`,
                        //         Public_id: `${result.public_id}`,
                        //         unique_id: `${newObjectuser?.unique_id === undefined || newObjectuser?.unique_id === null ? UniqueId?.unique_id : newObjectuser?.unique_id}`,
                        //     }
                        // })

                        // localStorage.setItem('user_details',

                        //     JSON.stringify({
                        //         Full_name: `${data.full_name}`,
                        //         Email: `${data.email}`,
                        //         Role: `${data.role}`,
                        //         Phone_number: `${data.phonenumber}`,
                        //         Address: `${data.address}`,
                        //         Profile_Photo_Url: `${result.secure_url}`,
                        //         Public_id: `${result.public_id}`,
                        //         unique_id: `${newObjectuser?.unique_id === undefined || newObjectuser?.unique_id === null ? UniqueId?.unique_id : newObjectuser?.unique_id}`,
                        //     })
                        // )

                        // localStorage.setItem('user_id',

                        //     JSON.stringify({
                        //         unique_id: newObjectuser.unique_id
                        //     })
                        // )


                        // await


                        // router.push({
                        //     pathname: '/afteredit',
                        //     // query: {
                        //     //     ...data, steponedata: {


                        //     //         Full_name: `${data.full_name}`,
                        //     //         Email: `${data.email}`,
                        //     //         Role: `${data.role}`,
                        //     //         Phone_number: `${data.phonenumber}`,
                        //     //         Address: `${data.address}`,
                        //     //         Profile_Photo_Url: `${result.secure_url}`,
                        //     //         Public_id: `${result.public_id}`,
                        //     //         unique_id: `${newObjectuser?.unique_id === undefined || newObjectuser?.unique_id === null ? UniqueId?.unique_id : newObjectuser?.unique_id}`,

                        //     //     },
                        //     //     img_url: `${result.secure_url}`,
                        //     //     unique_id: `${newObjectuser?.unique_id === undefined || newObjectuser?.unique_id === null ? UniqueId?.unique_id : newObjectuser?.unique_id}`,
                        //     //     profile_phot_public_id: `${result.public_id}`,
                        //     // },
                        // })


                        // console.log(
                        //   JSON.stringify({
                        //     Full_name: `${data.full_name}`,
                        //     Email: `${data.email}`,
                        //     Role: `${data.role}`,
                        //     Phone_number: `${data.phonenumber}`,
                        //     Address: `${data.address}`,
                        //     Profile_Photo_Url: `${result.secure_url}`,
                        //     Public_id: `${result.public_id}`,
                        //     unique_id: `${newObjectuser.unique_id === undefined || newObjectuser.unique_id === null ? loggedinuser.data.id : newObjectuser.unique_id}`,
                        //   }),
                        // )

                        // fetch('/api/upload', {
                        //   headers: { 'Content-Type': 'application/json' },
                        //   method: 'POST',
                        //   body: JSON.stringify({
                        //     Full_name: `${data.full_name}`,
                        //     Email: `${data.email}`,
                        //     Role: `${data.role}`,
                        //     Phone_number: `${data.phonenumber}`,
                        //     Address: `${data.address}`,
                        //     Profile_Photo_Url: `${result.secure_url}`,
                        //     Public_id: `${result.public_id}`,
                        //     unique_id: `${newObjectuser.unique_id === undefined ? JSON.parse(localStorage?.getItem('user_id')).unique_id : newObjectuser.unique_id}`,
                        //   }),
                        // })
                        //   .then((response) => response.json())
                        //   .then(async (response) => {
                        //     return (
                        //       console.log(response),
                        //       await router.push({
                        //         pathname: '/preview',
                        //         query: { ...data, data: { TeamA: 'yes', TeamB: 'no' } },
                        //       })
                        //     )
                        //   })
                        //   .catch((err) => console.error(err))
                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    //const Redirect = () => window.location.href = '/'
    const [id, setid] = useState();

    useEffect(() => {

        console.log(loggedinuser, 'loggedinuser')
        console.log(router.query, 'inside edit')
        console.log(user, 'user')
        console.log(user, user)
        console.log(loggedinuser.unique_id, 'iddddddd')
        setid(JSON.parse(localStorage?.getItem('user_id')).unique_id)


        router.replace('/edit', undefined, { shallow: true })
        let newObjectuser = JSON.parse(localStorage?.getItem('user_id'))
        newObjectuser?.unique_id !== ' ' ? setSigneedIn(true) : setSigneedIn(false)


        console.log(JSON.parse(localStorage?.getItem('user_id')), 'JSON.parse(localStorage?.getItem))')



        fetch('/api/fetchall', {
            headers: { 'Content-Type': 'application/json' },
            method: 'GET',
        })
            .then((response) => response.json())
            .then((response) => {
                // console.log(response, 'response allllll from download page')
                setAlldata(
                    response?.filter((x) => x?.unique_id === id),
                )
                setLoading(true)
            })
            .catch((err) => console.error(err))







        if (JSON.parse(localStorage?.getItem('user_id')) === '' || JSON.parse(localStorage?.getItem('user_id')) === undefined || JSON.parse(localStorage?.getItem('user_id')) === null) {
            // console.log('undefined')
            router.push('/')
        } else {

            router.push('/edit')
        }




        // if (signnedin.email === undefined) {
        //   setid(JSON.parse(localStorage?.getItem('user_id')))
        // } else {
        //   setid(newObjectuser.unique_id)
        //   // setnewObjectuser(() => {
        //   //   return {
        //   //     username: `${data.name}`,
        //   //     email: `${data.email}`,
        //   //     password: `${data.password}`,
        //   //     unique_id: `${response.id}`
        //   //   }
        //   // })
        //   console.log(
        //     newObjectuser['email'] = 'ase@gmail.com'
        //   )
        // }




    }, [])




    return (
        <div>



            <>
                <div className={Home.resume_body}>
                    <div className="top_nav">
                        <Nav />
                    </div>

                    <div className={Home.resume_main}>
                        <div className={Home.left_image}>
                            <h1 className={Home.formtitle}>
                                In just minutes, create a job-ready resume
                            </h1>
                        </div>

                        <div className={Home.right_form}>
                            <h1 className={Home.form_title}>Create my CV</h1>

                            <p className={Home.sub_title}>
                                With quick CV, you can build the right resume & CV today.
                            </p>

                            <div className={Home.resume_form}>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className={Home.resumelinkinfo}>
                                        <label className={Home.getstartedlabel} htmlFor="">
                                            Full Name
                                        </label>

                                        <input
                                            // defaultValue={alldata[0].Full_name}
                                            defaultValue=''
                                            required
                                            className={Home.getstartedinput}
                                            {...register('full_name')}
                                            placeholder="FullName"
                                            type="text"
                                        />
                                    </div>


                                    <div className={Home.resumelinkinfo}>
                                        <label className={Home.getstartedlabel} htmlFor="">
                                            Role
                                        </label>

                                        <input
                                            // defaultValue={alldata[0].Role}
                                            defaultValue=''
                                            required
                                            className={Home.getstartedinput}
                                            {...register('role')}
                                            placeholder="e.g. Software Engineer"
                                            type="text"
                                        />
                                    </div>

                                    <div className={Home.resumelinkinfo}>
                                        <label className={Home.getstartedlabel} htmlFor="">
                                            Phone number
                                        </label>

                                        <input
                                            // defaultValue={alldata[0].Phone_number}
                                            defaultValue=''
                                            required
                                            className={Home.getstartedinput}
                                            {...register('phonenumber')}
                                            placeholder="+23470..."
                                            type="text"
                                        />
                                    </div>

                                    <div className={Home.resumelinkinfo}>
                                        <label className={Home.getstartedlabel} htmlFor="">
                                            Email
                                        </label>

                                        <input
                                            // defaultValue={alldata[0].Email}
                                            defaultValue=''
                                            required
                                            className={Home.getstartedinput}
                                            {...register('email')}
                                            placeholder="abc@gmail.com"
                                            type="email"
                                        />
                                    </div>

                                    <div className={Home.resumelinkinfo}>
                                        <label className={Home.getstartedlabel} htmlFor="">
                                            Address
                                        </label>

                                        <input
                                            // defaultValue={alldata[0].Address}
                                            defaultValue=''
                                            required
                                            className={Home.getstartedinput}
                                            {...register('address')}
                                            placeholder="Lagos, Nigeria"
                                            type="text"
                                        />
                                    </div>

                                    <div className={Home.resumelinkinfo}>
                                        <label className={Home.getstartedlabel} htmlFor="">
                                            Profile Photo
                                        </label>

                                        <input
                                            required
                                            type="file"
                                            className={Home.getstartedinput}
                                            placeholder="Select an Image"
                                            multiple
                                            accept="image/*"
                                            {...register('MyImage')}
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="bg-[#f64900] hover:bg-[#f64900] text-[#fff] font-semibold hover:text-[#fff] py-2 px-4 border border-[#f64900] hover:border-transparent rounded"
                                    >
                                        Get started
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </>









        </div>




    )
}

export default Edit
