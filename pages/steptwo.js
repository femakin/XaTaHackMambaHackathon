import React, { useState, useContext, useEffect } from 'react'
import SteptwoStyle from '../styles/Steptwo.module.css'
import { useForm } from 'react-hook-form'
import Nav from '../components/Nav'
import { useRef } from 'react'
import { useRouter } from 'next/router'
import Education from '../components/Education'
import Interest from '../components/Interest'
import References from '../components/References'
import Skills from '../components/Skills'
import Imagesandmedia from '../components/Imagesandmedia'
import { Extract } from '@cloudinary/url-gen/actions/extract'
import Extras from '../components/Extras'
import { GlobalContext } from '../context/globalContext'
import { signupContext } from '../context/signupContext'


function steptwo() {
    const [maininfo, setMainInfo] = useState(false)
    const [SideClicked, SetSideClicked] = useState('')
    const [active, setActive] = useState('Experience')

    const { user, setUser, loggedinuser, setLoggedinuser } = useContext(GlobalContext)
    const { signupid, setsignupid } = useContext(signupContext)
    const [signnedin, setSigneedIn] = useState(false)

    const [images] = useState([])
    const [imageurls, setImageURLs] = useState([])
    const [value, onChange] = useState(new Date())
    const inputRef = useRef(null)
    const router = useRouter()

    const [textareatag, setTextareaTag] = useState({
        counter: 2,
        text: `1. `,
    })

    const [descriptiondetails, setDescriptiondetails] = useState({})

    const style = {
        height: 300,
        width: 200,
    }

    // const _onKeyDown = (e) => {
    //     if (e.keyCode === 13) {
    //         console.log(inputRef.current.value, 'textareatag')
    //         console.log('textareatag', inputRef.current.text)

    //         inputRef.current.text = `${inputRef.current.text
    //             }\n${textareatag.counter++}. `
    //         e.preventDefault()
    //         e.stopPropagation()

    //         e.preventDefault()
    //         e.stopPropagation()


    //     }
    // }

    const [textVal, setTextVal] = useState('')



    const SideData = [
        {
            Icon: '',
            title: 'Experience',
        },
        {
            Icon: '',
            title: 'Education and Qualification',
        },
        {
            Icon: '',
            title: 'Interests',
        },
        {
            Icon: '',
            title: 'References',
        },
        ,
        {
            Icon: '',
            title: 'Skills',
        },
        {
            Icon: '',
            title: 'Images and media',
        },
        {
            Icon: '',
            title: 'Extras',
        },
    ]

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

    const generateRandomtwo = (length) => {
        var result = ''
        var characters =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        var charactersLength = characters.length
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength))
        }
        return result
    }

    useEffect(() => {
        router.replace('/steptwo', undefined, { shallow: true })

        if (JSON.parse(localStorage?.getItem('user_id')) === '' || JSON.parse(localStorage?.getItem('user_id')) === undefined || JSON.parse(localStorage?.getItem('user_id')) === null) {
            // console.log('undefined')
            router.push('/')
        } else {
            console.log('What should I do')
            router.push('/steptwo')
        }

        // console.log(router.query, 'querydata')




        console.log(JSON.parse(localStorage.getItem('user_details, Localstorage   ')))

        console.log(user, 'userrrrr, Context')


    }, [])

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'all',
        // resolver: yupResolver(schema),
    })



    const onSubmit1 = (data) => {
        // onClick={()=> navigate('/submission')}
        // if (
        //     data.nameofprodut !== " " &&
        //     data.productdesc !== " " &&
        //     data.productlink !== " " &&
        //     data.tagline !== " " &&
        //     data.topic !== " " &&
        //     data.twitteraccount !== " " &&
        //     data.description !== " " &&
        //     data.productimg !== " " &&
        //     data.productlink !== " " &&
        //     data.productname !== " " &&
        //     data.thumbnailimage !== " " &&
        //     data.youtubelink !== " "
        // ) {
        //     console.log("All fields field");

        //     // AddnewProduct(data);
        //     // navigate('/product')

        //     // console.log(dbUser, "dbUser")
        // }

        // console.log(data, 'data')
        // console.log('State value', textVal)
        // reset({
        //     email: "",
        //     nameofproduct: "",
        //     productlink: "",
        //     tagline: "",
        //     topic: "",
        //     twitteraccount: "",
        //     description: "",
        //     productimg: "",
        //     productname: "",
        //     thumbnailimage: "",
        //     youtubelink: "",
        //     authornames: "",
        //     moredescription: "",
        //     workers: "",
        //     otherpeople: "",
        // });
    }






    const onSubmit2 = (data) => {
        console.log(data, '')





        if (
            data.achievement1 !== " " &&
            data.achievement2 !== " " &&
            data.achievement3 !== " " &&
            data.PhoneNumber !== " " &&
            data.Skilllevel !== " " &&
            data.certificateone[0].name !== " " &&
            // data.certificatetwo[0].name !== " " &&
            data.cityortown !== " " &&
            data.companyname !== " " &&
            data.contactPerson !== " " &&
            data.degree !== " " &&
            data.eduaward !== " " &&
            data.eduaward2 !== " " &&
            data.eduaward3 !== " " &&
            data.educity !== " " &&
            data.emailaddress !== " " &&
            data.employer !== " " &&
            data.enddate !== " " &&
            data.enddateedu !== " " &&
            data.interest !== " " &&
            data.jobtitle !== " " &&
            data.language !== " " &&
            data.skill !== " " &&
            data.startdate !== " " &&
            data.startdateedu !== " "
        ) {
            console.log(data)



            const fileName = generateRandom(4)
            var formdata = new FormData()
            formdata.append('file', data.certificateone[0], '[PROXY]')
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
                    console.log(result, 'result')


                    console.log(
                        {
                            Full_name: `${user.full_name}`,
                            Email: `${user.email}`,
                            Role: `${user.role}`,
                            Phone_number: `${user.phonenumber}`,
                            Address: `${data.address}`,
                            Profile_Photo_Url: `${user.img_url}`,
                            Public_id: `${user.profile_phot_public_id}`,
                            // unique_id: `${signupid.unique_id === undefined ? JSON.parse(localStorage?.getItem('user_id')).unique_id : signupid.unique_id}`,
                            // unique_id: `${signupid.unique_id === undefined ? JSON.parse(localStorage?.getItem('user_id')).unique_id : signupid.unique_id}`,
                            Profile_Photo_Url: `${user.unique_id}`,
                            unique_id: `${user.unique_id}`,
                            Job_Title_Ex: `${data.jobtitle}`,
                            City_town_Ex: `${data.cityortown}`,
                            Employer_Ex: `${data.employer}`,
                            Start_date_ex: `${data.startdate}`,
                            End_Date_Ex: `${data.enddate}`,
                            Achievement_one_Ex: `${data.achievement1}`,
                            Achievement_two_Ex: `${data.achievement2}`,
                            Achievement_three_Ex: `${data.achievement3}`,
                            Degree_Ed: `${data.degree}`,
                            City_Ed: `${data.educity}`,
                            School_Ed: `${data.eduschool}`,
                            Start_date_Ed: `${data.startdateedu}`,
                            End_date_Ed: `${data.enddateedu}`,
                            Award_one_Ed: `${data.eduaward}`,
                            Award_two_Ed: `${data.eduaward2}`,
                            Award_three_Ed: `${data.eduaward3}`,
                            Hobby: `${data.interest}`,
                            Company_name_Rfx: `${data.companyname}`,
                            Contact_person_Rfx: `${data.contactPerson}`,
                            Phone_number_Rfx: `${data.PhoneNumber}`,
                            Email_Address_Rfx: `${data.emailaddress}`,
                            Skill: `${data.skill}`,
                            Level_sk: `${data.Skilllevel}`,
                            Cert_Img_one_url: `${result.secure_url}`,
                            Language: `${data.language}`,
                            Cert_Public_id: `${result.public_id}`


                        }
                    )

                    console.log(router.query, 'router.query')

                    console.log(
                        JSON.parse(localStorage.getItem('user_id'))
                    )

                    console.log(JSON.parse(localStorage.getItem('user_details')))

                    console.log(user, 'userrrrr')



                    // if (data?.secure_url !== ' ') {
                    //     // setUser(() => {
                    //     //     return {
                    //     //         Full_name: `${data.full_name}`,
                    //     //         Email: `${data.email}`,
                    //     //         Role: `${data.role}`,
                    //     //         Phone_number: `${data.phonenumber}`,
                    //     //         Address: `${data.address}`,
                    //     //         Profile_Photo_Url: `${result.secure_url}`,
                    //     //         Public_id: `${result.public_id}`,
                    //     //         unique_id: `${signupid.unique_id === undefined || signupid.unique_id === null ? loggedinuser.data.id : signupid.unique_id}`,
                    //     //     }
                    //     // })

                    //     // localStorage.setItem('user_details',

                    //     //     JSON.stringify({
                    //     //         Full_name: `${data.full_name}`,
                    //     //         Email: `${data.email}`,
                    //     //         Role: `${data.role}`,
                    //     //         Phone_number: `${data.phonenumber}`,
                    //     //         Address: `${data.address}`,
                    //     //         Profile_Photo_Url: `${result.secure_url}`,
                    //     //         Public_id: `${result.public_id}`,
                    //     //         unique_id: `${signupid.unique_id === undefined || signupid.unique_id === null ? loggedinuser.data.id : signupid.unique_id}`,
                    //     //     })
                    //     // )

                    //     localStorage.setItem('user_id',

                    //         JSON.stringify({
                    //             unique_id: signupid.unique_id
                    //         })
                    //     )












                    //     // console.log(
                    //     //     JSON.stringify({
                    //     //         Full_name: `${data.full_name}`,
                    //     //         Email: `${data.email}`,
                    //     //         Role: `${data.role}`,
                    //     //         Phone_number: `${data.phonenumber}`,
                    //     //         Address: `${data.address}`,
                    //     //         Profile_Photo_Url: `${result.secure_url}`,
                    //     //         Public_id: `${result.public_id}`,
                    //     //         unique_id: `${signupid.unique_id === undefined || signupid.unique_id === null ? loggedinuser.data.id : signupid.unique_id}`,
                    //     //     }),
                    //     // )

                    //     // fetch('/api/upload', {
                    //     //     headers: { 'Content-Type': 'application/json' },
                    //     //     method: 'POST',
                    //     //     body: JSON.stringify({
                    //     //         Full_name: `${router.query.full_name}`,
                    //     //         Email: `${router.query.email}`,
                    //     //         Role: `${router.query.role}`,
                    //     //         Phone_number: `${router.query.phonenumber}`,
                    //     //         Address: `${data.address}`,
                    //     //         Profile_Photo_Url: `${router.query.img_url}`,
                    //     //         Public_id: `${router.query.profile_phot_public_id}`,
                    //     //         // unique_id: `${signupid.unique_id === undefined ? JSON.parse(localStorage?.getItem('user_id')).unique_id : signupid.unique_id}`,
                    //     //         // unique_id: `${signupid.unique_id === undefined ? JSON.parse(localStorage?.getItem('user_id')).unique_id : signupid.unique_id}`,
                    //     //         Profile_Photo_Url: `${router.query.unique_id}`,
                    //     //         unique_id: `${router.query.unique_id}`,
                    //     //         Job_Title_Ex: `${data.jobtitle}`,
                    //     //         City_town_Ex: `${data.cityortown}`,
                    //     //         Employer_Ex: `${data.employer}`,
                    //     //         Start_date_ex: `${data.startdate}`,
                    //     //         End_Date_Ex: `${data.enddate}`,
                    //     //         Achievement_one_Ex: `${data.achievement1}`,
                    //     //         Achievement_two_Ex: `${data.achievement2}`,
                    //     //         Achievement_three_Ex: `${data.achievement3}`,
                    //     //         Degree_Ed: `${data.degree_Ed}`,
                    //     //         City_Ed: `${data.educity}`,
                    //     //         School_Ed: `${data.eduschool}`,
                    //     //         Start_date_Ed: `${data.startdateedu}`,
                    //     //         End_date_Ed: `${data.enddateedu}`,
                    //     //         Award_one_Ed: `${data.eduaward}`,
                    //     //         Award_two_Ed: `${data.eduaward2}`,
                    //     //         Award_three_Ed: `${data.eduaward3}`,
                    //     //         Hobby: `${data.interest}`,
                    //     //         Company_name_Rfx: `${data.companyname}`,
                    //     //         Contact_person_Rfx: `${data.contactPerson}`,
                    //     //         Phone_number_Rfx: `${data.PhoneNumber}`,
                    //     //         Email_Address_Rfx: `${data.emailaddress}`,
                    //     //         Skill: `${data.skill}`,
                    //     //         Level_sk: `${data.Skilllevel}`,
                    //     //         Cert_Img_one_url: `${result.secure_url}`,
                    //     //         Language: `${data.language}`,
                    //     //         Cert_Public_id: `${result.public_id}`




                    //     //     }),
                    //     // })
                    //     //     .then((response) => response.json())
                    //     //     .then(async (response) => {
                    //     //         return (
                    //     //             console.log(response, 'log from response'),
                    //     //             await router.push({
                    //     //                 pathname: '/preview',
                    //     //                 query: { ...data, data: { TeamA: 'yes', TeamB: 'no' } },
                    //     //             })
                    //     //         )
                    //     //     })
                    //     //     .catch((err) => console.error(err))
                    // }
                })
                .catch((err) => {
                    console.log(err)
                })


















        }



        // router.push('/steptwo')
        // const fileName = generateRandom(4)
        // var formdata = new FormData()
        // formdata.append('file', data.MyImage[0], '[PROXY]')
        // formdata.append('upload_preset', 'ml_default')
        // formdata.append('public_id', `${fileName}`)
        // formdata.append('api_key', '992692999288596')

        // var requestOptions = {
        //   method: 'POST',
        //   body: formdata,
        //   redirect: 'follow',
        // }

        // fetch(
        //   'https://api.cloudinary.com/v1_1/femakin/image/upload',
        //   requestOptions,
        // )
        //   .then(async (response) => {
        //     return await response.json()
        //   })
        //   .then(async (result) => {
        //     console.log(result, 'result')





        //     if (data?.secure_url !== ' ') {
        //       setUser(() => {
        //         return {
        //           Full_name: `${data.full_name}`,
        //           Email: `${data.email}`,
        //           Role: `${data.role}`,
        //           Phone_number: `${data.phonenumber}`,
        //           Address: `${data.address}`,
        //           Profile_Photo_Url: `${result.secure_url}`,
        //           Public_id: `${result.public_id}`,
        //           unique_id: `${signupid.unique_id === undefined || signupid.unique_id === null ? loggedinuser.data.id : signupid.unique_id}`,
        //         }
        //       })

        //       localStorage.setItem('user_details',

        //         JSON.stringify({
        //           Full_name: `${data.full_name}`,
        //           Email: `${data.email}`,
        //           Role: `${data.role}`,
        //           Phone_number: `${data.phonenumber}`,
        //           Address: `${data.address}`,
        //           Profile_Photo_Url: `${result.secure_url}`,
        //           Public_id: `${result.public_id}`,
        //           unique_id: `${signupid.unique_id === undefined || signupid.unique_id === null ? loggedinuser.data.id : signupid.unique_id}`,
        //         })
        //       )

        //       localStorage.setItem('user_id',

        //         JSON.stringify({
        //           unique_id: signupid.unique_id
        //         })
        //       )


        //       console.log(
        //         JSON.stringify({
        //           Full_name: `${data.full_name}`,
        //           Email: `${data.email}`,
        //           Role: `${data.role}`,
        //           Phone_number: `${data.phonenumber}`,
        //           Address: `${data.address}`,
        //           Profile_Photo_Url: `${result.secure_url}`,
        //           Public_id: `${result.public_id}`,
        //           unique_id: `${signupid.unique_id === undefined || signupid.unique_id === null ? loggedinuser.data.id : signupid.unique_id}`,
        //         }),
        //       )

        //       fetch('/api/upload', {
        //         headers: { 'Content-Type': 'application/json' },
        //         method: 'POST',
        //         body: JSON.stringify({
        //           Full_name: `${data.full_name}`,
        //           Email: `${data.email}`,
        //           Role: `${data.role}`,
        //           Phone_number: `${data.phonenumber}`,
        //           Address: `${data.address}`,
        //           Profile_Photo_Url: `${result.secure_url}`,
        //           Public_id: `${result.public_id}`,
        //           unique_id: `${signupid.unique_id === undefined ? JSON.parse(localStorage?.getItem('user_id')).unique_id : signupid.unique_id}`,
        //         }),
        //       })
        //         .then((response) => response.json())
        //         .then(async (response) => {
        //           return (
        //             console.log(response),
        //             await router.push({
        //               pathname: '/preview',
        //               query: { ...data, data: { TeamA: 'yes', TeamB: 'no' } },
        //             })
        //           )
        //         })
        //         .catch((err) => console.error(err))
        //     }
        //   })
        //   .catch((err) => {
        //     console.log(err)
        //   })

    }


    const onSubmit3 = (data) => {

        if (
            data.achievement1 !== " " &&
            data.achievement2 !== " " &&
            data.achievement3 !== " " &&
            data.PhoneNumber !== " " &&
            data.Skilllevel !== " " &&
            data.certificateone[0].name !== " " &&
            // data.certificatetwo[0].name !== " " &&
            data.cityortown !== " " &&
            data.companyname !== " " &&
            data.contactPerson !== " " &&
            data.degree !== " " &&
            data.eduaward !== " " &&
            data.eduaward2 !== " " &&
            data.eduaward3 !== " " &&
            data.educity !== " " &&
            data.emailaddress !== " " &&
            data.employer !== " " &&
            data.enddate !== " " &&
            data.enddateedu !== " " &&
            data.interest !== " " &&
            data.jobtitle !== " " &&
            data.language !== " " &&
            data.skill !== " " &&
            data.startdate !== " " &&
            data.startdateedu !== " "
        ) {
            const fileName = generateRandom(4)
            var formdata = new FormData()
            formdata.append('file', data.certificateone[0], '[PROXY]')
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
                    console.log(result, 'result')
                    const UserDetails = JSON.parse(localStorage?.getItem('user_id'))
                    console.log(loggedinuser, 'loggeddddinuser')

                    if (result?.secure_url !== ' ') {

                        // setUser(
                        //     ()=>{
                        //         return{
                        //             Full_name: `${user.Full_name}`,
                        //             Email: `${user.Email}`,
                        //             Role: `${user.Role}`,
                        //             Phone_number: `${user.Phone_number}`,
                        //             Address: `${user.Address}`,
                        //             Profile_Photo_Url: `${user.Profile_Photo_Url}`,
                        //             Public_id: `${user.Public_id}`,
                        //             // unique_id: `${signupid.unique_id === undefined ? JSON.parse(localStorage?.getItem('user_id')).unique_id : signupid.unique_id}`,
                        //             // unique_id: `${signupid.unique_id === undefined ? JSON.parse(localStorage?.getItem('user_id')).unique_id : signupid.unique_id}`,
                        //             unique_id: `${user.unique_id}`,
                        //         }
                        //     }
                        // )



                        // localStorage.setItem('user_details',

                        //     JSON.stringify({
                        //         Full_name: `${user.Full_name}`,
                        //         Email: `${user.Email}`,
                        //         Role: `${user.Role}`,
                        //         Phone_number: `${user.Phone_number}`,
                        //         Address: `${user.Address}`,
                        //         Profile_Photo_Url: `${user.Profile_Photo_Url}`,
                        //         Public_id: `${user.Public_id}`,
                        //         // unique_id: `${signupid.unique_id === undefined ? JSON.parse(localStorage?.getItem('user_id')).unique_id : signupid.unique_id}`,
                        //         // unique_id: `${signupid.unique_id === undefined ? JSON.parse(localStorage?.getItem('user_id')).unique_id : signupid.unique_id}`,
                        //         unique_id: `${user.unique_id}`,
                        //     })
                        // )

                        // localStorage.setItem('user_id',

                        //     JSON.stringify({
                        //         unique_id: user.unique_id
                        //     })
                        // )






                        fetch('/api/upload', {
                            headers: { 'Content-Type': 'application/json' },
                            method: 'POST',
                            body: JSON.stringify({
                                Full_name: `${user.Full_name}`,
                                Email: `${user.Email}`,
                                Role: `${user.Role}`,
                                Phone_number: `${user.Phone_number}`,
                                Address: `${user.Address}`,
                                Profile_Photo_Url: `${user.Profile_Photo_Url}`,
                                Public_id: `${user.Public_id}`,
                                // unique_id: `${signupid.unique_id === undefined ? JSON.parse(localStorage?.getItem('user_id')).unique_id : signupid.unique_id}`,
                                // unique_id: `${signupid.unique_id === undefined ? JSON.parse(localStorage?.getItem('user_id')).unique_id : signupid.unique_id}`,
                                unique_id: `${user.unique_id}`,
                                Job_Title_Ex: `${data.jobtitle}`,
                                City_town_Ex: `${data.cityortown}`,
                                Employer_Ex: `${data.employer}`,
                                Start_date_ex: `${data.startdate}`,
                                End_Date_Ex: `${data.enddate}`,
                                Achievement_one_Ex: `${data.achievement1}`,
                                Achievement_two_Ex: `${data.achievement2}`,
                                Achievement_three_Ex: `${data.achievement3}`,
                                Degree_Ed: `${data.degree}`,
                                City_Ed: `${data.educity}`,
                                School_Ed: `${data.eduschool}`,
                                Start_date_Ed: `${data.startdateedu}`,
                                End_date_Ed: `${data.enddateedu}`,
                                Award_one_Ed: `${data.eduaward}`,
                                Award_two_Ed: `${data.eduaward2}`,
                                Award_three_Ed: `${data.eduaward3}`,
                                Hobby: `${data.interest}`,
                                Company_name_Rfx: `${data.companyname}`,
                                Contact_person_Rfx: `${data.contactPerson}`,
                                Phone_number_Rfx: `${data.PhoneNumber}`,
                                Email_Address_Rfx: `${data.emailaddress}`,
                                Skill: `${data.skill}`,
                                Level_sk: `${data.Skilllevel}`,
                                Cert_Img_one_url: `${result.secure_url}`,
                                Language: `${data.language}`,
                                Cert_Public_Id: `${result.public_id}`

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





                    // console.log(
                    //     {
                    //         Full_name: `${user.Full_name}`,
                    //         Email: `${user.Email}`,
                    //         Role: `${user.Role}`,
                    //         Phone_number: `${user.Phone_number}`,
                    //         Address: `${user.Address}`,
                    //         Profile_Photo_Url: `${user.Profile_Photo_Url}`,
                    //         Public_id: `${user.Public_id}`,
                    //         // unique_id: `${signupid.unique_id === undefined ? JSON.parse(localStorage?.getItem('user_id')).unique_id : signupid.unique_id}`,
                    //         // unique_id: `${signupid.unique_id === undefined ? JSON.parse(localStorage?.getItem('user_id')).unique_id : signupid.unique_id}`,
                    //         unique_id: `${user.unique_id}`,
                    //         Job_Title_Ex: `${data.jobtitle}`,
                    //         City_town_Ex: `${data.cityortown}`,
                    //         Employer_Ex: `${data.employer}`,
                    //         Start_date_ex: `${data.startdate}`,
                    //         End_Date_Ex: `${data.enddate}`,
                    //         Achievement_one_Ex: `${data.achievement1}`,
                    //         Achievement_two_Ex: `${data.achievement2}`,
                    //         Achievement_three_Ex: `${data.achievement3}`,
                    //         Degree_Ed: `${data.degree}`,
                    //         City_Ed: `${data.educity}`,
                    //         School_Ed: `${data.eduschool}`,
                    //         Start_date_Ed: `${data.startdateedu}`,
                    //         End_date_Ed: `${data.enddateedu}`,
                    //         Award_one_Ed: `${data.eduaward}`,
                    //         Award_two_Ed: `${data.eduaward2}`,
                    //         Award_three_Ed: `${data.eduaward3}`,
                    //         Hobby: `${data.interest}`,
                    //         Company_name_Rfx: `${data.companyname}`,
                    //         Contact_person_Rfx: `${data.contactPerson}`,
                    //         Phone_number_Rfx: `${data.PhoneNumber}`,
                    //         Email_Address_Rfx: `${data.emailaddress}`,
                    //         Skill: `${data.skill}`,
                    //         Level_sk: `${data.Skilllevel}`,
                    //         Cert_Img_one_url: `${result.secure_url}`,
                    //         Language: `${data.language}`,
                    //         Cert_Public_id: `${result.public_id}`


                    //     }
                    // )

                    // console.log(router.query, 'router.query')

                    // console.log(
                    //     JSON.parse(localStorage.getItem('user_id'))
                    // )

                    // // console.log(JSON.parse(localStorage.getItem('user_details')))

                    // console.log(user, 'userrrrr')
                    // console.log(UserDetails, 'UserDetails -localstorage')















                })
                .catch((err) => {
                    console.log(err)
                })

        }















    }







    return (
        <div>
            <div>
                <div className="prd_container">

                    <Nav />

                    <div className={SteptwoStyle.product_body_container}>
                        <div className="submission_content">
                            <div className={SteptwoStyle.draft_title}>
                                <h1 className="drfat_name">Welcome {router.query.full_name}</h1>
                            </div>
                        </div>

                        <div className={SteptwoStyle.menu_content}>
                            <div className={SteptwoStyle.product_side_menu}>
                                <div className={SteptwoStyle.menu_item_container}>
                                    {SideData?.map((x, i) => {
                                        return (
                                            <div className="images_and_media_container">
                                                <h1
                                                    onClick={() => {
                                                        return (
                                                            SetSideClicked(x?.title),
                                                            setMainInfo(!maininfo),
                                                            setActive(x?.title)

                                                        )
                                                    }}
                                                    className={`${SteptwoStyle.images_info_content
                                                        } cursor-pointer ${active === x?.title && `${SteptwoStyle.active}`
                                                        }`}
                                                >
                                                    {x.title}
                                                </h1>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>

                            <div className={SteptwoStyle.product_form_content}>
                                <form
                                    className={SteptwoStyle.form}
                                    onSubmit={handleSubmit(onSubmit3)}
                                >
                                    {active === 'Experience' ? (
                                        <div className="MainContent_Container">
                                            <div className="tell_us_title">
                                                <h1 className={SteptwoStyle.main_tell_title}>
                                                    Tell us more about your experience
                                                </h1>

                                                <p className={SteptwoStyle.sub_tell_us_content}>
                                                    Work experience
                                                </p>
                                            </div>

                                            <div className={SteptwoStyle.product_form}>
                                                <div className={SteptwoStyle.product_link_info}>
                                                    <label
                                                        className={SteptwoStyle.getstartedlabel}
                                                        htmlFor=""
                                                    >
                                                        Job Title
                                                    </label>

                                                    <input
                                                        className={SteptwoStyle.getstarted_input}
                                                        type="text"
                                                        placeholder="e.g Cloud Engineer"
                                                        {...register('jobtitle')}
                                                    // defaultValue=''


                                                    />
                                                </div>

                                                <div className={SteptwoStyle.product_link_info}>
                                                    <label
                                                        className={SteptwoStyle.getstartedlabel}
                                                        htmlFor=""
                                                    >
                                                        City/Town
                                                    </label>

                                                    <input
                                                        className={SteptwoStyle.getstarted_input}
                                                        type="text"
                                                        placeholder="e.g Lagos Nigeria"
                                                        {...register('cityortown')}
                                                    />
                                                </div>

                                                <div className={SteptwoStyle.product_link_info}>
                                                    <label
                                                        className={SteptwoStyle.getstartedlabel}
                                                        htmlFor=""
                                                    >
                                                        Employer
                                                    </label>

                                                    <input
                                                        className={SteptwoStyle.getstarted_input}
                                                        type="text"
                                                        placeholder="e.g Hackmamba"
                                                        {...register('employer')}
                                                    />
                                                </div>

                                                <div className={SteptwoStyle.product_link_info}>
                                                    <label
                                                        className={SteptwoStyle.getstartedlabel}
                                                        htmlFor=""
                                                    >
                                                        Start Date
                                                    </label>

                                                    <input
                                                        className={SteptwoStyle.getstarted_input}
                                                        type="date"
                                                        placeholder="e.g Hackmamba"
                                                        {...register('startdate')}
                                                    />
                                                </div>

                                                <div className={SteptwoStyle.product_link_info}>
                                                    <label
                                                        className={SteptwoStyle.getstartedlabel}
                                                        htmlFor=""
                                                    >
                                                        End Date
                                                    </label>

                                                    <input
                                                        className={SteptwoStyle.getstarted_input}
                                                        type="date"
                                                        placeholder="e.g Hackmamba"
                                                        {...register('enddate')}
                                                    />
                                                </div>

                                                <div className={SteptwoStyle.product_link_info}>
                                                    <label
                                                        className={SteptwoStyle.getstartedlabel}
                                                        htmlFor=""
                                                    >
                                                        Description
                                                    </label>

                                                    <textarea
                                                        className={SteptwoStyle.getstarted_input}
                                                        type="date"
                                                        placeholder="e.g Achievement 1"
                                                        {...register('achievement1')}
                                                    />

                                                    <textarea
                                                        className={SteptwoStyle.getstarted_input}
                                                        type="date"
                                                        placeholder="e.g Achievement 2"
                                                        {...register('achievement2')}
                                                    />

                                                    <textarea
                                                        className={SteptwoStyle.getstarted_input}
                                                        type="date"
                                                        placeholder="e.g Achievement 3"
                                                        {...register('achievement3')}
                                                    />
                                                </div>

                                                <button
                                                    // type="submit"
                                                    onClick={() => {
                                                        return setActive('Education and Qualification')
                                                    }}
                                                    className="bg-[#f64900] hover:bg-[#f64900] text-[#fff] font-semibold hover:text-[#fff] py-2 px-4 border border-[#f64900] hover:border-transparent rounded"
                                                >
                                                    Next step: Education and Qualification
                                                </button>
                                            </div>
                                        </div>


                                    ) : active === 'Education and Qualification' ? (


                                        <Education register={register} setActive={setActive} />



                                    ) : active === 'Interests' ? (
                                        <Interest register={register} setActive={setActive} />

                                    ) :
                                        active === 'References' ? (
                                            <References register={register} setActive={setActive} />

                                        ) : active === 'Skills' ? (
                                            <Skills register={register} setActive={setActive} />
                                        ) : active === 'Images and media' ? (
                                            <Imagesandmedia register={register} setActive={setActive} />
                                        ) : active === 'Extras' ? (
                                            <Extras register={register} setActive={setActive} />
                                        ) : null}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default steptwo
