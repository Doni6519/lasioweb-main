import Image from "next/image";
import Nav from "@/components/Navblack";
const blog = () => {
  return (
    <>
      <Nav color="text-black hover:text-blue-500"/>
      <section className="w-5/6 flex flex-col md:flex-row justify-between items-center">
        <div className="me-5 align-middle order-2 md:order-1">
          <h1 className="text-4xl text-center mt-5 md:mt-0 uppercase font-bold">
            blog
          </h1>
          <p className="w-5/6 m_auto text-center mt-1">
            Get a wide range of knowledge around computer and other related
            technology.
          </p>
        </div>
        <div className="ms-5">
          <Image
            className="rounded-md"
            src="/assets/images/services/services.jpg"
            width={500}
            height={500}
          />
        </div>
      </section>
      <section className="flex flex-col md:flex-row justify-between items-center w-5/6 md:w-4/6 min-h-24" id="posts">
        <div className="basis-3/4 order-last sm:order-first">
          <h1 className="text-3xl">All Posts</h1>
          <div className="ms-2">
            <h1 className="text-2xl">No post yet</h1>
          </div>
        </div>
        <div className="text-3xl hidden md:block">Browse Topics</div>
      </section>
    </>
  );
};

export default blog;
