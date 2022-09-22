import PatternMobile from "./icons/PatternMobile";
import PatternDesktop from "./icons/PatternDesktop";
import Dice from "./icons/Dice";
import { useGetAdviceQuery } from "./api/apiSlice";
import Loading from "./Loading";

function Advise() {
  const { data: advice, refetch, isLoading } = useGetAdviceQuery();

  const handleClick = () => {
    refetch();
  };
  return (
    <>
      <div className="sm:flex justify-center items-center mt-16 px-6">
        <div className="h-96 w-96 rounded-lg bg-darkGrayishBlue p-7 lg:mt-24 lg:w-[32rem] lg:h-[20rem] relative">
          {isLoading && (
            <div className="lg:flex justify-center lg:ml-[-80rem]">
              <Loading />
            </div>
          )}
          <p className="text-green text-center uppercase font-montserrat font-small tracking-widest mt-9">
            Advice #{advice?.slip?.id}
          </p>

          <p className="text-center text-cyan font-bold mt-2 font-montserrat text-2xl">
            "{advice?.slip?.advice}"
          </p>

          <div className="lg:mt-8 lg:block sm:hidden">
            <PatternDesktop />
          </div>
          <div className="sm:block sm:mt-6 lg:hidden">
            <PatternMobile />
          </div>
          <div
            className=" cursor-pointer hover:shadow-2xl  hover:shadow-green bg-green sm:mt-12 sm:ml-28 h-[4.5rem] w-[4.5rem] rounded-full py-6 px-6 lg:mt-6 lg:ml-[11.7rem] lg:absolute bottom-[-3rem] sm:absolute sm:bottom-[-2]"
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
