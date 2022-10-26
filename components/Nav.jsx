/* This Nav requires Tailwind CSS v2.0+ */
import { Fragment, useContext, useEffect, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { json, useNavigate } from 'react-router-dom'
import NavStyle from '../styles/Nav.module.css'
import { useRouter } from 'next/router'
import { Cloudinary } from '@cloudinary/url-gen'
import { AdvancedImage } from '@cloudinary/react'
import { fill } from '@cloudinary/url-gen/actions/resize'
import { thumbnail } from '@cloudinary/url-gen/actions/resize'
import { byRadius } from '@cloudinary/url-gen/actions/roundCorners'
import { focusOn } from '@cloudinary/url-gen/qualifiers/gravity'
import { FocusOn } from '@cloudinary/url-gen/qualifiers/focusOn'

// import { UserLoginContext } from '../../Components/Context/LoginUserContext'
// import { useAuthContext } from '../../Components/Context/AuthContext'

export default function Nav() {
  // let navigate = useNavigate()
  const [clicked, setClicked] = useState(false)
  const [loggedinuserdetails, setLoggedinUserdetails] = useState(false)
  const [signnedin, setSigneedIn] = useState(false)
  const router = useRouter()
  const [alldata, setAlldata] = useState([])
  //   const {
  //     setUserdetails,
  //   loggedinuserdetails,
  //   setLoggedinUserdetails,
  //   } = useContext(UserLoginContext)
  //   const [loggedinuser, setLoggedinUser] = useState()
  //   const [username, setUserName] = useState()
  //   const [imageUrl, setImageUrl] = useState()

  //   const { dbUser, setDbuser } = useAuthContext()

  //   const getUser = async () => {
  //     const models = await DataStore?.query(User)

  //     setUserName(
  //       models?.find((x) => x?.email === loggedinuser?.attributes?.email),
  //     )

  //     setLoggedinUserdetails(
  //       models?.find((x) => x?.email === loggedinuser?.attributes?.email),
  //     )

  //     let newObject = localStorage?.getItem('user_logged_in')

  //     setLoggedinUser(JSON?.parse(newObject))

  //     setLoggedinUserdetails(JSON?.parse(newObject))

  //     if (
  //       models.find((x) => x.email === Auth?.user?.attributes?.email) ===
  //         undefined ||
  //       models.find((x) => x.email === Auth?.user?.attributes?.email) === false ||
  //       models.find((x) => x.email === Auth?.user?.attributes?.email) === null
  //     ) {
  //     }
  //   }

  //   const getImageUrl = async () => {
  //     const Url = await Storage?.get(loggedinuserdetails?.userimage)

  //     setImageUrl(Url)
  //   }

  //   useEffect(() => {
  //     getImageUrl()

  //     // console.log( JSON.parse(localStorage.getItem("user_logged_in")), " JSON.parse(localStorage.getItem)")

  //     if (localStorage?.getItem('user_logged_in') === undefined) {
  //       setLoggedinUserdetails()
  //     }
  //     getUser()

  //     // console.log(dbUser, "dbuser")
  //   }, [username, imageUrl, localStorage])

  useEffect(() => {
    let newObjectuser = JSON.parse(localStorage?.getItem('user_id'))
    newObjectuser?.unique_id !== ' ' ? setSigneedIn(true) : setSigneedIn(false)

    fetch('/api/fetchall', {
      headers: { 'Content-Type': 'application/json' },
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response, 'response allllll')
        setAlldata(
          response?.filter((x) => x?.unique_id === newObjectuser.unique_id),
        )
        setClicked(!clicked)
      })
      .catch((err) => console.error(err))

    // console.log(newObjectuser.unique_id, 'emaillll')
  }, [])

  return (
    <Disclosure as="nav" className="bg-[#fff]">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden ">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div
                onClick={() => router.push('/')}
                className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
              >
                <div className="flex flex-shrink-0 items-center">
                  <div className="w-10 h-10  notshow bg-[#DA552F] text-[#fff] rounded-full border-2 border-[#DA552F] flex justify-center items-center">
                    <p>QCV</p>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div>
                  {signnedin && alldata.length !== 0 ? (
                    <div className="loggedincontent flex gap-2 items-center justify-center relative ">
                      <div
                        // onClick={() =>
                        //   navigate('/productform', {
                        //     state: {
                        //       Loggedindata: dbUser,
                        //     },
                        //   })
                        // }

                        className="submit_text"
                      >
                        <h1
                          onClick={() => router.push('/preview')}
                          className="submit_main_text text-[#e12e0d] cursor-pointer"
                        >
                          My CV
                        </h1>
                      </div>

                      <div
                        // onClick={() => navigate('/productform')}
                        className="submit_text"
                      >
                        <h1 className="submit_main_text text-[#000000] cursor-pointer">
                          Hello,
                        </h1>
                      </div>

                      <div
                        onClick={() => setClicked(!clicked)}
                        className=" w-8 h-8  cursor-pointer"
                      >
                        <img
                          className=" cursor-pointer rounded-full border border-gray-100 shadow-sm"
                          src={alldata[0]?.Profile_Photo_Url}
                          alt="userimage"
                        />
                      </div>
                      {console.log(alldata, 'alldata')}

                      {/* {alldata.map((x, i) => {
                        return (
                          <AdvancedImage
                            cldImg={cld
                              .image(`${x?.Public_id}`)
                              .resize(
                                fill()
                                  .width(100)
                                  .height(100)
                                  .gravity(focusOn(FocusOn.faces())),
                              )}
                          />
                        )
                      })} */}

                      {clicked && (
                        // <div className="dropdownmenu top-12 cursor-pointer   absolute">
                        <div className="dropdownmenu top-12 cursor-pointer   absolute">
                          <div
                            onClick={() => {
                              return router.push('/stepone')
                            }}
                          >
                            <h1>Craete CV</h1>
                          </div>

                          <div
                            onClick={() => {
                              return router.push('/'), localStorage.clear()
                            }}
                          >
                            <h1>Logout</h1>
                          </div>

                          {/* <div>
                            <h1>My products</h1>
                          </div>

                          <div>
                            <h1>Settings</h1>
                          </div> */}

                          <div
                          // onClick={() => {
                          //   return (
                          //     setUserdetails(),
                          //     navigate('/'),
                          //     Auth.signOut(),
                          //     setClicked(!clicked),
                          //     localStorage.clear('user_logged_in'),
                          //     localStorage.clear(),
                          //     setLoggedinUserdetails()
                          //   )
                          // }}
                          >
                            {/* <h1>Logout</h1> */}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                      <div className="flex  items-center  flex-wrap gap-8 cursor-pointer ">
                        <div>
                          <button
                            onClick={() => {
                              return router.push('/signup')
                            }}
                            href="/"
                            className="bg-[#f64900] hover:bg-[#f64900] text-[#fff] font-semibold hover:text-[#fff] py-2 px-4 border border-[#f64900] hover:border-transparent rounded"
                          >
                            Sign Up
                          </button>
                        </div>

                        <div>
                          <button
                            onClick={() => {
                              return router.push('/login')
                            }}
                            href="/"
                            className="bg-[#f64900] hover:bg-[#f64900] text-[#fff] font-semibold hover:text-[#fff] py-2 px-4 border border-[#f64900] hover:border-transparent rounded"
                          >
                            Login
                          </button>
                        </div>

                        {/* <div
                          onClick={() => {
                            return router.push('/preview')
                          }}
                        >
                          My CV
                        </div>

                        <div
                          onClick={() => {
                            return router.push('/stepone')
                          }}
                        >
                          Create CV
                        </div> */}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              <Disclosure.Button>
                <div className="w-10 h-10 bg-[#DA552F] text-[#fff] rounded-full border-2 border-[#DA552F] flex justify-center items-center">
                  <p>PH</p>
                </div>
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
