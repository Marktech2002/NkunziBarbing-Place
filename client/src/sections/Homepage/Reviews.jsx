import { reviews } from "../../constants";

const Reviews = () => {
  return (
    <section id="reviews">
      <div className="flex flex-col gap-1 items-center justify-center font-display mt-28">
        <hr className="w-[50%] mt-1" />
        <p className="text-2xl font-bold md:text-3xl">MAKING PEOPLE AWESOME</p>
        <hr className="w-[50%] mt-1" />
      </div>
      <div className="flex gap-[20px] mt-[50px] items-center justify-center flex-col font-display md:flex-row md:gap-20 md:mr-10 md:mt-[100px]">
        {reviews.map((item) => (
          <div key={item.no} className="bg-bgLight px-5 w-fit rounded-lg">
            <h3 className="my-3 text-grayColor font-medium">{item.no}</h3>
            <p className="font-medium text-large max-w-[220px]">{item.label}</p>
            <hr className="bg-grayColor h-[2px] w-[100%] mx-auto my-6" />
            <h4 className="text-grayColor pb-3 font-bold">{item.user}.</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
