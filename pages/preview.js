import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { GlobalContext } from '../context/globalContext'
// import BasicInfoProvider, { useBasicInfoContext } from './basicInfo'
import { getXataClient } from '../utils/xata.codegen'
import Previewstyle from '../styles/Preview.module.css'
import { Cloudinary } from '@cloudinary/url-gen'
import { AdvancedImage } from '@cloudinary/react'
import { fill } from '@cloudinary/url-gen/actions/resize'
// Import required actions and qualifiers.
import { thumbnail } from '@cloudinary/url-gen/actions/resize'
import { byRadius } from '@cloudinary/url-gen/actions/roundCorners'
import { focusOn } from '@cloudinary/url-gen/qualifiers/gravity'
import { FocusOn } from '@cloudinary/url-gen/qualifiers/focusOn'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { CiLocationOn } from 'react-icons/ci'
import Downloadandpreview from '../components/Downloadandpreview'
import { useRef } from 'react'
import Download from '../components/Download'
import { useReactToPrint } from 'react-to-print'
import html2canvas from 'html2canvas'
import { jsPDF } from 'jspdf'
import Nav from '../components/Nav'
import Link from 'next/link'

function Preview() {
  const componentRef = useRef()
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    pageStyle: ' size: 2.5in 4in ',
  })

  const [signnedin, setSigneedIn] = useState(false)
  const router = useRouter()

  useEffect(() => {
    let newObjectuser = JSON.parse(localStorage?.getItem('user_id'))
    newObjectuser?.unique_id !== ' ' ? setSigneedIn(!signnedin) : setSigneedIn(!signnedin)


    if (JSON.parse(localStorage?.getItem('user_id')) === '' || JSON.parse(localStorage?.getItem('user_id')) === undefined || JSON.parse(localStorage?.getItem('user_id')) === null) {

      router.push('/')
    } else {

      router.push('/preview')
    }



  }, [])



  const Redirect = () => window.location.href = '/'



  return (

    <>




      <section>
        {


          <>
            < Nav />

            <div className={Previewstyle.previewcontainer}>
              <Downloadandpreview onClick={handlePrint} />

              <Download ref={componentRef} />
            </div>

          </>

          // :

          // <Redirect />





        }
      </section >







    </>







  )
}

export default React.forwardRef(Preview)
