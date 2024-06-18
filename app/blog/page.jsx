import Link from "next/link";
import Newsletter from "@/components/Newsletter";
import BackgroundVideo from "next-video/background-video";

const blog = () => {
  return (
    <>
      <BackgroundVideo
        src="https://res.cloudinary.com/dxmpvvt2k/video/upload/v1718683982/ditfjxyqgryuvmiobklx.mp4"
        className="h-screen w-full max-w-screen-2xl"
      >
        <div className="h-screen w-screen max-w-screen-2xl bg-green-800 absolute top-0 -z-10"></div>
        <div id="" className="text-white w-screen max-w-screen-2xl ms-10 md:ms-20">
          <h1 className="font-bold text-4xl mt-20 md:mt-0">Blog</h1>
          <p className="text-2xl mt-3 w-4/6 md:w-3/6">
            Get a wide range of knowledge around computer and other related
            technology.
          </p>
        </div>
      </BackgroundVideo>
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
      <Newsletter background="bg-green-800" />
    </>
  );
};

export default blog;
