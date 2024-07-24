import { scissorComb, theGuy } from "../../assets/img";

const Flex = () => {
  return (
    <section className="max-container font-display -mt-[200px]">
      <div className="flex flex-col justify-center items-start gap-10 md:flex-row md:ml-20 md:gap-1 md:items-center">
        <div className="ml-12">
          <h5 className="">BLOG-</h5>
          <p className="whitespace-nowrap text-[13px] md:text-lg">
            {" "}
            LATEST GROOMING SOLUTIONS & TIPS
          </p>
          <hr className="w-[80%] h-2 bg-black" />
        </div>
        <img src={theGuy} className="ml-5 md:-mt-[300px] md:ml-11" alt="the guy pics" />
        <span className="w-[150px] h-[220px] bg-yellow-300 absolute left-[120px] -bottom-[145px] -z-10 md:hidden"></span>

        <div className="ml-[20%] md:-mt-[180px]">
          <img src={scissorComb} alt="Scissor and comb" className="w-[240px]" />
          <div className="-ml-10 font-semibold bg-slate-100 whitespace-nowrap px-1 border-[5px] border-x-rose-950 hover:translate-x-4">OUR SPECIAL <span className="pl-12 underline decoration-solid">HAIRCUTS</span></div>
        </div>
      </div>
    </section>
  );
};

export default Flex;
