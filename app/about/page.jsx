import Image from "next/image";

const page = () => {
  return (
    <div className="text-sm">
      <div id="about_home" className="hero">
        <div id="hero_text">
          <h1 className="font-bold uppercase">
            website optimization
          </h1>
          <p className="text-2xl mt-3">
            Data driven strategies to increase your brand awareness and get you ahead of your competition.
          </p>
        </div>
      </div>
      <section className="first_item_extra w-5/6 md:w-3/6">
        <h1 className="text-center text-xl md:text-4xl font-bold">Who We Are</h1>
        <p className="mt-5 text-center sm:text-start md:text-start  ">
          Welcome to *LasioWeb*! We are a dynamic team of creative individuals
          with a passion for web design, logo and branding, search engine
          optimization (SEO), and social media marketing. Our mission is to help
          businesses establish a strong online presence and reach their full
          potential in the digital world.
        </p>
        <h1 className="text-center text-xl md:text-4xl font-bold mt-10">Our Expertise</h1>
        <h2 className="mt-5 text-base sm:text-2xl font-bold">Web Design</h2>
        <p className="mt-3">
          We believe that a website is the digital face of your business. Our
          team of experienced web designers is dedicated to creating visually
          appealing and user-friendly websites that reflect your brand's
          identity and values.
        </p>
        <h2 className="mt-5 text-base sm:text-2xl font-bold">Logo and Branding</h2>
        <p className="mt-3">
          Your logo and branding are the first things that people notice about
          your business. At LasioWeb, we create unique and memorable logos and
          branding elements that effectively communicate your brand's
          personality and make you stand out from the competition.
        </p>
        <h2 className="mt-5 text-base sm:text-2xl font-bold">Search Engine Optimization (SEO)</h2>
        <p className="mt-3">
          In today's digital age, visibility on search engines is crucial for
          your business's success. Our SEO experts use proven strategies to
          improve your website's ranking on search engine results pages,
          increasing your visibility and driving more traffic to your site.
        </p>
        <h2 className="mt-5 text-base sm:text-2xl font-bold">Social Media Marketing</h2>
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
            <Image src={"/assets/images/about/vision.png"} width={700} height={500} style={{height:"100%",objectFit: "cover"}}/>
          </div>
          <div className="h-80 p-10 text vision">
            <h1 className="text-center text-2xl font-bold">Vision Statement</h1>
            <p className="mt-3">
              To be the first brand that comes to anybody who thinks of a web
              development agency.
            </p>
          </div>
          <div className="h-80 p-10 text vision mt-10">
            <h1 className="text-center text-2xl font-bold">Mission Statement</h1>
            <p className="mt-3">
              Our mission is to craft digital experiences through innovative
              website design to connect businesses with their audience in
              meaningful and engaging ways.
            </p>
          </div>
          <div className="bg-slate-200 h-80 img mt-10 hidden md:block">
            <Image src={"/assets/images/about/mission.png"} width={700} height={500} style={{height:"100%",objectFit: "cover"}}/>
          </div>
        </div>
      </section>
      <section>
        <h1 className="text-center text-2xl font-bold">Our Values</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 mb-10">
          <div id="more_services_1" className="h-80"></div>
          <div id="more_services_2" className="h-80"></div>
          <div id="more_services_3" className="h-80"></div>
          <div id="more_services_4" className="h-80"></div>
        </div>
      </section>
    </div>
  );
};

export default page;
