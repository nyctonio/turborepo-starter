import type { NextPage } from 'next';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import prisma from 'database';

const Home: NextPage = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      {data.map((item: any, index: any) => (
        <div key={index}>
          <h1>{item.name}</h1>
        </div>
      ))}
    </div>
  );
};

// server side rendering
export const getServerSideProps: GetServerSideProps = async (context) => {
  await prisma.user.create({
    data: {
      name: 'John Doe',
    },
  });
  const data = await prisma.user.findMany();
  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    },
  };
};
export default Home;
