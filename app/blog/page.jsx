import Link from "next/link";
import Newsletter from "@/components/Newsletter";

const blog = () => {
  return (
    <>
      <div className="flex items-center md:flex-row p-5 md:p-10 justify-between bg-green-800 h-screen">
        <div id="" className="basis-4/4 md:basis-2/4 text-white md:ms-20">
          <h1 className="font-bold text-4xl mt-20 md:mt-0">Blog</h1>
          <p className="text-2xl mt-3">
            Get a wide range of knowledge around computer and other related
            technology.
          </p>
        </div>
      </div>
      <section
        className="flex flex-col md:flex-row justify-between items-center w-5/6 md:w-4/6 min-h-24"
        id="posts"
      >
        <div className="basis-3/4 order-last sm:order-first">
          <h1 className="text-3xl">All Posts</h1>
          <div className="ms-2">
            <h1 className="text-2xl">No post yet</h1>
          </div>
        </div>
        <div className="text-3xl hidden md:block">Browse Topics</div>
      </section>
      <Newsletter background="bg-green-800" button="bg-green-700" hover="hover:bg-green-500" />
    </>
  );
};

export default blog;
