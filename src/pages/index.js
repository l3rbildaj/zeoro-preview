import Layout from "@/components/Layout/Layout";


export default function Home() {
 

  return (
    <Layout>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`../../lang/${locale}.json`)).default,
      locale: locale,
    },
  };
}
