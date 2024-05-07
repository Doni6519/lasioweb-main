import Image from "next/image";
import GetStarted from "../../components/GetStarted"
import Link from "next/link";
// import Nav from "@/components/Navblack";
const services = () => {
  return (
    <>
    {/* <Nav color="text-black hover:text-blue-500"/> */}
    <div id="top_black" className="bg-black h-20 pb-2 top-0 absolute w-full -z-10"></div>
      <section className="w-5/6 flex flex-col md:flex-row justify-between items-center">
        <div className="me-5 align-middle order-last md:order-1">
            <h1 className="text-4xl text-center mt-5 md:mt-0">SERVICES</h1>
            <p className="w-5/6 m_auto text-center mt-1">Get a wide range of knowledge around computer and other related technology.</p>
        </div>
        <div className="ms-5">
            <Image className="rounded-md" src="/assets/images/services/services.jpg" width={500} height={500}/>
        </div>
      </section>
      <section className="w-5/6 mb-10">
        <h1 className="line_in_middle mb-10 text-xl m_extra">Services We Offer</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="max-w-sm p-6">
            <Image src="/assets/images/services/web-design.png" width={50} height={50} />
            <a href="#">
              <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Website Design & Development
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Go to this step by step guideline process on how to certify for
              your weekly benefits:
            </p>
             <Link rel="stylesheet" href="/services/web-design-development" className="inline-flex items-center text-blue-600 hover:underline">
              Learn More
              <svg
                class="w-3 h-3 ml-2.5"
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
            </Link>
          </div>
          {/* SECOND ITEM */}
          <div class="max-w-sm p-6">
          <Image src="/assets/images/services/seo.svg" width={50} height={50} />
            <a href="#">
              <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Search Engine Optimization
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Go to this step by step guideline process on how to certify for
              your weekly benefits:
            </p>
            <Link rel="stylesheet" href="/services/search-engine-optimization" className="inline-flex items-center text-blue-600 hover:underline">
              Learn More
              <svg
                class="w-3 h-3 ml-2.5"
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
            </Link>
          </div>
          {/* THIRD ITEM */}
          <div class="max-w-sm p-6">
          <Image src="/assets/images/services/digital-marketing.svg" width={50} height={50} />
            <a href="#">
              <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Digital Marketing
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Go to this step by step guideline process on how to certify for
              your weekly benefits:
            </p>
            <Link rel="stylesheet" href="/services/digital-marketing" className="inline-flex items-center text-blue-600 hover:underline">
              Learn More
              <svg
                class="w-3 h-3 ml-2.5"
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
            </Link>
          </div>
          {/* FOURTH ITEM */}
          <div class="max-w-sm p-6">
          <Image src="/assets/images/services/branding-logo.svg" width={50} height={50} />
            <a href="#">
              <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Branding and Logo Design
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Go to this step by step guideline process on how to certify for
              your weekly benefits:
            </p>
            <Link rel="stylesheet" href="/services/branding-and-logo" className="inline-flex items-center text-blue-600 hover:underline">
              Learn More
              <svg
                class="w-3 h-3 ml-2.5"
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
            </Link>
          </div>
          {/* FIFTH ITEM */}
          <div class="max-w-sm p-6">
          <Image src="/assets/images/services/social-media-marketing.svg" width={50} height={50} />
            <a href="#">
              <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Social Media Marketing
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Go to this step by step guideline process on how to certify for
              your weekly benefits:
            </p>
            <Link rel="stylesheet" href="/services/social-media-marketing" className="inline-flex items-center text-blue-600 hover:underline">
              Learn More
              <svg
                class="w-3 h-3 ml-2.5"
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
            </Link>
          </div>
          {/* SIXTH ITEM */}
          <div class="max-w-sm p-6">
          <Image src="/assets/images/services/infrastructure.svg" width={50} height={50} />
            <a href="#">
              <h5 class="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                IT infrastructure
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Go to this step by step guideline process on how to certify for
              your weekly benefits:
            </p>
            <Link rel="stylesheet" href="/contact" className="inline-flex items-center text-blue-600 hover:underline">
              Contact Us
              <svg
                class="w-3 h-3 ml-2.5"
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
            </Link>
          </div>
        </div>
      </section>
      <GetStarted />
    </>
  );
};

export default services;
