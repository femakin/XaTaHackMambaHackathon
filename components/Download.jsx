import React, { useContext, useState } from 'react'
import Previewstyle from '../styles/Preview.module.css'
import { useRouter } from 'next/router'
import { GlobalContext } from '../context/globalContext'
import { Cloudinary } from '@cloudinary/url-gen'
import { AdvancedImage } from '@cloudinary/react'
import { fill } from '@cloudinary/url-gen/actions/resize'
import { thumbnail } from '@cloudinary/url-gen/actions/resize'
import { byRadius } from '@cloudinary/url-gen/actions/roundCorners'
import { focusOn } from '@cloudinary/url-gen/qualifiers/gravity'
import { FocusOn } from '@cloudinary/url-gen/qualifiers/focusOn'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { CiLocationOn } from 'react-icons/ci'
import { useEffect } from 'react'
import Nav from './Nav'

const Download = React.forwardRef((props, ref) => {
  const router = useRouter()
  const { user, setUser, loggedinuser, setLoggedinuser } = useContext(
    GlobalContext,
  )
  const [loading, setLoading] = useState(false)

  const [alldata, setAlldata] = useState()

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'femakin',
    },
  })

  const myImage = cld.image(`${alldata?.Public_id}`)

  cld
    .image(`${alldata?.Public_id}`)
    .resize(fill().width(100).height(100).gravity(focusOn(FocusOn.faces())))

  myImage.resize(
    fill().width(100).height(100).gravity(focusOn(FocusOn.faces())),
  )

  useEffect(() => {
    console.log(loggedinuser, 'loggedinuser')
    console.log(user, 'user---inside preview')

    const validuser = loggedinuser?.data?.id

    let newObjectuser = JSON.parse(localStorage.getItem('user_id'))
    console.log(validuser, 'validuser')

    setLoading(false)

    router.replace('/preview', undefined, { shallow: true })

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
        setLoading(true)
      })
      .catch((err) => console.error(err))
  }, [])

  return (
    <div>
      {!loading ? (
        <h1>loading....</h1>
      ) : (
        <div ref={ref}>
          {console.log(alldata, 'alldattttttt')}
          {alldata.map((x, i) => {
            return (
              <section className={Previewstyle.top_summary}>
                <section className={Previewstyle.right_details}>
                  <div className={Previewstyle.full_nameandrole}>
                    <div className={Previewstyle.fullname}>
                      <h1>{x?.Full_name}</h1>
                    </div>

                    <div className={Previewstyle.role}>
                      {' '}
                      <h2>{x?.Role}</h2>
                    </div>
                  </div>

                  <div className={Previewstyle.titleandcontacts}>
                    <div className={Previewstyle.contacts}>
                      <div className={Previewstyle.mobile}>
                        <div>
                          <BsFillTelephoneFill />
                        </div>
                        <div>{x?.Phone_number}</div>
                      </div>

                      <div className={Previewstyle.email}>
                        <div>
                          <MdOutlineAlternateEmail />
                        </div>
                        <div>{x?.Email}</div>
                      </div>

                      <div className={Previewstyle.address}>
                        <div>
                          <CiLocationOn />
                        </div>
                        <div>{x?.Address}</div>
                      </div>
                    </div>
                  </div>
                </section>

                <section className={Previewstyle.top_img}>
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
                </section>
              </section>
            )
          })}
        </div>
      )}
    </div>
  )
})

export default Download
