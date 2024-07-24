
const ZigzagLine = () => {
  return (
    <div className="w-4/5 h-1 relative">
      <div
        className="absolute top-0 left-0 w-full h-full bg-black"
        style={{
          transform: 'skew(45deg)',
        }}
      ></div>
      <div
        className="absolute top-0 left-0 w-full h-full bg-black"
        style={{
          transform: 'skew(-45deg)',
        }}
      ></div>
      <div
        className="absolute top-0 left-0 w-full h-full bg-black"
        style={{
          transform: 'skew(45deg) translateY(6px)',
        }}
      ></div>
      <div
        className="absolute top-0 left-0 w-full h-full bg-black"
        style={{
          transform: 'skew(-45deg) translateY(6px)',
        }}
      ></div>
    </div>
  );
};

export default ZigzagLine;