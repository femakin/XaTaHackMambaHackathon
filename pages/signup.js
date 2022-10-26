import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigate } from 'react-router-dom'

// import "./ProfileUpdate.css";
// import { DataStore, Storage } from "aws-amplify";
// import { Product, User } from "../../models";
// import { UserLoginContext } from "../../Components/Context/LoginUserContext";
import Signupstyles from '../styles/SignUp.module.css'
import { signupContext } from '../context/signupContext'
import { useRouter } from 'next/router'
import Nav from '../components/Nav'

function Signup() {
    // let navigate = useNavigate();
    // const { userdetails, setUserdetails } = useContext(UserLoginContext);

    const router = useRouter()

    const schema = yup.object().shape({
        email: yup.string().email().required('Email is required'),
    })

    const [images, setImages] = useState([])

    const { signupid, setsignupid } = useContext(signupContext)

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

    const onSubmit = (data) => {
        console.log(data)

        fetch('/api/signup', {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify({
                username: `${data.name}`,
                email: `${data.email}`,
                password: `${data.password}`,
            }),
        })
            .then((response) => response.json())
            .then(async (response) => {
                console.log(response)

                if (response.id !== " ") {

                    setsignupid(() => {
                        return {
                            username: `${data.name}`,
                            email: `${data.email}`,
                            password: `${data.password}`,
                            unique_id: `${response.id}`
                        }
                    })
                    router.push({
                        pathname: '/stepone',
                        query: {
                            ...data, state: `${response.id}`
                        },
                    })
                }








            })
            .catch((err) => console.error(err))

        // setImages([...images, data.MyImage[0]]);

        // const fileName = generateRandom(4);

        // reset({
        //     password: "",
        //     name: "",
        //     email: ""

        // });

        // DataStore.save(
        //     new User({
        //         name: data.name,
        //         email: data.email,
        //         sub: sub,
        //         userimage: fileName,
        //         Products: '',
        //     })
        // ).then((res) => {
        //     console.log(res, "response from saving")
        //     navigate("/product");
        // }).catch((error) => {
        //     console.log(error, "errorrrrr")
        // })

        // Storage.put(fileName, data.MyImage[0]);
    }

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: 'all',
        resolver: yupResolver(schema),
    })

    // const sub = userdetails?.attributes?.sub;
    //   console.log(userdetails?.attributes);
    //   console.log(sub, "subbbb")

    const getUerModel = async () => {
        // const models = await DataStore?.query(User);
        // console.log(models, "modelsssss");
        // console.log(sub);
        // DataStore.query(User, (user) => user.sub("eq", sub)).then((user) => {
        //   console.log(user[0], "usersrsrsrs");
        // });
    }



    return (
        <div>
            <Nav />
            <div className={Signupstyles.updateform_main}>
                <div>
                    <h1 className={Signupstyles.form_title}> Please SignUp</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={Signupstyles.product_link_info}>
                            {/* <input
                            type="file"
                            className={Signupstyles.getstartedinput}
                            placeholder="Select an Image"
                            multiple
                            accept="image/*"
                            // onChange={onImageChange}
                            {...register("MyImage")}
                        /> */}

                            <input
                                defaultValue=""
                                className={Signupstyles.getstartedinput}
                                {...register('email')}
                                placeholder="Email"
                                type="email"
                            />

                            <input
                                defaultValue=""
                                className={Signupstyles.getstartedinput}
                                {...register('name')}
                                placeholder="Username"
                                type="text"
                            />

                            <input
                                defaultValue=""
                                className={Signupstyles.getstartedinput}
                                {...register('password')}
                                placeholder="password"
                                type="password"
                            />

                            {/* <input
                            defaultValue=""
                            className={Signupstyles.getstartedinput}
                            {...register("userimage")}
                            placeholder="imageurl"
                            type="imageurl"
                        /> */}
                        </div>

                        <button
                            type="submit"
                            className="bg-[#f64900] hover:bg-[#f64900] text-[#fff] font-semibold hover:text-[#fff] py-2 px-4 border border-[#f64900] hover:border-transparent rounded"
                        >
                            SignUp
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup
