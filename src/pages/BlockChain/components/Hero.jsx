import React from 'react'
import '../../../styles/tailwind.css'
import ellipse from '../../../assets/images/svg/ellipse.svg'
import eth from '../../../assets/images/svg/eth.svg'

const rings = [
  { id: 1, size: 320, ethSize: 20, orbitDistance: 160, orbitReverse: false },
  { id: 2, size: 260, ethSize: 18, orbitDistance: 130, orbitReverse: true },
  { id: 3, size: 200, ethSize: 16, orbitDistance: 100, orbitReverse: false },
  { id: 4, size: 140, ethSize: 14, orbitDistance: 70, orbitReverse: true },
  { id: 5, size: 80, ethSize: 12, orbitDistance: 40, orbitReverse: false },
]

const Hero = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative" style={{ width: rings[0].size, height: rings[0].size }}>
        {rings.map(({ id, size, ethSize, orbitDistance, orbitReverse }) => (
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

            {/* Orbiting ETH */}
            <div
              className={`absolute orbit ${orbitReverse ? 'reverse' : ''}`}
              style={{
                width: ethSize,
                height: ethSize,
                '--orbit-distance': `${orbitDistance}px`,
              }}
            >
              <img src={eth} alt={`Ethereum Icon ${id}`} className="w-full h-full" />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hero
