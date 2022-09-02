import { GetStaticPaths, GetStaticProps } from 'next';

export default function Blog({ date }) {
  return (
    <>
      <h4>{date}</h4>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      date: new Date().toISOString(),
    },
    revalidate: 5,
  };
};
