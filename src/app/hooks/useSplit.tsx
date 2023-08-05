const useSplit = (string: string, addDelay: number = 0) => {
  return string.split('').map((char, idx) => (
    <span
      data-duration={0.75}
      data-delay={addDelay !== 0 ? idx * 0.025 + addDelay : idx * 0.025}
      className="reveal"
      key={idx}
    >
      {char === ' ' ? <div className="letter-hidden">f</div> : char}
    </span>
  ))
}
export default useSplit
