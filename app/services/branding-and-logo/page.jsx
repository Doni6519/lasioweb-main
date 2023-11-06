import Image from "next/image";
import ContentButton from "@/components/ContentButton";

const branding = () => {
  return (
    <div className="text-sm">
      <div id="branding_home" className="hero">
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
      <section className="md:flex w-5/6">
        <div className="md:w-2/4 me-5">
          <h1 className="text-2xl md:text-4xl mb-5">We don't just design pretty logos</h1>
          <p>
            This article highlights three micro jobs sites where you can get
            paid in naira and discusses the type of compensation you can expect
            from your time
          </p>
          <p className="mt-5">
            fees can range from ₦3 to more than a ₦1,000 and should be
            proportionate to the amount of task and time needed to complete the
            task
          </p>
        </div>
        <div className="w-4/4 mt-10 md:mt-0 md:w-2/4 ms-5">
          <Image
            src="/assets/images/services/branding.png"
            width={500}
            height={500}
          />
        </div>
      </section>
      <div className="w-4/6 m_auto mb-10">
        <ContentButton
          header="Still have questions?"
          paragraph="Curious about our process or what it's like to work with us? Pick a
          package; we're happy to answer to give you the best creative designs."
          button="PURCHASE A PACKAGE"
        />
      </div>
    </div>
  );
};

export default branding;
