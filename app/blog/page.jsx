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
        className="flex flex-col md:flex-row justify-between items-center w-5/6 md:w-4/6 min-h-24"
        id="posts"
      >
        <div className="order-last sm:order-first">
          <h1 className="text-3xl mb-5">All Posts</h1>
          <div className="ms-">
            <div class="max-w p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Who is a UX Designer
                </h5>
              </a>
              <div className="grid grid-cols-3">
                <p>
                  <span className="font-bold">Published:</span> March 18, 2024
                </p>
                <p>
                  <span className="font-bold">Category:</span> March 18, 2024
                </p>
                <p>
                  <span className="font-bold">Author:</span> March 18, 2024
                </p>
              </div>
              <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
                Go to this step by step guideline process on how to certify for
                your weekly benefits:
              </p>
              <a
                href="#"
                class="inline-flex font-medium items-center text-blue-600 hover:underline"
              >
                See our guideline
                <svg
                  class="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="text-3xl hidden md:block">Browse Topics</div>
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
