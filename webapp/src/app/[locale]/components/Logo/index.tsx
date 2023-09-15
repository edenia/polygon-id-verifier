import React from 'react'

type LogoProps = {
  width?: string | number
  height?: string | number
}

const LogoIcon: React.FC<LogoProps> = ({ width = 426, height = 150 }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={width}
    height={height}
    viewBox='0 -10 372.71 69.36'
    preserveAspectRatio='xMidYMid meet'
  >
    <defs>
      <style>
        {`
          .cls-1 {
            fill: #fff;
            stroke-width: 0px;
          }
        `}
      </style>
    </defs>
    <path
      className='cls-1'
      d='m63.71,60.63V.3c.38,0,.74,0,1.11,0,7.28,0,14.57-.03,21.85.01,4.66.02,9.25.57,13.62,2.35,7.73,3.15,12.79,8.88,15.02,16.99,2.4,8.7,2.16,17.39-1.45,25.75-2.88,6.67-7.97,11.03-14.72,13.38-3.8,1.32-7.74,1.86-11.74,1.88-7.67.03-15.33.01-23,.01-.19,0-.38-.02-.69-.05Zm11.37-10.32c1.37,0,2.67.03,3.97,0,4.25-.12,8.53.05,12.73-.47,6.14-.76,10.42-4.26,12.34-10.38,1.63-5.2,1.63-10.51.52-15.82-1.52-7.26-6.34-11.86-13.53-12.58-3.57-.36-7.19-.24-10.79-.31-1.72-.03-3.44,0-5.23,0v39.58Z'
    />
    <path
      className='cls-1'
      d='m251.19,61c-.77-.42-1.42-.62-1.87-1.04-12.59-11.54-25.16-23.1-37.74-34.66-.11-.1-.24-.18-.51-.39v35.7h-11.22V0c.76.41,1.43.62,1.9,1.06,12.4,11.59,24.77,23.2,37.15,34.81.28.26.57.5,1.01.89V.39h11.28v60.61Z'
    />
    <path
      className='cls-1'
      d='m43.44,60.6c0-3.43,0-6.73,0-10.14-10.73,0-21.4,0-32.18,0,0-5.06,0-10.02,0-15.12,9.51,0,18.99,0,28.53,0,0-3.46,0-6.79,0-10.2-9.52,0-18.98,0-28.53,0,0-4.88,0-9.69,0-14.6,10.71,0,21.39,0,32.15,0,0-3.44,0-6.77,0-10.19-14.46,0-28.89,0-43.41,0,0,20.04,0,40.11,0,60.24,14.47,0,28.9,0,43.44,0Z'
    />
    <path
      className='cls-1'
      d='m180.03,10.53h-32.18v15.03h28.53v10.24h-28.53v14.6h32.18v10.21h-43.44V.38h43.44v10.15Z'
    />
    <path
      className='cls-1'
      d='m360.99,60.68c-3.97,0-7.76.02-11.55-.03-.37,0-.89-.4-1.07-.75-1.3-2.56-2.55-5.14-3.77-7.74-.32-.67-.68-.98-1.47-.97-8.66.03-17.32.03-25.98,0-.79,0-1.15.3-1.46.97-1.21,2.6-2.45,5.19-3.72,7.77-.16.32-.55.72-.84.73-3.87.05-7.73.03-11.72.03.18-.42.29-.74.44-1.04,9.74-19.41,19.48-38.83,29.25-58.23.22-.45.74-1.03,1.12-1.02.36,0,.84.62,1.07,1.07,9.73,19.33,19.44,38.67,29.15,58.02.17.34.32.69.56,1.2Zm-39.28-19.61h16.85c-2.8-6.07-5.55-12-8.39-18.15-2.87,6.16-5.63,12.08-8.46,18.15Z'
    />
    <path className='cls-1' d='m272.06,13.81h11.15v46.78h-11.15V13.81Z' />
    <path className='cls-1' d='m272.06.36h11.15v10.5h-11.15V.36Z' />
    <path
      className='cls-1'
      d='m367.8,59.37c.45,0,.89.06,1.31.18s.81.29,1.17.5c.36.22.69.48.99.78.3.3.55.64.77,1.01.21.37.38.77.5,1.19s.18.87.18,1.33-.06.9-.18,1.32-.28.82-.5,1.19c-.21.37-.47.7-.77,1.01-.3.31-.63.57-.99.78s-.75.38-1.17.5c-.42.12-.85.18-1.31.18s-.89-.06-1.3-.18c-.42-.12-.81-.29-1.17-.5s-.69-.48-.99-.78c-.3-.3-.55-.64-.77-1.01-.21-.37-.38-.76-.49-1.19s-.18-.87-.18-1.33.06-.9.18-1.33.28-.82.49-1.19c.21-.37.47-.71.77-1.01s.63-.57.99-.78c.36-.22.75-.38,1.17-.5.42-.12.85-.18,1.3-.18Zm0,9.19c.38,0,.74-.05,1.08-.15.35-.1.67-.24.97-.42s.57-.4.82-.65c.25-.25.46-.53.63-.85.17-.31.31-.65.4-1,.09-.36.14-.73.14-1.12s-.05-.77-.14-1.13c-.1-.36-.23-.7-.4-1.01s-.38-.6-.63-.85c-.25-.25-.52-.47-.82-.66-.3-.18-.62-.32-.97-.42s-.71-.15-1.08-.15-.74.05-1.08.15c-.34.1-.66.24-.96.42-.3.18-.57.4-.81.66-.24.26-.45.54-.62.85s-.31.65-.4,1.01-.14.74-.14,1.13c0,.59.1,1.13.31,1.64.21.51.49.95.85,1.33.36.38.78.67,1.27.89.49.22,1.01.32,1.57.32Zm-.03-7.24c.83,0,1.44.15,1.82.45.39.3.58.74.58,1.3,0,.4-.1.75-.31,1.05s-.52.52-.95.65c.1.06.18.14.25.23.07.09.13.19.2.31l1.2,2.08h-1.36c-.2,0-.34-.07-.42-.22l-.96-1.78c-.04-.06-.09-.11-.15-.15-.06-.03-.14-.05-.25-.05h-.37v2.2h-1.43v-6.07h2.14Zm-.13,2.84c.23,0,.42-.02.56-.06.14-.04.26-.1.34-.17.08-.08.14-.17.17-.28.03-.11.05-.24.05-.39s-.01-.26-.04-.37c-.03-.11-.08-.19-.15-.26s-.17-.12-.3-.16c-.13-.03-.29-.05-.5-.05h-.71v1.74h.58Z'
    />
  </svg>
)

export default LogoIcon
