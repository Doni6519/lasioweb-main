import Link from "next/link";
import Newsletter from "@/components/Newsletter";
import BackgroundVideo from "next-video/background-video";

const blog = () => {
  return (
    <>
      <BackgroundVideo
        src="https://res.cloudinary.com/dj2ybe6v0/video/upload/v1728897796/Blue_White_3D_Project_Plan_Business_Presentation_29_ypygtc.mp4"
        className="h-screen w-full max-w-screen-2xl bg-green-800"
      >
        <div id="" className="max-w-xl md:-ms-80 text-white">
          <h1 className="font-bold text-4xl mt-20 md:mt-0">Blog</h1>
          <p className="text-2xl mt-3">
            Get a wide range of knowledge around computer and other related
            technology.
          </p>
        </div>
      </BackgroundVideo>
      <section
        className="flex flex-col gap- md:flex-row justify-between w-5/6 min-h-24"
        id="posts"
      >
        <div className="basis-2/3">
          <h1 className="text-3xl mb-5">All Posts</h1>
            <div class="max-w me-10 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Who is a UX Designer
                </h5>
              </a>
              <div className="flex gap-5 my-5 text-sm">
                <p>
                  <span className="font-bold">Published:</span> March 18, 2024
                </p>
                <p>
                  <span className="font-bold">Category:</span> Design
                </p>
                <p>
                  <span className="font-bold">Author:</span> Meshack Daniel
                </p>
              </div>
              <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
                Go to this step by step guideline process on how to certify for
                your weekly benefits:
              </p>
            </div>
        </div>
        <div className="basis-1/3">
          <h1 className="text-3xl hidden md:block">Browse Topics</h1>
          <ul className="mt-2">
            <li className="py-1">🤑 Money</li>
            <li className="py-1">🛠 Tech</li>
            <li className="py-1">🚀 Productivity</li>
            <li className="py-1">🚀 Design</li>
            <li className="py-1">🚀 Programming</li>
          </ul>
        </div>
      </section>
      <Newsletter
        background="bg-green-800"
        button="bg-green-700"
        hover="hover:bg-green-500"
      />
    </>
  );
};

export default blog;
