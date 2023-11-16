import Image from "next/image";

const page = () => {
  return (
    <div className="text-sm">
      <div id="about_home" className="hero">
        <div id="hero_text">
          <h1 className="font-bold uppercase">About us</h1>
          <p className="text-2xl mt-3">
            We are experienced web designers who solve problems and grow
            businesses.
          </p>
        </div>
      </div>
      <section className="first_item_extra w-5/6 md:w-3/6">
        <h1 className="text-center text-xl md:text-4xl font-bold">
          Who We Are
        </h1>
        <p className="mt-5 text-center sm:text-start md:text-start  ">
          Welcome to LasioWeb! We are a dynamic team of creative individuals
          with a passion for web design, logo and branding, search engine
          optimization (SEO), and social media marketing. Our mission is to help
          businesses establish a strong online presence and reach their full
          potential in the digital world.
        </p>
        <h1 className="text-center text-xl md:text-4xl font-bold mt-10">
          Our Expertise
        </h1>
        <h2 className="mt-5 text-base sm:text-2xl font-bold">Web Design</h2>
        <p className="mt-3">
          We believe that a website is the digital face of your business. Our
          team of experienced web designers is dedicated to creating visually
          appealing and user-friendly websites that reflect your brand's
          identity and values.
        </p>
        <h2 className="mt-5 text-base sm:text-2xl font-bold">
          Logo and Branding
        </h2>
        <p className="mt-3">
          Your logo and branding are the first things that people notice about
          your business. At LasioWeb, we create unique and memorable logos and
          branding elements that effectively communicate your brand's
          personality and make you stand out from the competition.
        </p>
        <h2 className="mt-5 text-base sm:text-2xl font-bold">
          Search Engine Optimization (SEO)
        </h2>
        <p className="mt-3">
          In today's digital age, visibility on search engines is crucial for
          your business's success. Our SEO experts use proven strategies to
          improve your website's ranking on search engine results pages,
          increasing your visibility and driving more traffic to your site.
        </p>
        <h2 className="mt-5 text-base sm:text-2xl font-bold">
          Social Media Marketing
        </h2>
        <p className="mt-3">
          Social media platforms are powerful tools for reaching and engaging
          with your target audience. Our social media marketing team helps you
          leverage these platforms to build relationships with your audience,
          increase brand awareness, and drive more traffic to your website.
        </p>
        <h2 className="mt-5 text-base sm:text-2xl font-bold">Our Commitment</h2>
        <p className="mt-3">
          At LasioWeb, we are committed to delivering high-quality services that
          meet our clients' needs. We work closely with our clients throughout
          the process, ensuring that the final product aligns with their vision
          and goals. Your success is our success! Join us on this exciting
          journey to digital excellence!
        </p>
        <p className="mt-3 font-bold uppercase">Welcome to LasioWeb!</p>
      </section>
      <section className="w-5/6">
        <div className="grid grid-cols-1 md:grid-cols-2 vision_mission">
          <div className="bg-slate-200 h-80 img hidden md:block">
            <Image
              src={"/assets/images/about/vision.png"}
              width={700}
              height={500}
              style={{ height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="h-80 p-10 text vision">
            <h1 className="text-center text-2xl font-bold">Vision Statement</h1>
            <p className="mt-3">
              To be the first brand that comes to anybody who thinks of a web
              development agency.
            </p>
          </div>
          <div className="h-80 p-10 text vision mt-10">
            <h1 className="text-center text-2xl font-bold">
              Mission Statement
            </h1>
            <p className="mt-3">
              Our mission is to craft digital experiences through innovative
              website design to connect businesses with their audience in
              meaningful and engaging ways.
            </p>
          </div>
          <div className="bg-slate-200 h-80 img mt-10 hidden md:block">
            <Image
              src={"/assets/images/about/mission.png"}
              width={700}
              height={500}
              style={{ height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>
      <section>
        <h1 className="text-center text-2xl font-bold">Our Values</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 text-center slide_on_hover">
          <div className="slide_item">
            <div id="more_services_1" className="items-center text-white ">
              <div
                className="flex flex-col items-center first"
                style={{ margin: "auto" }}
              >
                <div className="mb-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    fill="#fff"
                    class="bi bi-laptop"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
                  </svg>
                </div>
                <div className="text-center w-full ">
                  <h1 className="text-base font-bold">
                    Website Design & Development
                  </h1>
                </div>
              </div>
              <div className="second">
                <h1 className="text-base md:text-base lg:text-xl md:font-bold p-4 lg:p-6 lg:block lg:hidden">
                  Web Design & Development
                </h1>
                <h1 className="text-base md:text-base lg:text-xl md:font-bold p-4 lg:p-6 hidden lg:block">
                  Web Design & Dev...
                </h1>
                <p className="flex">
                  <svg
                    className="w-3 h-3 mt-1 text-white dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 8 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                    />
                  </svg>
                  <span>Consultation</span>
                </p>
                <p className="flex">
                  <svg
                    className="w-3 h-3 mt-1 text-white dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 8 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                    />
                  </svg>
                  <span>Wireframe</span>
                </p>
                <p className="flex">
                  <svg
                    className="w-3 h-3 mt-1 text-white dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 8 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                    />
                  </svg>
                  <span>Final Design</span>
                </p>
              </div>
            </div>
          </div>

          <div className="slide_item">
            <div id="more_services_2" className="items-center  text-white ">
              <div
                className="flex flex-col items-center first"
                style={{ margin: "auto" }}
              >
                <div className="mb-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    fill="#fff"
                    class="bi bi-layers"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.235 1.559a.5.5 0 0 0-.47 0l-7.5 4a.5.5 0 0 0 0 .882L3.188 8 .264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l2.922-1.559a.5.5 0 0 0 0-.882l-7.5-4zm3.515 7.008L14.438 10 8 13.433 1.562 10 4.25 8.567l3.515 1.874a.5.5 0 0 0 .47 0l3.515-1.874zM8 9.433 1.562 6 8 2.567 14.438 6 8 9.433z" />
                  </svg>
                </div>
                <div className="text-center w-full ">
                  <h1 className="text-base font-bold">Logo & Branding</h1>
                </div>
              </div>
              <div className="second">
                <h1 className="text-base md:text-base lg:text-xl md:font-bold p-4 lg:p-6">
                  Logo & Branding
                </h1>
                <p className="flex">
                  <svg
                    className="w-3 h-3 mt-1 text-white dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 8 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                    />
                  </svg>
                  <span>Exploration</span>
                </p>
                <p className="flex">
                  <svg
                    className="w-3 h-3 mt-1 text-white dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 8 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                    />
                  </svg>
                  <span>Sketches</span>
                </p>
                <p className="flex">
                  <svg
                    className="w-3 h-3 mt-1 text-white dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 8 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                    />
                  </svg>
                  <span>Digitigation</span>
                </p>
                <p className="flex">
                  <svg
                    className="w-3 h-3 mt-1 text-white dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 8 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                    />
                  </svg>
                  <span>Color</span>
                </p>
                <p className="flex">
                  <svg
                    className="w-3 h-3 mt-1 text-white dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 8 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                    />
                  </svg>
                  <span>Final Logo</span>
                </p>
              </div>
            </div>
          </div>

          <div className="slide_item">
            <div id="more_services_3" className="items-center  text-white ">
              <div
                className="flex flex-col items-center first"
                style={{ margin: "auto" }}
              >
                <div className="mb-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    fill="#fff"
                    class="bi bi-airplane-engines"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0c-.787 0-1.292.592-1.572 1.151A4.347 4.347 0 0 0 6 3v3.691l-2 1V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.191l-1.17.585A1.5 1.5 0 0 0 0 10.618V12a.5.5 0 0 0 .582.493l1.631-.272.313.937a.5.5 0 0 0 .948 0l.405-1.214 2.21-.369.375 2.253-1.318 1.318A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .354-.854l-1.318-1.318.375-2.253 2.21.369.405 1.214a.5.5 0 0 0 .948 0l.313-.937 1.63.272A.5.5 0 0 0 16 12v-1.382a1.5 1.5 0 0 0-.83-1.342L14 8.691V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.191l-2-1V3c0-.568-.14-1.271-.428-1.849C9.292.591 8.787 0 8 0ZM7 3c0-.432.11-.979.322-1.401C7.542 1.159 7.787 1 8 1c.213 0 .458.158.678.599C8.889 2.02 9 2.569 9 3v4a.5.5 0 0 0 .276.447l5.448 2.724a.5.5 0 0 1 .276.447v.792l-5.418-.903a.5.5 0 0 0-.575.41l-.5 3a.5.5 0 0 0 .14.437l.646.646H6.707l.647-.646a.5.5 0 0 0 .14-.436l-.5-3a.5.5 0 0 0-.576-.411L1 11.41v-.792a.5.5 0 0 1 .276-.447l5.448-2.724A.5.5 0 0 0 7 7V3Z" />
                  </svg>
                </div>
                <div className="text-center w-full ">
                  <h1 className="text-base font-bold">
                    Search Engine Optimization
                  </h1>
                </div>
              </div>
              <div className="second">
                <h1 className="text-base md:text-base lg:text-xl md:font-bold p-4 lg:p-6 lg:hidden">
                  Search Engine Optimization
                </h1>
                <h1 className="text-base md:text-base lg:text-xl md:font-bold p-4 lg:p-6 hidden lg:block">
                  Search Engine Opt...
                </h1>
                <p className="flex">
                  <svg
                    className="w-3 h-3 mt-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 8 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                    />
                  </svg>
                  <span>Discover</span>
                </p>
                <p className="flex">
                  <svg
                    className="w-3 h-3 mt-1 text-white dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 8 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                    />
                  </svg>
                  <span>Strategy</span>
                </p>
                <p className="flex">
                  <svg
                    className="w-3 h-3 mt-1 text-white dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 8 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                    />
                  </svg>
                  <span>Optimization</span>
                </p>
                <p className="flex">
                  <svg
                    className="w-3 h-3 mt-1 text-white dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 8 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                    />
                  </svg>
                  <span>Content</span>
                </p>
                <p className="flex">
                  <svg
                    className="w-3 h-3 mt-1 text-white dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 8 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                    />
                  </svg>
                  <span>Reporting</span>
                </p>
              </div>
            </div>
          </div>

          <div className="slide_item">
            <div id="more_services_4" className="items-center  text-white ">
              <div
                className="flex flex-col items-center first"
                style={{ margin: "auto" }}
              >
                <div className="mb-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    fill="#fff"
                    class="bi bi-instagram"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                </div>
                <div className="text-center w-full ">
                  <h1 className="text-base font-bold">
                    Social Media Marketing
                  </h1>
                </div>
              </div>
              <div className="second">
                <h1 className="text-base md:text-base lg:text-xl md:font-bold p-4 lg:p-6 lg:hidden">
                  Social Media Marketing
                </h1>
                <h1 className="text-base md:text-base lg:text-xl md:font-bold p-4 lg:p-6 hidden lg:block">
                  Social Media Mar...
                </h1>
                <p className="flex">
                  <svg
                    className="w-3 h-3 mt-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 8 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                    />
                  </svg>
                  <span>Discover</span>
                </p>
                <p className="flex">
                  <svg
                    className="w-3 h-3 mt-1 text-white dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 8 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                    />
                  </svg>
                  <span>Strategy</span>
                </p>
                <p className="flex">
                  <svg
                    className="w-3 h-3 mt-1 text-white dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 8 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                    />
                  </svg>
                  <span>Optimization</span>
                </p>
                <p className="flex">
                  <svg
                    className="w-3 h-3 mt-1 text-white dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 8 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                    />
                  </svg>
                  <span>Content</span>
                </p>
                <p className="flex">
                  <svg
                    className="w-3 h-3 mt-1 text-white dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 8 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
                    />
                  </svg>
                  <span>Reporting</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
