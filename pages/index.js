import React, {useState,useEffect} from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@components/styles/Home.module.css'
import PageLayOut from '@components/components/layout/PageLayOut'
import InformationData from '@components/components/data/InformationData'



const inter = Inter({ subsets: ['latin'] })


 function Home({data}) {

  const [matches, setMatches] = useState([data])
console.log(data);

  return (

    <PageLayOut tittle='Agenda Deportiva'>
      <main className={styles.main}>
        <h1 className={styles.h1}> AGENDA DEPORTIVA JC</h1>

        <>
          {/* {matches.map((match)=>(
            <div key={match.id}>{match.name}</div>
          ))} */}
          <InformationData matches={matches}/>
        </>
      </main>
    </PageLayOut>
  )
}

export async function getServerSideProps(){
    
  const respuesta = await fetch('https://api.football-data.org/v4/competitions/CL/matches', {
      headers: {
        'X-Auth-Token': '48065b12e0e3482e991eafb907d5dc7b',
      },
    });
  const data = await respuesta.json()
  return {
          props:{
              data
          }
      }
}



export default Home
