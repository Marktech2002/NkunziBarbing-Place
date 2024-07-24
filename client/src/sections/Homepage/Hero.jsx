import Button from "../../components/Button";
import { arrowRight } from "../../assets/icons";
import { barbingChair } from "../../assets/img";

const Hero = () => {
  return (
    <section
      id="home"
      className="font-display flex justify-center items-center min-h-screen ml-[55px] space-x-9 flex-col p-2 lg:flex-row md:ml-11"
    >
      <div className="relative flex flex-col justify-center items-start -mt-[400px] w-full ml-12 px-8 pt-28 sm:py-24 py-12 md:-mt-[200px]">
        <p className=" mt-[65px] text-xl text-grayColor tracking-wider -ml-20 sm:-ml-8">
          {" "}
          Our Barbing Salon
        </p>
        <h1 className="mt-10 mb-10 text-7xl -tracking-wider font-bold -ml-20 md:-ml-10 md:text-8xl">
          <span>MAKE</span>
          <br />
          <span className="ml-14">UNIQUE</span>
          <br />
          <span>STYLE</span>
        </h1>
        <Button label="Book An Appointment" iconURL={arrowRight} />
      </div>
      <div className="relative -right-[60px] top-[100px] font-display -mt-[300px] flex justify-center flex-col items-center md:right-64 md:top-0">
        <h2 className="whitespace-nowrap text-grayColor font-semibold text-lg ">
          HAIR STYLIST
          <br />
        </h2>
        <p className="whitespace-nowrap block font-bold ">IDRIS ZUBAIR AWEDA</p>
      </div>
      <div className="relative flex justify-center items-center right-[70px] -top-[140px] md:-top-[100px]">
        <div className="flex justify-center items-end">
          <img
            src={barbingChair}
            alt="Barbing chair"
            className="object-contain w-[120px] z-10 relative md:w-[180px] md:-mt-[300px] ml-[200px]"
          ></img>
          <ul className="whitespace-nowrap mb-9 text-[10px] font-bold space-y-1 space-x-6 indent-0.5 -mt-[200px] md:font-extrabold md:text-base">
            <li>- Saloon Service</li>
            <li>- Barbing</li>
            <li>- Grooming</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
