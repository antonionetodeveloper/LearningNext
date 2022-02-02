import Head from 'next/head'
import Image from 'next/image'
import { Header, Main, Footer } from '../styles/home'


export default function Home() {
  return (
    <>
      <Head>
        <title></title>
      </Head>


      <Header>
        <nav>
          <a href='#inicio'><p>HOME</p>  </a>
          <a href='#sobre'><p>SOBRE</p>  </a>
          <a href='#contato'><p>CONTATO</p></a>
        </nav>
      </Header>

      <Main>
        <section className='banner' id='inicio'>
          <video autoPlay muted loop className="backgroundVideo">         
              <source src="./bannerfullquality.mp4" type="video/mp4"/>
          </video>
          <div>
            <h1>Fotos profissionais</h1>
            <p>Venha profissionalizar sua imagem conosco!</p>
          </div>
        </section>

        <section>
          <section className='content' id='sobre'>
            <div>
              <h2>Quem somos</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Corporis vel, dignissimos qui excepturi a at rem minima 
                illum eligendi repudiandae optio ratione tenetur illo 
                tempora libero. Repellat officia pariatur fugit.
              </p>  
            </div>
            <Image
              src="/team.jpg"
              alt=""
              height={400}
              width={600}
            />
          </section>

          <section className='content' id='contato'>
            <Image
              src="/contact.jpg"
              alt=""
              height={400}
              width={600}
            />
            <div>
              <h2>Contato</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Corporis vel, dignissimos qui excepturi a at rem minima 
                illum eligendi repudiandae optio ratione tenetur illo 
                tempora libero. Repellat officia pariatur fugit.
              </p>  
            </div>
          </section>
        </section>
      </Main>

      <Footer>
        <h3>Feito por: <a href="https://antonionetodeveloper.github.io/Portfolio/" target="_blank" rel="noreferrer">Dev Antonio Fernandes</a></h3>
      </Footer>
    </>
  )
}
