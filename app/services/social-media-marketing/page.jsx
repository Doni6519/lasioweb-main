import Image from "next/image";
import ContentButton from "@/components/ContentButton";

const socialMediaMarketing = () => {
  return (
    <div className="text-sm">
      <div id="social_marketing_home" className="hero">
        <div id="hero_text">
          <h1 className="font-bold uppercase">
            website optimization
          </h1>
          <p className="text-2xl mt-3">
            Data driven strategies to increase your brand awareness and get you ahead of your competition.
          </p>
        </div>
      </div>
      <section className="justify-around first_item w-5/6"></section>
      <section className="flex w-5/6">
        <div className="basis-3/4">
          <h1 className="mt-10 text-4xl">Reaching your audience</h1>
          <p className="mt-8 me-5">
            Although it might seem pleasing to skip lectures especially when it
            is scheduled in the morning when we just start getting comfy on our
            beds or when we fill tired later in the day or even when we feel
            there is just no need of going to that boring lecture especially
            when the lecturer doesn’t take attendance serious or does not give
            an unexpected test and then we promise ourselves we’ll spend several
            hours reviewing the class material, and pull the duvet back over our
            heads. There are quite several reasons students skip lectures and
            while it may seem not very important there are added advantages to
            students who attend lectures, some of them include:
          </p>
        </div>
        <div className="basis-2/4">
          <ContentButton
            header="Still have questions?"
            paragraph="Curious about our processor what it's like to work with us? Pick a
          package; we're happy to answer to give you the best creative designs."
            button="CONTACT US"
          />
        </div>
      </section>
      <section className="m_extra section_space">
        <h1 className="text-center my-10 text-4xl">Our Strengths</h1>
        <div className="grid gap-4 grid-cols-4 mt-10">
          <div id="more_services_1" className="h-60 rounded"></div>
          <div id="more_services_2" className="h-60 rounded"></div>
          <div id="more_services_3" className="h-60 rounded"></div>
          <div id="more_services_4" className="h-60 rounded"></div>
        </div>
      </section>
      <section className="w-4/6 grid gap-10 grid-cols-3 mb-10 m_extra">
        <div>
          <h1 className="text-base font-bold">Improve You Social Media With Custom Graphics</h1>
          <p className="mt-5">
            Taking good notes in class is an important part of academic success
            in college. Actively taking notes during class can help you focus
            and better understand main concepts and retention.
          </p>
        </div>
        <div>
        <h1 className="text-base font-bold">Improve You Social Media With Custom Graphics</h1>
          <p className="mt-5">
            Taking good notes in class is an important part of academic success
            in college. Actively taking notes during class can help you focus
            and better understand main concepts and retention.
          </p>
        </div>
        <div className="mb-10">
        <h1 className="text-base font-bold">Improve You Social Media With Custom Graphics</h1>
          <p className="mt-5">
            Taking good notes in class is an important part of academic success
            in college. Actively taking notes during class can help you focus
            and better understand main concepts and retention.
          </p>
        </div>
      </section>
    </div>
  );
};

export default socialMediaMarketing;
