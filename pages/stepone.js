import React, { useEffect } from 'react'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
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

function Stepone() {
  const schema = yup.object().shape({
    email: yup.string().email().required('Email is required'),
  })

  const { user, setUser } = useContext(GlobalContext)
  const { signupid, setsignupid } = useContext(signupContext)

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

  const PreviewPage = (data) => {
    return (
      <Link
        href={{
          pathname: '/preview',
          query: { slug: data },
        }}
      />
    )
  }

  const onSubmit = (data) => {
    // setUser(() => {
    //   return data
    // })
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
      formdata.append('api_key', '992692999288596')

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
          console.log(result, 'result')

          if (data.secure_url !== ' ') {
            setUser(() => {
              return {
                Full_name: `${data.full_name}`,
                Email: `${data.email}`,
                Role: `${data.role}`,
                Phone_number: `${data.phonenumber}`,
                Address: `${data.address}`,
                Profile_Photo_Url: `${result.secure_url}`,
                Public_id: `${result.public_id}`,
                unique_id: `${signupid.unique_id}`,
              }
            })

            localStorage.setItem('user_details',

              JSON.stringify({
                Full_name: `${data.full_name}`,
                Email: `${data.email}`,
                Role: `${data.role}`,
                Phone_number: `${data.phonenumber}`,
                Address: `${data.address}`,
                Profile_Photo_Url: `${result.secure_url}`,
                Public_id: `${result.public_id}`,
                unique_id: `${signupid.unique_id}`,
              })
            )

            localStorage.setItem('user_id',

              JSON.stringify({
                unique_id: signupid.unique_id
              })
            )


            console.log(
              JSON.stringify({
                Full_name: `${data.full_name}`,
                Email: `${data.email}`,
                Role: `${data.role}`,
                Phone_number: `${data.phonenumber}`,
                Address: `${data.address}`,
                Profile_Photo_Url: `${result.secure_url}`,
                Public_id: `${result.public_id}`,
                unique_id: `${signupid.unique_id}`,
              }),
            )

            fetch('/api/upload', {
              headers: { 'Content-Type': 'application/json' },
              method: 'POST',
              body: JSON.stringify({
                Full_name: `${data.full_name}`,
                Email: `${data.email}`,
                Role: `${data.role}`,
                Phone_number: `${data.phonenumber}`,
                Address: `${data.address}`,
                Profile_Photo_Url: `${result.secure_url}`,
                Public_id: `${result.public_id}`,
                unique_id: `${signupid.unique_id}`,
              }),
            })
              .then((response) => response.json())
              .then(async (response) => {
                return (
                  console.log(response),
                  await router.push({
                    pathname: '/preview',
                    query: { ...data, data: { TeamA: 'yes', TeamB: 'no' } },
                  })
                )
              })
              .catch((err) => console.error(err))
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }


  useEffect(() => {
    console.log(signupid, 'signupid')
    // console.log(router, 'router query-signup')
    router.replace('/stepone', undefined, { shallow: true })


  }, []);




  return (
    <div>
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
                    defaultValue=""
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
                    defaultValue=""
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
                    defaultValue=""
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
                    defaultValue=""
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
                    defaultValue=""
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
    </div>
  )
}

export default Stepone
