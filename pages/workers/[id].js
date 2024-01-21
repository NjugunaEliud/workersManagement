
export const getStaticPaths = async ()=>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users')

    const data = await response.json()

    const paths = data.map(worker =>{
        return{
            params:{id:worker.id.toString()}
        }
    })
    

    return{
        paths,
        fallback:false
    }
}
export const getStaticProps = async (context) =>{
    const id = context.params.id;
    const response = await fetch('https://jsonplaceholder.typicode.com/users/' + id)

    const data = await response.json()

    return{
        props:{worker : data}
    }
}
const Details = ({worker}) => {
    return ( 
        <div>
            <h1>{worker.name}</h1>
            <p>{worker.website}</p>
            <p>{worker.email}</p>
            <p>{worker.phone}</p>
        </div>
     );
}
 
export default Details;