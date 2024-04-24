const DarkArrow = ({ active }: { active: boolean }) => {
  return (
    <>
      {!active ? (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="20" r="20" fill="url(#paint0_linear_14239_69539)" />
          <path
            d="M20 15.502L27.5 23.002L26.45 24.052L20 17.602L13.55 24.052L12.5 23.002L20 15.502Z"
            fill="#F0F5FF"
          />
          <defs>
            <linearGradient
              id="paint0_linear_14239_69539"
              x1="0"
              y1="0"
              x2="44.4376"
              y2="5.75912"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.00621719" stop-color="#4C2997" />
              <stop offset="1" stop-color="#150A35" />
            </linearGradient>
          </defs>
        </svg>
      ) : (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="20" r="20" transform="rotate(-180 20 20)" fill="#824BEA" />
          <path
            d="M20 24.498L12.5 16.998L13.55 15.948L20 22.398L26.45 15.948L27.5 16.998L20 24.498Z"
            fill="#F0F5FF"
          />
        </svg>
      )}
    </>
  )
}

export default DarkArrow
