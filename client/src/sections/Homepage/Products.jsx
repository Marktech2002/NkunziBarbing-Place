import { bottleCap, kelheirBottle } from "../../assets/img";
import ZigzagLine from "../../components/zigzag";

const Products = () => {
  return (
    <section id="products" className="">
      <div className="flex flex-col gap-8 justify-center items-center mt-5 md:flex-row md:gap-[200px]" >
        <div className="mr-[130px] mt-10">
          <div className="w-[150px] absolute h-[90px] border-2 border-black md:hidden"></div>
          <img
            src={kelheirBottle}
            className="w-[240px] -mt-[50px] -mr-[75px] rotate-12 md:w-[420px]"
            alt="Kehlier Bottle"
          />
        </div>
        <div className="font-display md:mr-14">
          <h3 className="text-[40px] font-semibold leading-none max-w-[300px]">
            UNLEASH YOUR SWAGGER
          </h3>
          <p className="max-w-[210px] mb-4">
            Much more than just cutting chair. Details and passion for creating
            unique style.
          </p>
          <ZigzagLine/>
        </div>
        <div className="mr-12 mt-5 hidden md:block">
            <p>WITH THE NKUNZICUTS.</p>
            <img src={bottleCap} className="w-[240px]" alt="cap bottles" />
        </div>
      </div>
    </section>
  );
};

export default Products;
