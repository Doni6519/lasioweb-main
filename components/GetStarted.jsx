import Link from "next/link";

const GetStarted = () => {
  return (
    <>
      <section id="get_started" className="my-10 px-5">
        <div className="flex flex-col md:flex-row text-white justify-around items-center h-44">
          <h1 className="text-2xl text-center md:text-start">Ready to Get Started? Let's get it sheduled.</h1>
          <Link href="/contact"><button className="hover:bg-blue-800 hover:border-blue-900 border-solid border-2 border-white-600 p-2 md:p-3 rounded-3xl text-base">
            WORK WITH US
          </button></Link>
        </div>
      </section>
    </>
  );
};

export default GetStarted;
