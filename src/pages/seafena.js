import { DefaultSeo } from 'next-seo';
import Head from 'next/head';

const logo = "path/to/zoero-logo.png";

const SEO = () => {
    return (
        <>
            <DefaultSeo
                title={"Zoero"}
                description="In math, we find certainty among variables. Zoero applies this principle to navigate complex business landscapes. Our strategic approach ensures your business thrives in any market condition. Zoero: Navigating complexity with certainty."
                keywords={[]}
                openGraph={{
                    type: 'website',
                    url: 'https://zoero.com/',
                    title: 'Zoero',
                    description: 'In math, we find certainty among variables. Zoero applies this principle to navigate complex business landscapes. Our strategic approach ensures your business thrives in any market condition. Zoero: Navigating complexity with certainty.',
                    site_name: 'Zoero',
                    images: [
                        {
                            url: logo,
                            width: 3200,
                            height: 1920,
                            alt: 'Zoero logo',
                        },
                    ],
                }}
                twitter={{
                    cardType: 'summary_large_image',
                    site: '@zoero',
                    handle: '@zoero',
                    url: 'https://zoero.com/',
                    title: 'Zoero',
                    description: 'In math, we find certainty among variables. Zoero applies this principle to navigate complex business landscapes. Our strategic approach ensures your business thrives in any market condition. Zoero: Navigating complexity with certainty.',
                    image: logo,
                    'tweetmeme-title': 'Zoero',
                }}
                additionalMetaTags={[
                    { name: 'msapplication-TileColor', content: '#ffffff' },
                    { name: 'theme-color', content: '#ffffff' },
                    { name: 'robots', content: 'index, follow' },
                    { name: 'subject', content: 'Business Strategy and Consulting' },
                    { name: 'copyright', content: `Zoero © ${new Date().getFullYear()}` },
                    { name: 'language', content: 'EN' },
                    { name: 'revised', content: '29 July 2024' },
                    { name: 'topic', content: 'Business Strategy, Consulting, Market Analysis, Digital Transformation' },
                    { name: 'summary', content: 'Zoero: Navigating complexity with certainty. Our strategic approach ensures your business thrives in any market condition.' },
                    { name: 'abstract', content: 'Zoero applies mathematical principles to navigate complex business landscapes, ensuring strategic success in any market condition.' },
                ]}
            />

            <Head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: `
      {
        "@context": "http://schema.org",
        "@type": "Organization",
        "name": "Zoero",
        "url": "https://zoero.com/", 
        "logo": "${logo}", 
        "description": "In math, we find certainty among variables. Zoero applies this principle to navigate complex business landscapes. Our strategic approach ensures your business thrives in any market condition.",
        "sameAs": [
          "https://twitter.com/zoero"
        ]
      }
    `,
                    }}
                />
            </Head>
        </>
    );
};




export async function getStaticProps({ locale }) {
    return {
        props: {
            messages: (await import(`../../lang/${locale}.json`)).default,
            locale: locale,
        },
    };
}
export default SEO;

