export default function Border() {
  const stripeStyle = {
    backgroundImage: `repeating-linear-gradient(
      -45deg,
      rgba(255,255,255,0.025) 0px,
      rgba(255,255,255,0.025) 1px,
      transparent 1px,
      transparent 8px
    )`,
    width: "12px",
  };

  return (
    <>
      {/* Left Border */}
      <div
        className="fixed top-0 bottom-0 left-1/2 -translate-x-[340px] pointer-events-none hidden md:block"
        style={stripeStyle}
      />

      {/* Right Border */}
      <div
        className="fixed top-0 bottom-0 left-1/2 translate-x-[340px] pointer-events-none hidden md:block"
        style={stripeStyle}
      />
    </>
  );
}