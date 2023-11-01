import Image from "next/image";
import ContentButton from "@/components/ContentButton";

const marketing = () => {
  return (
    <div className="text-sm">
      <div id="marketing_home" className="hero">
        <div id="hero_text">
          <h1 className="font-bold uppercase">
            website optimization
          </h1>
          <p className="text-2xl mt-3">
            Data driven strategies to increase your brand awareness and get you ahead of your competition.
          </p>
        </div>
      </div>
      <section className="flex justify-around first_item w-5/6"></section>
      <section className="flex w-5/6 ps-10 pe-10">
        <div className="me-10 basis-2/4">
          <h1 className="font-bold">OUR APPROACH TO DIGITAL MARKETING</h1>
          <ul className="list-square ms-5 mt-5">
            <li>Define Goals</li>
            <li>Create A Plan</li>
            <li>Implementation</li>
            <li>Measure Results</li>
          </ul>
          <h1 className="mt-5 font-bold">Ready to start your campaign?</h1>
          <p className="mt-5 w-5/6">
            Drop us a note or give us a call{" "}
            <a href="tel:+9070807080">09070807080</a>; we're happy to answer all
            your question.
          </p>
          <form action="" className="mt-5 w-5/6" style={{fontSize: 1}}>
            <div className="flex">
              <div className="basis-2/4 me-2">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full block mb-5"
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full block mb-5"
                />
              </div>
              <div className="basis-2/4 ms-2">
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full block mb-5"
                />
                <input
                  type="text"
                  placeholder="Website URL"
                  className="w-full block mb-5"
                />
              </div>
            </div>

            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="How can we help you on SEO?"
              className="w-full h-32"
            ></textarea>
            <button
              type="submit"
              className="px-7 py-4 text-white float-right mt-4 text-sm"
            >
              SUBMIT
            </button>
            
          </form>
        </div>
        <div className="ms-10">
          <Image
            src="/assets/images/services/marketing.jpg"
            width={600}
            height={600}
          />
        </div>
      </section>
      <section className="ms-5 me-5 m_extra bg-gradient-to-tl from-sky-500 to-indigo-500">
        <h1 className="text-center font-bold text-2xl uppercase">how we promote content</h1>
        <div className="grid gap-4 grid-cols-4 mt-10">
          <div id="more_services_1" className="h-60 rounded"></div>
          <div id="more_services_2" className="h-60 rounded"></div>
          <div id="more_services_3" className="h-60 rounded"></div>
          <div id="more_services_4" className="h-60 rounded"></div>
        </div>
      </section>
      <section className="w-4/6 mb-10">
        <h1 className="text-center text-4xl">Our Capabilities</h1>
        <div className="grid grid-cols-3 mt-10 ">
          <div className="ms-10">
            <ul className="list-disc ms-5">
                <li>Market Research</li>
                <li>Competitive Analysis</li>
                <li>Channel Identification</li>
                <li>Campaign Strategy</li>
                <li>Landing Page Design</li>
                <li>Copywriting</li>
            </ul>
          </div>
          <div className="ms-10">
          <ul className="list-disc ms-5">
                <li>Market Research</li>
                <li>Competitive Analysis</li>
                <li>Channel Identification</li>
                <li>Campaign Strategy</li>
                <li>Landing Page Design</li>
                <li>Copywriting</li>
            </ul>
          </div>
          <div className="ms-10">
          <ul className="list-disc ms-5">
                <li>Market Research</li>
                <li>Competitive Analysis</li>
                <li>Channel Identification</li>
                <li>Campaign Strategy</li>
                <li>Landing Page Design</li>
                <li>Copywriting</li>
            </ul>
          </div>
        </div>
        <ContentButton
        header="Still have questions?"
        paragraph="Curious about our processor what it's like to work with us? Pick a
          package; we're happy to answer to give you the best creative designs."
        button="CONTACT US"
      />
      </section>
      
    </div>
  );
};

export default marketing;
