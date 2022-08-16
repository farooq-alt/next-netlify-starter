import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
       I am currently pursuing Ph.D in Computer Science Engineering, currently working as a scientist SAC and held the position of the student ambassador (Educational and Research) of Computer Society of India and am also a Member of IEEE. I have played an integral role in organizing more than 4 International Conferences in India as the Organizing Chair and edited more than 80 Book Volumes from Springer LNCS, AISC. I am active in research in the areas of Quantum computing, Machine Learning, extraterrestrial learning and Cognitive Sciences. I have developed two new optimization algorithms known as Social Group Optimization (SGO), published in Springer Journal, I have delivered a number of Keynote addresses and Tutorials in my areas of expertise in various events in India. I have more than 15 publications in the field computing and physical sciences. I was awarded the couple wards in Leadership, Academia Award and 3 national and international awards in field of research. current ptojects parellel computing and propeller systems  <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
