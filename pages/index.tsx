import { GetServerSideProps, GetStaticProps } from 'next';

export default function Home({ date }) {
  return (
    <>
      <h2>{date}</h2>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  //const response = await fetch('https://api.github.com/users/diego3g/repos');

  //const data = await response.json();
  //const repositoryNames = data.map((item) => item.name);

  return {
    props: {
      //repositories: repositoryNames,
      date: new Date().toISOString(),
    },
    revalidate: 5,
  };
};
