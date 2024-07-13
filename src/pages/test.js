import MobileShuffle from '@/components/home/MobileShuffle'
import React from 'react'

function test() {
  return (
    <div>
        <MobileShuffle />
    </div>
  )
}

export default test

export async function getStaticProps({ locale }) {
    return {
      props: {
        messages: (await import(`../../lang/${locale}.json`)).default,
        locale: locale,
      },
    };
  }
  