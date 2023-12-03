import React from 'react'
import Image from 'next/image'
import { LinkParticles } from './particles'
import { TypeAnimation } from 'react-type-animation'

export default function HeroSection() {
  return (
    <section className="text-white lg:py-16 relative overflow-hidden">
      <LinkParticles />
      <article className="grid grid-cols-1 sm:grid-cols-12 relative">
        <div className="col-span-12 sm:col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Bienvenidos a mi blog!
            </span>
          </h1>
          <br />

          <TypeAnimation
            sequence={[
              'Explorando la historia',
              2000,
            ]}
            wrapper="span"
            speed={10}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
          />
        </div>
        <div className="col-span-12 sm:col-span-4 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
            <Image
              src="/images/hero-image.webp"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
              style={{ zIndex: 1 }}
            />
          </div>
        </div>
      </article>
    </section>
  )
}


// className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"