import React, { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'

// import { UserLoginContext } from "../Context/LoginUserContext";
import SteptwoStyle from '../styles/Steptwo.module.css'

import { useForm } from 'react-hook-form'
import Nav from '../components/Nav'
import { useRef } from 'react'
import { useRouter } from 'next/router'

// import "react-quill/dist/quill.snow.css";

// import DatePicker from 'react-date-picker/dist/entry.nostyle';

function steptwo() {
    const [maininfo, setMainInfo] = useState(false)
    const [SideClicked, SetSideClicked] = useState('')
    const [active, setActive] = useState('Experience')

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

    const _onKeyDown = (e) => {
        if (e.keyCode === 13) {
            console.log(inputRef.current.value, 'textareatag')
            console.log('textareatag', inputRef.current.text)
            // inputRef.current.text = `${inputRef.current.text}\n${textareatag.counter++}. `;
            inputRef.current.text = `${inputRef.current.text
                }\n${textareatag.counter++}. `
            e.preventDefault()
            e.stopPropagation()

            e.preventDefault()
            e.stopPropagation()

            // setDescriptiondetails(
            //     `${inputRef.current.value}:  ${inputRef.current.value}\n${textareatag.counter++} `
            // )
        }
    }

    const [textVal, setTextVal] = useState('')

    const handleSelect = (date) => {
        console.log(date)
    }

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


        if (JSON.parse(localStorage?.getItem('user_id')) === '' || JSON.parse(localStorage?.getItem('user_id')) === undefined || JSON.parse(localStorage?.getItem('user_id')) === null) {
            console.log('undefined')
            router.push('/')
        } else {
            console.log('What should I do')
            router.push('/steptwo')
        }


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

    const AddnewProduct = async (data) => {
        // console.log(user)
        console.log(data)
        // const fileNameone = generateRandom(4);
        // const fileNametwo = generateRandomtwo(4);
        // Storage.put(fileNameone, data.thumbnailimage[0]);
        // Storage.put(fileNametwo, data.productimg[0]);

        // await DataStore.save(
        //     new Product({
        //         authornames: data?.authornames,
        //         description: data?.description,
        //         price: data?.price,
        //         productimg: fileNameone,
        //         productlink: data?.productlink,
        //         productname: data?.productname,
        //         tagline: data?.tagline,
        //         thumbnailimage: fileNametwo,
        //         topic: data?.topic,
        //         twitteraccount: data?.twitteraccount,
        //         workers: data?.productname,
        //         youtubelink: data?.youtubelink,
        //         votecount: 0,
        //         email: Auth.user.attributes.email

        //         // email:
        //     })
        // )
        //     .then(async (res) => {
        //         console.log(res, "resssss");

        //         DataStore.save(
        //             new Vote({
        //                 //   productID: res?.id,
        //                 Votersdetails: [{
        //                     id: res.id
        //                 }]
        //             })
        //         );
        //     });
    }

    const onSubmit = (data) => {
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

        console.log(data, 'data')
        console.log('State value', textVal)
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

    const CheckChange = (e) => {
        if (e.keyCode === 13) {
            console.log(e.target.value)
        }
    }

    const onChangeText = (text) => {
        // console.log("called");
        // text = text !== "<p><br></p>" ? text : "";
        // // setFieldsValue({ input: text });
        // setquillValue(text);
        // e.preventDefault()
        console.log('called')
        text = text !== '<p><br></p>' ? text : ''
        // setFieldsValue({ input: text });
        setTextVal(text)
    }

    const modules = {
        toolbar: [
            [{ font: [] }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ color: [] }, { background: [] }],
            [{ script: 'sub' }, { script: 'super' }],
            ['blockquote', 'code-block'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ indent: '-1' }, { indent: '+1' }, { align: [] }],
            ['link', 'image', 'video'],
            ['clean'],
        ],
    }

    return (
        <div>
            <div>
                <div className="prd_container">
                    {/* <div className="top_nav">
                        <Example />
                    </div> */}
                    <Nav />

                    <div className={SteptwoStyle.product_body_container}>
                        <div className="submission_content">
                            <div className={SteptwoStyle.draft_title}>
                                <h1 className="drfat_name">Welcome</h1>
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
                                                            // console.log(active)
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
                                    onSubmit={handleSubmit(onSubmit)}
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
                                                        {...register('emplyer')}
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
                                                        placeholder="e.g Archviement 1"
                                                        {...register('pArchviement3')}
                                                    />

                                                    <textarea
                                                        className={SteptwoStyle.getstarted_input}
                                                        type="date"
                                                        placeholder="e.g Archviement 2"
                                                        {...register('Archviement2')}
                                                    />

                                                    <textarea
                                                        className={SteptwoStyle.getstarted_input}
                                                        type="date"
                                                        placeholder="e.g Archviement 3"
                                                        {...register('Archviement3')}
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
                                        // <div className="Images_container">
                                        //     <div className="tell_us_title">
                                        //         <h1 className="main_tell_title">Thumbnail</h1>

                                        //         <p className="sub_tell_us_content">
                                        //             Let's make your product look nice
                                        //         </p>
                                        //         <div className={SteptwoStyle.link_container}>
                                        //             <div className={SteptwoStyle.hr_text}></div>

                                        //             {/* <h1 className={SteptwoStyle.link_title}>Description</h1> */}

                                        //             <div className={SteptwoStyle.product_link_info}>
                                        //                 <label className={SteptwoStyle.getstartedlabel} htmlFor="">
                                        //                     Recommended size: 240x240 | JPG, PNG, GIF. Max size:
                                        //                     2MB
                                        //                 </label>
                                        //                 <input
                                        //                     type="file"
                                        //                     className={SteptwoStyle.getstarted_input}
                                        //                     placeholder="Select an Image"
                                        //                     multiple
                                        //                     accept="image/*"
                                        //                     // onChange={onImageChange}
                                        //                     {...register("thumbnailimage")}
                                        //                 />

                                        //                 <div className={SteptwoStyle.image_wrapper}>
                                        //                     {imageurls.map((imageSrc) => (
                                        //                         <div className="single_img">
                                        //                             <img
                                        //                                 className={SteptwoStyle.thumbnail_img}
                                        //                                 src={imageSrc}
                                        //                                 alt=""
                                        //                             />
                                        //                         </div>
                                        //                     ))}
                                        //                 </div>
                                        //             </div>
                                        //         </div>

                                        //         <div className={SteptwoStyle.link_container}>
                                        //             <div className={SteptwoStyle.hr_text}></div>

                                        //             <h1 className={SteptwoStyle.link_title}>Gallery</h1>

                                        //             <div className={SteptwoStyle.product_link_info}>
                                        //                 <label className={SteptwoStyle.getstartedlabel} htmlFor="">
                                        //                     The first image will be used as the social preview
                                        //                     when your link is shared online. We recommend at
                                        //                     least 3 or more images.
                                        //                 </label>

                                        //                 <input
                                        //                     type="file"
                                        //                     className={SteptwoStyle.getstarted_input}
                                        //                     placeholder="Select an Image"
                                        //                     multiple
                                        //                     accept="image/*"
                                        //                     // onChange={onImageChange}
                                        //                     {...register("productimg")}
                                        //                 />
                                        //                 <div className={SteptwoStyle.image_wrapper}>
                                        //                     {imageurls.map((imageSrc) => (
                                        //                         <div className="single_img">
                                        //                             <img
                                        //                                 className={SteptwoStyle.thumbnail_img}
                                        //                                 src={imageSrc}
                                        //                                 alt=""
                                        //                             />
                                        //                         </div>
                                        //                     ))}
                                        //                 </div>
                                        //             </div>
                                        //         </div>

                                        //         <div className={SteptwoStyle.link_container}>
                                        //             <div className={SteptwoStyle.hr_text}></div>

                                        //             <h1 className={SteptwoStyle.link_title}>Youtube</h1>

                                        //             <div className={SteptwoStyle.product_link_info}>
                                        //                 <label className={SteptwoStyle.getstartedlabel} htmlFor="">
                                        //                     This is optional but we find that showing how your
                                        //                     product works is helpful to convince people. If you
                                        //                     do add a video, it will appear as the first item in
                                        //                     your gallery when you launch.
                                        //                 </label>

                                        //                 <input
                                        //                     className={SteptwoStyle.getstarted_input}
                                        //                     type="text"
                                        //                     placeholder="Video of the product (optional) "
                                        //                     {...register("youtubelink")}
                                        //                 />
                                        //             </div>
                                        //         </div>

                                        //         <button
                                        //             onClick={() => {
                                        //                 return setActive("Interests");
                                        //             }}
                                        //             className="bg-[#f64900] hover:bg-[#f64900] text-[#fff] font-semibold hover:text-[#fff] py-2 px-4 border border-[#f64900] hover:border-transparent rounded"
                                        //         >
                                        //             Next step: Interests
                                        //         </button>
                                        //     </div>
                                        // </div>

                                        <div className="MainContent_Container">
                                            <div className="tell_us_title">
                                                <h1 className={SteptwoStyle.main_tell_title}>
                                                    Education and Qualification
                                                </h1>

                                                <p className={SteptwoStyle.sub_tell_us_content}>
                                                    Education
                                                </p>
                                            </div>

                                            <div className={SteptwoStyle.product_form}>
                                                <div className={SteptwoStyle.product_link_info}>
                                                    <label
                                                        className={SteptwoStyle.getstartedlabel}
                                                        htmlFor=""
                                                    >
                                                        Degree
                                                    </label>

                                                    <input
                                                        className={SteptwoStyle.getstarted_input}
                                                        type="text"
                                                        placeholder="e.g Bachelor of Mathematics"
                                                        {...register('degree')}
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
                                                        {...register('educity')}
                                                    />
                                                </div>

                                                <div className={SteptwoStyle.product_link_info}>
                                                    <label
                                                        className={SteptwoStyle.getstartedlabel}
                                                        htmlFor=""
                                                    >
                                                        School
                                                    </label>

                                                    <input
                                                        className={SteptwoStyle.getstarted_input}
                                                        type="text"
                                                        placeholder="e.g Kwara State University"
                                                        {...register('emplyer')}
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
                                                        placeholder="e.g Startdate"
                                                        {...register('startdateedu')}
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
                                                        placeholder="e.g enddate"
                                                        {...register('enddateedu')}
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
                                                        placeholder="e.g Award 1"
                                                        {...register('eduaward')}
                                                    />

                                                    <textarea
                                                        className={SteptwoStyle.getstarted_input}
                                                        type="date"
                                                        placeholder="e.g Award 2"
                                                        {...register('eduaward2')}
                                                    />

                                                    <textarea
                                                        className={SteptwoStyle.getstarted_input}
                                                        type="date"
                                                        placeholder="e.g Archviement 3"
                                                        {...register('eduaward3')}
                                                    />
                                                </div>

                                                <button
                                                    // type="submit"
                                                    onClick={() => {
                                                        return setActive('Interests')
                                                    }}
                                                    className="bg-[#f64900] hover:bg-[#f64900] text-[#fff] font-semibold hover:text-[#fff] py-2 px-4 border border-[#f64900] hover:border-transparent rounded"
                                                >
                                                    Next step: Interests
                                                </button>
                                            </div>
                                        </div>
                                    ) : active === 'Interests' ? (
                                        <div className="MainContent_Container">
                                            <div className="tell_us_title">
                                                <h1 className={SteptwoStyle.main_tell_title}>
                                                    Interest
                                                </h1>

                                                {/* <p className={SteptwoStyle.sub_tell_us_content}>
                                                            Education
                                                        </p> */}
                                            </div>

                                            <div className={SteptwoStyle.product_form}>
                                                <div className={SteptwoStyle.product_link_info}>
                                                    <label
                                                        className={SteptwoStyle.getstartedlabel}
                                                        htmlFor=""
                                                    >
                                                        Hobby
                                                    </label>

                                                    <input
                                                        className={SteptwoStyle.getstarted_input}
                                                        type="text"
                                                        placeholder="e.g Driving"
                                                        {...register('interest')}
                                                    />
                                                </div>

                                                {/* <div className={SteptwoStyle.product_link_info}>
                                                            <label className={SteptwoStyle.getstartedlabel} htmlFor="">
                                                                City/Town
                                                            </label>

                                                            <input
                                                                className={SteptwoStyle.getstarted_input}
                                                                type="text"
                                                                placeholder="e.g Lagos Nigeria"

                                                                {...register("educity")}
                                                            />
                                                        </div>



                                                        <div className={SteptwoStyle.product_link_info}>
                                                            <label className={SteptwoStyle.getstartedlabel} htmlFor="">
                                                                School
                                                            </label>

                                                            <input
                                                                className={SteptwoStyle.getstarted_input}
                                                                type="text"
                                                                placeholder="e.g Kwara State University"

                                                                {...register("emplyer")}
                                                            />
                                                        </div>



                                                        <div className={SteptwoStyle.product_link_info}>
                                                            <label className={SteptwoStyle.getstartedlabel} htmlFor="">
                                                                Start Date
                                                            </label>

                                                            <input
                                                                className={SteptwoStyle.getstarted_input}
                                                                type="date"
                                                                placeholder="e.g Startdate"

                                                                {...register("startdateedu")}
                                                            />

                                                        </div>



                                                        <div className={SteptwoStyle.product_link_info}>
                                                            <label className={SteptwoStyle.getstartedlabel} htmlFor="">
                                                                End Date
                                                            </label>

                                                            <input
                                                                className={SteptwoStyle.getstarted_input}
                                                                type="date"
                                                                placeholder="e.g enddate"

                                                                {...register("enddateedu")}
                                                            />

                                                        </div>


                                                        <div className={SteptwoStyle.product_link_info}>
                                                            <label className={SteptwoStyle.getstartedlabel} htmlFor="">
                                                                Description
                                                            </label>

                                                            <textarea
                                                                className={SteptwoStyle.getstarted_input}
                                                                type="date"
                                                                placeholder="e.g Award 1"

                                                                {...register("eduaward")}
                                                            />



                                                            <textarea
                                                                className={SteptwoStyle.getstarted_input}
                                                                type="date"
                                                                placeholder="e.g Award 2"

                                                                {...register("eduaward2")}
                                                            />


                                                            <textarea
                                                                className={SteptwoStyle.getstarted_input}
                                                                type="date"
                                                                placeholder="e.g Archviement 3"

                                                                {...register("eduaward3")}
                                                            />














                                                        </div>


 */}

                                                <button
                                                    // type="submit"
                                                    onClick={() => {
                                                        return setActive('References')
                                                    }}
                                                    className="bg-[#f64900] hover:bg-[#f64900] text-[#fff] font-semibold hover:text-[#fff] py-2 px-4 border border-[#f64900] hover:border-transparent rounded"
                                                >
                                                    Next step: References
                                                </button>
                                            </div>
                                        </div>
                                    ) : //                     <div className="Images_container">
                                        //                         <div className="tell_us_title">
                                        //                             <h1 className="main_tell_title">
                                        //                                 Did you work on this product?
                                        //                             </h1>

                                        //                             <p className="sub_tell_us_content">
                                        //                                 It’s fine either way. Just need to know.
                                        //                             </p>

                                        //                             <div className={SteptwoStyle.link_container}>
                                        //                                 <div className={SteptwoStyle.hr_text}></div>

                                        //                                 <div className={SteptwoStyle.product_link_info}>
                                        //                                     {/* <label className={SteptwoStyle.getstartedlabel} htmlFor="">
                                        //     Short description of the product
                                        //   </label>

                                        //   <textarea
                                        //     className={SteptwoStyle.getstarted_input}
                                        //     // type="text"
                                        //     placeholder="Short description of the product "
                                        //     rows="5"
                                        //     {...register("moredescription")}
                                        //   ></textarea> */}

                                        //                                     <div className={SteptwoStyle.radio}>
                                        //                                         <label>
                                        //                                             <input
                                        //                                                 type="radio"
                                        //                                                 value="projectowner"
                                        //                                                 className={SteptwoStyle.options}
                                        //                                                 {...register("workers")}
                                        //                                             />
                                        //                                             I worked on this product
                                        //                                         </label>
                                        //                                     </div>

                                        //                                     <div className={SteptwoStyle.radio}>
                                        //                                         <label>
                                        //                                             <input
                                        //                                                 type="radio"
                                        //                                                 value="otherpeople"
                                        //                                                 className={SteptwoStyle.options}
                                        //                                                 {...register("workers")}
                                        //                                             />
                                        //                                             I didn't work on this product
                                        //                                         </label>
                                        //                                     </div>
                                        //                                 </div>
                                        //                             </div>

                                        //                             <div className={SteptwoStyle.link_container}>
                                        //                                 <div className={SteptwoStyle.hr_text}></div>

                                        //                                 <h1 className={SteptwoStyle.link_title}>
                                        //                                     Who worked on this product?
                                        //                                 </h1>

                                        //                                 <div className={SteptwoStyle.product_link_info}>
                                        //                                     <label className={SteptwoStyle.getstartedlabel} htmlFor="">
                                        //                                         This part needs to be filled out if you didn't work
                                        //                                         alone on the project
                                        //                                     </label>

                                        //                                     <input
                                        //                                         className={SteptwoStyle.getstarted_input}
                                        //                                         type="text"
                                        //                                         placeholder="Add with Product Hunt username or Twitter handles "
                                        //                                         {...register("authornames")}
                                        //                                     />
                                        //                                 </div>
                                        //                             </div>

                                        //                             <button
                                        //                                 onClick={() => {
                                        //                                     return setActive("Extras");
                                        //                                 }}
                                        //                                 className="bg-[#f64900] hover:bg-[#f64900] text-[#fff] font-semibold hover:text-[#fff] py-2 px-4 border border-[#f64900] hover:border-transparent rounded"
                                        //                             >
                                        //                                 Next step: Extras
                                        //                             </button>
                                        //                         </div>
                                        //                     </div>

                                        active === 'References' ? (
                                            <div className="MainContent_Container">
                                                <div className="tell_us_title">
                                                    <h1 className={SteptwoStyle.main_tell_title}>
                                                        References
                                                    </h1>

                                                    {/* <p className={SteptwoStyle.sub_tell_us_content}>
                                                            Education
                                                        </p> */}
                                                </div>

                                                <div className={SteptwoStyle.product_form}>
                                                    <div className={SteptwoStyle.product_link_info}>
                                                        <label
                                                            className={SteptwoStyle.getstartedlabel}
                                                            htmlFor=""
                                                        >
                                                            Company Name
                                                        </label>

                                                        <input
                                                            className={SteptwoStyle.getstarted_input}
                                                            type="text"
                                                            placeholder=""
                                                            {...register('companyname')}
                                                        />
                                                    </div>

                                                    <div className={SteptwoStyle.product_link_info}>
                                                        <label
                                                            className={SteptwoStyle.getstartedlabel}
                                                            htmlFor=""
                                                        >
                                                            Contact Person
                                                        </label>

                                                        <input
                                                            className={SteptwoStyle.getstarted_input}
                                                            type="text"
                                                            placeholder=""
                                                            {...register('contactPerson')}
                                                        />
                                                    </div>

                                                    <div className={SteptwoStyle.product_link_info}>
                                                        <label
                                                            className={SteptwoStyle.getstartedlabel}
                                                            htmlFor=""
                                                        >
                                                            Phone Number
                                                        </label>

                                                        <input
                                                            className={SteptwoStyle.getstarted_input}
                                                            type="text"
                                                            placeholder=""
                                                            {...register('Phone Number')}
                                                        />
                                                    </div>

                                                    <div className={SteptwoStyle.product_link_info}>
                                                        <label
                                                            className={SteptwoStyle.getstartedlabel}
                                                            htmlFor=""
                                                        >
                                                            Email Address
                                                        </label>

                                                        <input
                                                            className={SteptwoStyle.getstarted_input}
                                                            type="text"
                                                            placeholder=""
                                                            {...register('emailaddress')}
                                                        />
                                                    </div>

                                                    {/* <div className={SteptwoStyle.product_link_info}>
                                                            <label className={SteptwoStyle.getstartedlabel} htmlFor="">
                                                                City/Town
                                                            </label>

                                                            <input
                                                                className={SteptwoStyle.getstarted_input}
                                                                type="text"
                                                                placeholder="e.g Lagos Nigeria"

                                                                {...register("educity")}
                                                            />
                                                        </div>



                                                        <div className={SteptwoStyle.product_link_info}>
                                                            <label className={SteptwoStyle.getstartedlabel} htmlFor="">
                                                                School
                                                            </label>

                                                            <input
                                                                className={SteptwoStyle.getstarted_input}
                                                                type="text"
                                                                placeholder="e.g Kwara State University"

                                                                {...register("emplyer")}
                                                            />
                                                        </div>



                                                        <div className={SteptwoStyle.product_link_info}>
                                                            <label className={SteptwoStyle.getstartedlabel} htmlFor="">
                                                                Start Date
                                                            </label>

                                                            <input
                                                                className={SteptwoStyle.getstarted_input}
                                                                type="date"
                                                                placeholder="e.g Startdate"

                                                                {...register("startdateedu")}
                                                            />

                                                        </div>



                                                        <div className={SteptwoStyle.product_link_info}>
                                                            <label className={SteptwoStyle.getstartedlabel} htmlFor="">
                                                                End Date
                                                            </label>

                                                            <input
                                                                className={SteptwoStyle.getstarted_input}
                                                                type="date"
                                                                placeholder="e.g enddate"

                                                                {...register("enddateedu")}
                                                            />

                                                        </div>


                                                        <div className={SteptwoStyle.product_link_info}>
                                                            <label className={SteptwoStyle.getstartedlabel} htmlFor="">
                                                                Description
                                                            </label>

                                                            <textarea
                                                                className={SteptwoStyle.getstarted_input}
                                                                type="date"
                                                                placeholder="e.g Award 1"

                                                                {...register("eduaward")}
                                                            />



                                                            <textarea
                                                                className={SteptwoStyle.getstarted_input}
                                                                type="date"
                                                                placeholder="e.g Award 2"

                                                                {...register("eduaward2")}
                                                            />


                                                            <textarea
                                                                className={SteptwoStyle.getstarted_input}
                                                                type="date"
                                                                placeholder="e.g Archviement 3"

                                                                {...register("eduaward3")}
                                                            />














                                                        </div>


 */}

                                                    <button
                                                        // type="submit"
                                                        onClick={() => {
                                                            return setActive('Skills')
                                                        }}
                                                        className="bg-[#f64900] hover:bg-[#f64900] text-[#fff] font-semibold hover:text-[#fff] py-2 px-4 border border-[#f64900] hover:border-transparent rounded"
                                                    >
                                                        Next step: Skills
                                                    </button>
                                                </div>
                                            </div>
                                        ) : active === 'Skills' ? (
                                            <div className="MainContent_Container">
                                                <div className="tell_us_title">
                                                    <h1 className={SteptwoStyle.main_tell_title}>Skills</h1>

                                                    {/* <p className={SteptwoStyle.sub_tell_us_content}>
                                                            Education
                                                        </p> */}
                                                </div>

                                                <div className={SteptwoStyle.product_form}>
                                                    <div className={SteptwoStyle.product_link_info}>
                                                        <label
                                                            className={SteptwoStyle.getstartedlabel}
                                                            htmlFor=""
                                                        >
                                                            Skill
                                                        </label>

                                                        <input
                                                            className={SteptwoStyle.getstarted_input}
                                                            type="text"
                                                            placeholder="e.g. Microsoft Word"
                                                            {...register('skill')}
                                                        />
                                                    </div>

                                                    <div className={SteptwoStyle.product_link_info}>
                                                        <label
                                                            className={SteptwoStyle.getstartedlabel}
                                                            htmlFor=""
                                                        >
                                                            Level
                                                        </label>

                                                        <input
                                                            className={SteptwoStyle.getstarted_input}
                                                            type="text"
                                                            placeholder="Expert"
                                                            {...register('Skilllevel')}
                                                        />
                                                    </div>

                                                    {/* <div className={SteptwoStyle.product_link_info}>
                                                                        <label className={SteptwoStyle.getstartedlabel} htmlFor="">
                                                                            Phone Number
                                                                        </label>

                                                                        <input
                                                                            className={SteptwoStyle.getstarted_input}
                                                                            type="text"
                                                                            placeholder=""

                                                                            {...register("Phone Number")}
                                                                        />
                                                                    </div> */}

                                                    {/* <div className={SteptwoStyle.product_link_info}>
                                                                        <label className={SteptwoStyle.getstartedlabel} htmlFor="">
                                                                            Email Address
                                                                        </label>

                                                                        <input
                                                                            className={SteptwoStyle.getstarted_input}
                                                                            type="text"
                                                                            placeholder=""

                                                                            {...register("emailaddress")}

                                                                        />
                                                                    </div> */}

                                                    {/* <div className={SteptwoStyle.product_link_info}>
                                                            <label className={SteptwoStyle.getstartedlabel} htmlFor="">
                                                                City/Town
                                                            </label>

                                                            <input
                                                                className={SteptwoStyle.getstarted_input}
                                                                type="text"
                                                                placeholder="e.g Lagos Nigeria"

                                                                {...register("educity")}
                                                            />
                                                        </div>



                                                        <div className={SteptwoStyle.product_link_info}>
                                                            <label className={SteptwoStyle.getstartedlabel} htmlFor="">
                                                                School
                                                            </label>

                                                            <input
                                                                className={SteptwoStyle.getstarted_input}
                                                                type="text"
                                                                placeholder="e.g Kwara State University"

                                                                {...register("emplyer")}
                                                            />
                                                        </div>



                                                        <div className={SteptwoStyle.product_link_info}>
                                                            <label className={SteptwoStyle.getstartedlabel} htmlFor="">
                                                                Start Date
                                                            </label>

                                                            <input
                                                                className={SteptwoStyle.getstarted_input}
                                                                type="date"
                                                                placeholder="e.g Startdate"

                                                                {...register("startdateedu")}
                                                            />

                                                        </div>



                                                        <div className={SteptwoStyle.product_link_info}>
                                                            <label className={SteptwoStyle.getstartedlabel} htmlFor="">
                                                                End Date
                                                            </label>

                                                            <input
                                                                className={SteptwoStyle.getstarted_input}
                                                                type="date"
                                                                placeholder="e.g enddate"

                                                                {...register("enddateedu")}
                                                            />

                                                        </div>


                                                        <div className={SteptwoStyle.product_link_info}>
                                                            <label className={SteptwoStyle.getstartedlabel} htmlFor="">
                                                                Description
                                                            </label>

                                                            <textarea
                                                                className={SteptwoStyle.getstarted_input}
                                                                type="date"
                                                                placeholder="e.g Award 1"

                                                                {...register("eduaward")}
                                                            />



                                                            <textarea
                                                                className={SteptwoStyle.getstarted_input}
                                                                type="date"
                                                                placeholder="e.g Award 2"

                                                                {...register("eduaward2")}
                                                            />


                                                            <textarea
                                                                className={SteptwoStyle.getstarted_input}
                                                                type="date"
                                                                placeholder="e.g Archviement 3"

                                                                {...register("eduaward3")}
                                                            />














                                                        </div>


 */}

                                                    <button
                                                        // type="submit"
                                                        onClick={() => {
                                                            return setActive('Images and media')
                                                        }}
                                                        className="bg-[#f64900] hover:bg-[#f64900] text-[#fff] font-semibold hover:text-[#fff] py-2 px-4 border border-[#f64900] hover:border-transparent rounded"
                                                    >
                                                        Next step: Images and media
                                                    </button>
                                                </div>
                                            </div>
                                        ) : active === 'Images and media' ? (
                                            <div className="MainContent_Container">
                                                <div className="tell_us_title">
                                                    <h1 className={SteptwoStyle.main_tell_title}>
                                                        Certificates
                                                    </h1>

                                                    {/* <p className={SteptwoStyle.sub_tell_us_content}>
                                                            Education
                                                        </p> */}
                                                </div>

                                                <div className={SteptwoStyle.product_form}>
                                                    <div className={SteptwoStyle.product_link_info}>
                                                        <label
                                                            className={SteptwoStyle.getstartedlabel}
                                                            htmlFor=""
                                                        >
                                                            Upload your certificate
                                                        </label>

                                                        <input
                                                            className={SteptwoStyle.getstarted_input}
                                                            placeholder="Select an Image"
                                                            {...register('certificateone')}
                                                            type="file"
                                                            multiple
                                                            accept="image/*"
                                                        />
                                                    </div>

                                                    <div className={SteptwoStyle.product_link_info}>
                                                        <label
                                                            className={SteptwoStyle.getstartedlabel}
                                                            htmlFor=""
                                                        >
                                                            Upload your certificate
                                                        </label>

                                                        <input
                                                            className={SteptwoStyle.getstarted_input}
                                                            placeholder="Select an Image"
                                                            {...register('certificatetwo')}
                                                            type="file"
                                                            multiple
                                                            accept="image/*"
                                                        />
                                                    </div>

                                                    {/* <div className={SteptwoStyle.product_link_info}>
                                                                        <label className={SteptwoStyle.getstartedlabel} htmlFor="">
                                                                            Phone Number
                                                                        </label>

                                                                        <input
                                                                            className={SteptwoStyle.getstarted_input}
                                                                            type="text"
                                                                            placeholder=""

                                                                            {...register("Phone Number")}
                                                                        />
                                                                    </div> */}

                                                    {/* <div className={SteptwoStyle.product_link_info}>
                                                                        <label className={SteptwoStyle.getstartedlabel} htmlFor="">
                                                                            Email Address
                                                                        </label>

                                                                        <input
                                                                            className={SteptwoStyle.getstarted_input}
                                                                            type="text"
                                                                            placeholder=""

                                                                            {...register("emailaddress")}

                                                                        />
                                                                    </div> */}

                                                    {/* <div className={SteptwoStyle.product_link_info}>
                                                            <label className={SteptwoStyle.getstartedlabel} htmlFor="">
                                                                City/Town
                                                            </label>

                                                            <input
                                                                className={SteptwoStyle.getstarted_input}
                                                                type="text"
                                                                placeholder="e.g Lagos Nigeria"

                                                                {...register("educity")}
                                                            />
                                                        </div>



                                                        <div className={SteptwoStyle.product_link_info}>
                                                            <label className={SteptwoStyle.getstartedlabel} htmlFor="">
                                                                School
                                                            </label>

                                                            <input
                                                                className={SteptwoStyle.getstarted_input}
                                                                type="text"
                                                                placeholder="e.g Kwara State University"

                                                                {...register("emplyer")}
                                                            />
                                                        </div>



                                                        <div className={SteptwoStyle.product_link_info}>
                                                            <label className={SteptwoStyle.getstartedlabel} htmlFor="">
                                                                Start Date
                                                            </label>

                                                            <input
                                                                className={SteptwoStyle.getstarted_input}
                                                                type="date"
                                                                placeholder="e.g Startdate"

                                                                {...register("startdateedu")}
                                                            />

                                                        </div>



                                                        <div className={SteptwoStyle.product_link_info}>
                                                            <label className={SteptwoStyle.getstartedlabel} htmlFor="">
                                                                End Date
                                                            </label>

                                                            <input
                                                                className={SteptwoStyle.getstarted_input}
                                                                type="date"
                                                                placeholder="e.g enddate"

                                                                {...register("enddateedu")}
                                                            />

                                                        </div>


                                                        <div className={SteptwoStyle.product_link_info}>
                                                            <label className={SteptwoStyle.getstartedlabel} htmlFor="">
                                                                Description
                                                            </label>

                                                            <textarea
                                                                className={SteptwoStyle.getstarted_input}
                                                                type="date"
                                                                placeholder="e.g Award 1"

                                                                {...register("eduaward")}
                                                            />



                                                            <textarea
                                                                className={SteptwoStyle.getstarted_input}
                                                                type="date"
                                                                placeholder="e.g Award 2"

                                                                {...register("eduaward2")}
                                                            />


                                                            <textarea
                                                                className={SteptwoStyle.getstarted_input}
                                                                type="date"
                                                                placeholder="e.g Archviement 3"

                                                                {...register("eduaward3")}
                                                            />














                                                        </div>


 */}

                                                    <button
                                                        // type="submit"
                                                        onClick={() => {
                                                            return setActive('Extras')
                                                        }}
                                                        className="bg-[#f64900] hover:bg-[#f64900] text-[#fff] font-semibold hover:text-[#fff] py-2 px-4 border border-[#f64900] hover:border-transparent rounded"
                                                    >
                                                        Next step: Extras
                                                    </button>
                                                </div>
                                            </div>
                                        ) : active === 'Extras' ? (
                                            <div className="Images_container">
                                                <div className="tell_us_title">
                                                    {/* <h1 className="main_tell_title">Language</h1> */}


                                                    <div className={SteptwoStyle.product_link_info}>
                                                        <label
                                                            className={SteptwoStyle.getstartedlabel}
                                                            htmlFor=""
                                                        >
                                                            Language
                                                        </label>

                                                        <input
                                                            className={SteptwoStyle.getstarted_input}
                                                            type="text"
                                                            placeholder="e.g Yoruba"
                                                            {...register('language')}
                                                        />
                                                    </div>

                                                    <button
                                                        // onClick={() => {
                                                        //   return setActive("");
                                                        // }}
                                                        type="submit"
                                                        className="bg-[#f64900] hover:bg-[#f64900] text-[#fff] font-semibold hover:text-[#fff] py-2 px-4 border border-[#f64900] hover:border-transparent rounded"
                                                    >
                                                        Next step: Download
                                                    </button>

                                                    {/* <p className="sub_tell_us_content">
                                                        Optional, but the community really appreciates
                                                        knowing.
                                                    </p> */}

                                                    {/* <div className={SteptwoStyle.link_container}>
                                                        <div className={SteptwoStyle.hr_text}></div>

                                                        <div className={SteptwoStyle.product_link_info}>
                                                            <div className={SteptwoStyle.radio}>
                                                                <label>
                                                                    <input
                                                                        type="radio"
                                                                        value="free"
                                                                        className={SteptwoStyle.options}
                                                                        {...register('price')}
                                                                    />
                                                                    Free
                                                                </label>
                                                            </div>

                                                            <div className={SteptwoStyle.radio}>
                                                                <label>
                                                                    <input
                                                                        type="radio"
                                                                        value="paid"
                                                                        className={SteptwoStyle.options}
                                                                        {...register('price')}
                                                                    />
                                                                    Paid
                                                                </label>
                                                            </div>

                                                            <div className={SteptwoStyle.radio}>
                                                                <label>
                                                                    <input
                                                                        type="radio"
                                                                        value="paidandfree"
                                                                        className={SteptwoStyle.options}
                                                                        {...register('price')}
                                                                    />
                                                                    Paid with free
                                                                </label>
                                                            </div>
                                                        </div>

                                                    </div> */}
                                                </div>
                                            </div>
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
