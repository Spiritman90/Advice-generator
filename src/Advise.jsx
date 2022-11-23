import Dice from "./icons/Dice";
import { useGetAdviceQuery } from "./api/apiSlice";

function Advise() {
  const { data: advice, refetch } = useGetAdviceQuery();

  const handleClick = () => {
    refetch();
  };
  return (
    <>
      <div className="sm:flex justify-center items-center mt-16 px-6">
        <div className="h-96 max-w-96 rounded-lg bg-darkGrayishBlue p-7 lg:mt-24 lg:max-w-[32rem] lg:h-[20rem] relative">
          <p className="text-green text-center uppercase font-montserrat font-small tracking-widest mt-9">
            Advice #{advice?.slip?.id}
          </p>

          <p className="text-center text-cyan font-bold mt-2 font-montserrat text-2xl sm:mt-6">
            "{advice?.slip?.advice}"
          </p>

          <div
            className=" absolute cursor-pointer hover:shadow-2xl  hover:shadow-green bg-green sm:mt-12  h-[4.5rem] w-[4.5rem] rounded-full py-6 px-6 lg:mt-6  lg: bottom-[-3rem] sm:bottom-[-2] left-0 right-0 my-0 mx-auto"
            onClick={handleClick}
          >
            <Dice />
          </div>
        </div>
      </div>
    </>
  );
}

export default Advise;
