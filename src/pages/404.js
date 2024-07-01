import React from 'react'

function FourOFour() {
  return (
    <div>404</div>
  )
}

export default FourOFour



export async function getStaticProps({ locale }) {
    return {
      props: {
        messages: (await import(`../../lang/${locale}.json`)).default,
        locale: locale,
      },
    };
  }