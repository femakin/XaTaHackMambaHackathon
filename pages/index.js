// import { GetServerSideProps } from 'next/types'
import React, { FC, useEffect } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import Nav from '../components/Nav'
import { getXataClient } from '../utils/xata.codegen'
// import { authorize } from '../util/Authorize'
import Home from '../styles/Home.module.css'
import { set, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Router } from 'react-router-dom'
import { useRouter } from 'next/router'



// type Props = Awaited<ReturnType<typeof getServerSideProps>>['props']





const Index = ({ items }) => {

  // useEffect(() => {
  const router = useRouter()


  //   fetch('/api/getuser', {
  //     headers: { 'Content-Type': 'application/json' },
  //     method: 'GET',
  //   })
  //     .then((response) => response.json())
  //     .then((response) => {
  //       console.log(response, 'user details')

  //     })
  //     .catch((err) => console.error(err))


  // }, [])


  // const schema = yup.object().shape({
  //   email: yup.string().email().required('Email is required'),
  // })

  // const { user, setUser, loggedinuser, setLoggedinuser } = useContext(GlobalContext)
  // const { signupid, setsignupid } = useContext(signupContext)
  // const [signnedin, setSigneedIn] = useState(false)
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


  const onSubmit = (data) => {

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
      router.push('/login')
    }


  }
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

      </>

    </div>
  )
}

export default Index











