import { GetServerSideProps } from 'next/types'
import React, { FC, useEffect } from 'react'
import Nav from '../components/Nav'
import { getXataClient } from '../utils/xata.codegen'
// import { authorize } from '../util/Authorize'



// type Props = Awaited<ReturnType<typeof getServerSideProps>>['props']





const Index = ({ items }) => {

  useEffect(() => {



    fetch('/api/getuser', {
      headers: { 'Content-Type': 'application/json' },
      method: 'GET',
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response, 'user details')

      })
      .catch((err) => console.error(err))


  }, [])



  return (
    <div>
      <Nav />

      <h1 className='text-center' >

        Welcome to Quick CV

      </h1>

    </div>
  )
}

export default Index



// export const getServerSideProps = async ({ req, res }) => {
//   const { isAuthenticated, username } = await authorize(req)


//   if (isAuthenticated) {
//     const xata = getXataClient();
//     const items = await xata.db.basic_info.getMany();


//     return {
//       props: {
//         items,
//       }
//     }
//   } else {
//     res.writeHead(401, { "WWW-Authenticate": "Basic realm='login Required" })
//     return { redirect: { destination: "/home", permanent: false } }
//   }



// }







