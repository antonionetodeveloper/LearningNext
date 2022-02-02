import Head from 'next/head'
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'

import { Header, Main, Footer } from '../styles/home'
import { Button } from '../styles/Assets/button'

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Escolinha</title>
      </Head>

    
      <Header>
        <h1>Escolinha</h1>
        <Button isLinkedTo="https://loginui-azure.vercel.app" text="Acessar"/>
      </Header>


      <Main>
        <section>
          <div data-aos="fade-left">
            <h2>Quem somos ?</h2>
            <p>
              Somos a Escolinha, escola apaixonada por 
              ensinar com excelência, disponibilizando 
              a melhor equipe de professores para sempre 
              dar ao seu filho o melhor ensino do mundo!
            </p>
          </div>
          <Image
            data-aos="fade-left"
            src="/whoWeAre.svg"
            width="500"
            height="500"
            alt='Quem somos ?'
          />
        </section>

        <section className='mobile_reversed'> 
          <Image
            data-aos="fade-right"
            src="/teacher.svg"
            width="500"
            height="500"
            alt='Quem somos ?'
            />
          <div data-aos="fade-right">
            <h2>Equipe de professores</h2>
            <p>
              De todas as áreas do conhecimento e com 
              sênioridades, com a melhor didática para 
              qualquer pessoa conseguir aprender qualquer 
              coisa.
            </p>
          </div>
        </section>

        <section>
          <div data-aos="fade-left">
            <h2>Segurança</h2>
            <p>
              Tomando os devidos cuidados com a COVID-19 
              para manter todos nós seguros e acima de tudo 
              com saúde.
            </p>
          </div>
          <Image
            data-aos="fade-left"
            src="/students.svg"
            width="500"
            height="500"
            alt='Quem somos ?'
          />
        </section>
      </Main>

      
      <Footer>
        <a href="https://storyset.com/event">illustrations by Storyset</a>
      </Footer>
    </>
  )
}
