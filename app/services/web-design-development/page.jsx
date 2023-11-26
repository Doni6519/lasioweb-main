import Link from "next/link";
import GetStarted from "@/components/GetStarted";
import Nav from "@/components/Nav";
import Image from "next/image";
const webDev = () => {
  return (
    <div className="text-sm">
      <Nav color="text-white hover:text-blue-500"/>
      <div id="web_home" className="hero">
      <Image
          width={2000}
          height={2000}
          src="/assets/images/background-img/web-dev-bg.png"
          className="absolute block w-full h-full object-cover top-0 goback"
          alt=""
        />
        <div id="hero_text" className=" absolute  z-100">
          <h1 className="font-bold uppercase">
            web design & development
          </h1>
          <p className="text-2xl">
            Everyone can set up a website this days. We build strategic engaging
            websites that enforce credibility and communicate key messages and
            turning them into profits.
          </p>
        </div>
      </div>
      <section className="flex justify-around first_item w-5/6"></section>
      <section className="md:flex w-5/6 mb-10">
        <div className="basis-2/4 md:me-5">
          <h1 className="font-bold">READY FOR A NEW WEBSITE?</h1>
          <p className="mt-1">
            Ready to get started or really curious about our process?{" "}
            <Link href="/contact">
              Contact Us and we'll get back to you speedily.{" "}
            </Link>
            Or talk to an expert! <a href="tel:+2349070807080">09070807080</a>
          </p>
          <h1 className="mt-3 font-bold">GET STARTED</h1>
          <p className="mt-1">
            Let us help you grow your business through the web.
          </p>
          <p>Request for a quote and we'll contact you shortly.</p>
          <button
            type="button"
            class="mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  font-medium text-sm px-4 py-4 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <Link href="/">Request for a quote</Link>
          </button>
        </div>
        <div className="basis-2/4 mt-5 md:mt-0 md:ms-5">
          <p>
            Did you receive a quote from anorther agency without them asking key
            questions about how your business actually works and your vision?
            They probably cant build you a website that meets your needs without
            a full picture.
          </p>
          <p className="mt-5">
            LasioWeb starts by asking the right questions. During your
            consultation , we'll find out as much as we can about your business
            by asking questions like:
          </p>
          <ul className="mt-5 list-disc ms-5">
            <li>What Makes You Different</li>
            <li>Identify who your customers are</li>
            <li>What Product or Service do you offer</li>
            <li>Your Target Audience</li>
          </ul>
          <p className="mt-5">
            We then create a solution to accomplish your business goals and KPI
          </p>
          <h1 className="mt-10 font-bold">OUR CAPABILITIES</h1>
          <div className="md:flex mt-3 justify-between ms-5">
            <ul className=" list-disc">
              <li>Copywriting</li>
              <li>Brand Identity</li>
              <li>Responsive Design</li>
            </ul>
            <ul className=" list-disc">
              <li>e-commerce</li>
              <li>Data Analysis</li>
              <li>Conent Management System</li>
            </ul>
          </div>
        </div>
      </section>
      <GetStarted />
    </div>
  );
};

export default webDev;
