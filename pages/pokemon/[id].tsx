import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import { useRouter } from 'next/router'
import { Layout } from '../../components/layouts'

interface Props {
  // pokemons: any;
  id: string;
  name: string;
}

const PokemonPage:NextPage<Props> = ( {id, name }) => {
  const router = useRouter();
  console.log(router.query);

  return (
    <Layout title='Pokemon'>
        <h1>{id} - {name} </h1>
    </Layout>
  )
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes

export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const pokemons151 = [...Array(151)].map( (value, index) => `${index + 1}`);
  console.log({pokemons151});
  

  return {
    paths: pokemons151.map( id => ({
      params: { id }
    })),
    fallback: false
  }
}


export const getStaticProps: GetStaticProps = async (ctx) => {
  
  console.log(ctx.params);

  return {
    props: {
      id: 1,
      name:'Bulbasour'
    }
  }
}


export default PokemonPage