import { FC } from 'react';

import Head from "next/head"
import { NavBar } from '../ui';

interface Props {
    children: JSX.Element,
    title?: string;
}

export const Layout: FC<Props> = ( { children, title } ) => {
  return (
    <>
        <Head >
            <title> Pokedex Alanis  </title>
            <meta name='autor' content='Emmanuel Alanis'/>
            <meta name="description" content={`Informacion del pokemons ${ title } App `}/>
            <meta name='keywords' content={`${ title }, pokemon, pokedex`}/>
        </Head>

        <NavBar />
        <main style={{
          padding: '0 20px',
          display: 'flex',
        }}>
            { children }
        </main>

    </>
  )
}
