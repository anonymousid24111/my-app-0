import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Trang chủ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Chào mừng đến với <a>www.giasutructuyen.edu.vn!</a>
        </h1>
        <Link href="/student/login"><a>Đăng nhập với tư cách học sinh</a></Link>
        <Link href="/teacher/login"><a>Đăng nhập với tư cách giáo viên</a></Link>
        <Link href="/signup"><a>Đăng kí thành viên</a></Link>
        
        
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
