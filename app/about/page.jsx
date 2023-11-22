import Image from "next/image";
import Nav from "@/components/Nav";
const page = () => {
  return (
    <div className="text-sm">
      <Nav color="text-white hover:text-blue-500"/>
      <div id="about_home" className="hero">
      <Image
          width={2000}
          height={2000}
          src="/assets/images/background-img/about-bg.png"
          className="absolute block w-full h-full object-cover top-0 goback"
          alt=""
        />
        <div id="hero_text" className=" absolute  z-100">
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
      <section className="bg-slate-100">
        <div className="grid grid-cols-1 gap-0 md:grid-cols-2 vision_mission">
          <div className="bg-slate-200 h-85 img hidden md:block">
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
              To be the largest web development agency globally.
            </p>
          </div>
          <div className="h-80 p-10 text mission">
            <h1 className="text-center text-2xl font-bold">
              Mission Statement
            </h1>
            <p className="mt-3">
              Our mission is to craft digital experiences through innovative
              website design to connect businesses with their audience in
              meaningful and engaging ways.
            </p>
          </div>
          <div className="bg-slate-200 h-85 img hidden md:block">
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
        <h1 className="text-center text-4xl font-bold core_h1">
          Our Core Values
        </h1>
        <div className="grid grid-cols-1 gap-y-2 md:gap-0 lg:gap-0 sm:gap-1 md:grid-cols-2 lg:grid-cols-4 mt-10 text-center slide_on_hover_val">
          <div className="slide_item">
            <div id="more_services_1_about" className="items-center text-white">
              <div
                className="flex flex-col items-center first"
                style={{ margin: "auto" }}
              >
                <div className="mb-5 mt-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#fff"
                    className="bi bi-award h-10 w-10"
                    viewBox="0 0 16 16"
                  >
                    <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
                    <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                  </svg>
                </div>
                <div className="text-center w-full ">
                  <h1 className="text-xl font">Excellence</h1>
                </div>
              </div>
              <div className="second bg-slate-800">
                <h1 className="text-base md:text-base lg:text-xl p-7 lg:block lg:hidden">
                  Excellence
                </h1>
                <h1 className="text-base md:text-base lg:text-xl p-7  hidden lg:block">
                  Excellence
                </h1>
                <p className="text-white px-5">
                  At LasioWeb LTD, we pursue the the highest quality in all
                  aspect of the development process.
                </p>
              </div>
            </div>
          </div>

          <div className="slide_item">
            <div
              id="more_services_2_about"
              className="items-center  text-white "
            >
              <div
                className="flex flex-col items-center first"
                style={{ margin: "auto" }}
              >
                <div className="mb-5 mt-5">
                  <svg
                    className="w-10 h-10 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 12 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1"
                      d="M9.041 11.862A5 5 0 0 1 11 15.831V19M1 1v3.169a5 5 0 0 0 1.891 3.916M11 1v3.169a5 5 0 0 1-2.428 4.288l-5.144 3.086A5 5 0 0 0 1 15.831V19M1 3h10M1.399 6h9.252M2 14h8.652M1 17h10"
                    />
                  </svg>
                </div>
                <div className="text-center w-full ">
                  <h1 className="text-xl font">Flexibility</h1>
                </div>
              </div>
              <div className="second bg-slate-800">
                <h1 className="text-base md:text-base lg:text-xl p-7 lg:block lg:hidden">
                  Flexibility
                </h1>
                <h1 className="text-base md:text-base lg:text-xl p-7  hidden lg:block">
                  Flexibility
                </h1>
                <p className="text-white px-5">
                  At LasioWeb we understand that client's are likely to change
                  their mind regarding key features during the early phase of
                  development; Therefore we make the development process as
                  flexible as we can.
                </p>
              </div>
            </div>
          </div>

          <div className="slide_item">
            <div
              id="more_services_1_about"
              className="items-center  text-white "
            >
              <div
                className="flex flex-col items-center first"
                style={{ margin: "auto" }}
              >
                <div className="mb-5 mt-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#fff"
                    className="bi bi-brightness-high h-10 w-10"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                  </svg>
                </div>
                <div className="text-center w-full ">
                  <h1 className="text-xl font">Creativity</h1>
                </div>
              </div>
              <div className="second bg-slate-700">
                <h1 className="text-base md:text-base lg:text-xl p-7 lg:block lg:hidden">
                  Creativity
                </h1>
                <h1 className="text-base md:text-base lg:text-xl p-7  hidden lg:block">
                  Creativity
                </h1>
                <p className="text-white px-5">
                  We regularly find new and emerging ways to deliver services
                  which features meets a client's needs in an unexpected way by
                  staying updated and learning new technologies.
                </p>
              </div>
            </div>
          </div>

          <div className="slide_item">
            <div
              id="more_services_2_about"
              className="items-center  text-white "
            >
              <div
                className="flex flex-col items-center first"
                style={{ margin: "auto" }}
              >
                <div className="mb-5 mt-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#fff"
                    class="bi bi-chat-left-text h-10 h-10"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                  </svg>
                </div>
                <div className="text-center w-full ">
                  <h1 className="text-xl font">Communication</h1>
                </div>
              </div>
              <div className="second bg-slate-700">
                <h1 className="text-base md:text-base lg:text-xl p-7 lg:block lg:hidden">
                  Communication
                </h1>
                <h1 className="text-base md:text-base lg:text-xl p-7  hidden lg:block">
                  Communication
                </h1>
                <p className="text-white px-5 mt-1">
                  Effective communication is key in understanding the needs of
                  the client and delivering a product that meets those needs.
                  Before implementing any project, we clearly map out and
                  understand our client goals and how to achieve each one.
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
