
import { Puff } from "@agney/react-loading";

const Loading = () => {
  return (
    <div className="h-screen flex justify-center items-center md:m-auto md:ml-[56px]">
      <div className="loading">
        <Puff className="puff" width="70" />
      </div>
    </div>
  );
};

export default Loading;