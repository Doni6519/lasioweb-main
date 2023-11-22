import Image from "next/image";
import ContentButton from "@/components/ContentButton";
import Nav from "@/components/Nav";
import Link from "next/link";
const branding = () => {
  return (
    <div className="text-sm">
      <Nav color="text-white hover:text-blue-500" />
      <div className="hero">
      <Image
          width={2000}
          height={2000}
          src="/assets/images/background-img/branding-bg.png"
          className="absolute block w-full h-full object-cover top-0 goback"
          alt=""
        />
        <div id="hero_text">
          <h1 className="font-bold uppercase">website optimization</h1>
          <p className="text-2xl mt-3">
            Data driven strategies to increase your brand awareness and get you
            ahead of your competition.
          </p>
        </div>
      </div>
      <section className="flex justify-around first_item_extra w-5/6"></section>
      <section className="md:flex w-5/6 text-slate-800">
        <div className="md:w-2/4 me-5">
          <h1 className="text-2xl md:text-4xl text-black mb-5">
            We don't just design pretty logos
          </h1>
          <p>
            As a business owner, having a logo is crucial for your brand
            identity. It’s not just a tiny image, but a powerful tool that
            communicates your company’s values, tells a story, and enables
            customers to connect with your brand.
          </p>
          <p className="mt-5">
            Here’s why you should consider getting your logo from LasioWeb LTD:
          </p>
          <ol className="list-disc ms-4 md:ms-8 grid gap-0 grid-cols-2 mt-5">
            <li>Professionalism</li>
            <li>Custom Design</li>
            <li>Brand Consistency</li>
            <li>High Quality</li>
            <li>Affordable Pricing</li>
            <li>Excellent Customer Service</li>
          </ol>
          <p className="mt-4"> A logo designed by Lasioweb LTD not only enhances your brand image but also helps in building trust with your customers. So, why wait? <Link className="text-blue-500 hover:text-blue-700" href="/contact">Contact us</Link> and get your logo designed by Lasioweb LTD today!</p>
        </div>
        <div className="w-4/4 mt-10 md:mt-0 md:w-2/4 md:ms-5">
          <Image
            src="/assets/images/services/branding.png"
            width={500}
            height={500}
          />
        </div>
      </section>
      <div className="w-5/6 m_auto mb-10">
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
