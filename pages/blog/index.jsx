import Layout from "../../components/Layout"
import Link from 'next/link'

export default function index({data}) {
  return (
    <Layout>
        <h1>Lista de Posts</h1>
		{
			data.map( ({id,title,body})=> (
				<div key={id}>
					<Link href={`/blog/${id}`}>
						<h3>{id} - {title}</h3>
					</Link>
					<p>{body}</p>
				</div>
			))		
		}
        
    </Layout>
  )
}

//Esto se ejecuta solo en el servidor antes de regresar el HTML estatico
export async function getStaticProps() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
	const data = await res.json()
	
	return {
		props: {data}
	}
  } catch (error) {
    console.log(error);
  }
}

//Obtener datos en el momento de la solicitud
//export async function getServerSideProps(context) {
