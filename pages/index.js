import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../comps/navbar'
import Footer from '../comps/footer'
import Link from 'next/link'

export default function Home() {
  return (
    <> <Head>
    <title>Workers Managenent | Home</title>
    <meta name="keywords" content="ninjas"/>
  </Head>
    <div>
      <h1 className={styles.title}>HomePage</h1>
      <p className={styles.text}>Welcome to AquaEmps Ltd, your premier solution for streamlined employee data management. Our platform offers a comprehensive suite of features designed to simplify every aspect of workforce administration. From seamless onboarding processes to centralized storage of employee data, AquaEmps Ltd provides robust tools for attendance tracking, performance management, and secure accessibility from anywhere. Experience heightened productivity and gain valuable insights into your team's performance. AquaEmps Ltd is your partner in efficiency, ensuring that managing employee data is not only effortless but also enhances the overall functionality of your organization. Sign up today and embark on a journey of optimized workforce management with AquaEmps Ltd.</p>
      <Link href="/workers" className={styles.btn}>
        Employees List
      </Link>
    </div>
    </>
  )
}
