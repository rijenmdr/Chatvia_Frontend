import Head from 'next/head';

interface IProps {
  title: string;
}

const PageHead = ({ title }: IProps) => {
  return (
    <Head>
      <title>{title ? `${title} | Chatvia` : 'Chatvia'}</title>
    </Head>
  );
};

export default PageHead;
