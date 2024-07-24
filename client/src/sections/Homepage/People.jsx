import { Barbingbarber, Sketchscissors } from "../../assets/img";
import { Link } from "react-router-dom";
const People = () => {
  return (
    <section id="Barbing Waa">
      <div className="flex mt-5 flex-col justify-center items-center gap-8 md:gap-20 md:flex-row">
        <img
          src={Barbingbarber}
          className="w-72 md:w-[540px]"
          alt="Barbing Barber"
        />
        <div className="font-display md:-mt-[110px] md:mr-14">
          <h3 className="text-[40px] font-semibold leading-none max-w-[320px]">
            EXPERIENCE THE ART OF BARBING.
          </h3>
          <p className="max-w-[220px] mr-10">
            Barbing an ancient art form that old passed down from generation and
            the styling of men hair , facial hair , and the scalp. The art of
            barbing has evolved over time and has become a cultural and social
            experience.
          </p>
          <Link to="/">
            {" "}
            <h4 className="font-semibold">GET MAKEOVER ☞</h4>
          </Link>
        </div>
        <div className="">
          <img src={Sketchscissors} className="w-[120px] md:w-[240px]" alt="" />
        </div>
      </div>

      <div className="mx-auto max-w-2xl lg:text-center font-display">
        <h2 className="text-4xl mt-[80px] ml-2  bg font-bold leading-7">
          Subscribe today.
        </h2>
        <hr className="w-[50%] ml-3 mt-4 md:ml-[200px]" />
        <p className="mt-5 ml-3 text-xl font-bold tracking-wider text-gray-900 sm:text-4xl md:mt-10">
          Unlock premium features and exclusive perks with our Barbering Plans!
          Subscribe today to elevate your grooming experience💈✂️ .
        </p>
        <p className="mt-6 text-lg leading-[19px] text-gray-600">
          Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
          Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
          In mi viverra elit nunc.
        </p>
      </div>
    </section>
  );
};

export default People;
