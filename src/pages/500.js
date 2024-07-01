import React from 'react'

function ServerError() {
  return (
    <div>404</div>
  )
}

export default ServerError



export async function getStaticProps({ locale }) {
    return {
      props: {
        messages: (await import(`../../lang/${locale}.json`)).default,
        locale: locale,
      },
    };
  }