import Link from 'next/link';
import styles from '../../styles/Workers.module.css'
export const getStaticProps = async () =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users')

    const data = await response.json()

    return{
        props:{workers : data}
    }
}

const Workers = ({workers}) => {
    return ( 
        <div>
        <h1>All Workers</h1>
        {
            workers.map(worker => (
                <Link href={`/workers/${worker.id} `}  key={worker.id} >
                        <h3  className={styles.single}>{worker.name}</h3> 
                </Link>
            ))
        }
        </div>
     );
}
 
export default Workers;
