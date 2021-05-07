import Head from 'next/head';

import styles from '../sytles/home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio | Ig.news</title>
      </Head>
      <h1 className={styles.title}>
        Hello World
      </h1>
    </>
  )
}
