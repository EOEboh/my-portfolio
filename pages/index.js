import Head from 'next/head';
import Image from 'next/image';
import ContainerBlock from '../components/ContainerBlock';
import Hero from '../components/Hero';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
      <ContainerBlock 
        title='Emmanuel Eboh'
        description="I'm a Front-End Developer and Technical Writer">
          <Hero />
      </ContainerBlock>
  )
}

export default Home;