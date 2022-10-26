import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">

    </div>
  );
};

// server side rendering
export async function getServerSideProps() {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${process.env.API_KEY}`);
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
}
export default Home;
