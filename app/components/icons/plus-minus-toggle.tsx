const PlusToggle = ({ active }: { active: boolean }) => {
  return (
    <>
      <svg
        width="41"
        height="40"
        viewBox="0 0 41 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20.5" cy="20" r="20" fill="#7A4BD3" />
        {active ? (
          <path d="M26.5 20.752H14.5V19.252H26.5V20.752Z" fill="#F0F5FF" />
        ) : (
          <path
            d="M21.25 19.252V14.002H19.75V19.252H14.5V20.752H19.75V26.002H21.25V20.752H26.5V19.252H21.25Z"
            fill="#F0F5FF"
          />
        )}
      </svg>
    </>
  )
}
export default PlusToggle
