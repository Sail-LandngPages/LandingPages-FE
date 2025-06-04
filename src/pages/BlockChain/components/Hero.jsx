import React from 'react'
import '../../../styles/tailwind.css'
import ellipse from '../../../assets/images/svg/ellipse.svg'


import eth from '../../../assets/images/svg/eth.svg'
import btc from '../../../assets/images/svg/btc.svg'
import cosmos from '../../../assets/images/svg/cosmos.svg'

import shiba from '../../../assets/images/svg/shiba.svg'
import ava from '../../../assets/images/svg/ava.svg'
import poly from '../../../assets/images/svg/poly.svg'

const rings = [
  {
    id: 1,
    size: 520,
    ethSize: 40,
    orbitDistance: 260,
    orbitReverse: false,
    icons: [eth, btc, cosmos],
  },
  {
    id: 2,
    size: 460,
    ethSize: 30,
    orbitDistance: 230,
    orbitReverse: true,
    icons: [shiba, ava, poly],
  },
  {
    id: 3,
    size: 400,
    ethSize: 25,
    orbitDistance: 200,
    orbitReverse: false,
    icons: [cosmos, shiba, btc],
  },
  {
    id: 4,
    size: 340,
    ethSize: 18,
    orbitDistance: 170,
    orbitReverse: true,
    icons: [poly, eth, shiba],
  },
]

const Hero = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative" style={{ width: rings[0].size, height: rings[0].size }}>
        {/* Central Text + Buttons */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-4">
          <p className="sora text-[12px] mb-2 text-amber-300 font-bold">
            They say “buy the dip,” we say: code the chain.
          </p>
          <h1 className="text-2xl font-bold text-gray-800 mb-4 w-[200px] raleway">
            Don't Just HODL Your Dreams — Build Them.
          </h1>
          <div className="flex gap-4">
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
              Apply Now
            </button>
            <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Ring Elements */}
        {rings.map(({ id, size, ethSize, orbitDistance, orbitReverse, icons }) => (
          <div
            key={id}
            className="absolute top-1/2 left-1/2 rounded-full flex items-center justify-center"
            style={{
              width: size,
              height: size,
              marginTop: -size / 2,
              marginLeft: -size / 2,
            }}
          >
            {/* Rotating Ellipse */}
            <div className="absolute inset-0 spin-slow flex items-center justify-center">
              <img
                src={ellipse}
                alt={`Ellipse ${id}`}
                className="w-full h-full object-contain opacity-30"
                style={{
                  filter:
                    'invert(29%) sepia(85%) saturate(2845%) hue-rotate(243deg) brightness(88%) contrast(87%)',
                }}
              />
            </div>

            {/* 3 Unique Orbiting Icons per Ring */}
            {icons.map((icon, i) => (
              <div
                key={i}
                className={`absolute orbit ${orbitReverse ? 'reverse' : ''}`}
                style={{
                  width: ethSize,
                  height: ethSize,
                  '--orbit-distance': `${orbitDistance}px`,
                  animationDuration: `${6 + i * 2}s`,
                  transform: `rotate(${i * 120}deg) translateX(var(--orbit-distance)) rotate(-${i * 120}deg)`,
                }}
              >
                <img src={icon} alt={`Icon-${id}-${i}`} className="w-full h-full" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hero
