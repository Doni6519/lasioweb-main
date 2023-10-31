import Image from "next/image";
import Link from "next/link";

const privacy = () => {
  return (
    <div className="text-sm">
      <section className="w-5/6 flex flex-col md:flex-row justify-between items-center">
        <div className="me-5 align-middle order-last md:order-1 basis-2/4">
          <h1 className="text-4xl text-center mt-5 md:mt-0 uppercase">
            privacy policy
          </h1>
          <p className="w-5/6 m_auto text-center mt-1">
            Privacy policy for LasioWeb
          </p>
        </div>
        <div className="ms-5">
          <Image
            className="rounded-md"
            src="/assets/images/services/services.jpg"
            width={500}
            height={500}
          />
        </div>
      </section>
      <section className="w-5/6 lg:w-3/6 mb-10">
        <h1 className=" text-xl mt-7 mb-3">Introduction</h1>
        <p>
          Welcome to LasioWeb. This Privacy Policy outlines our commitment to
          protecting and respecting your privacy. It explains the types of
          personal information we collect, how we use it, who we share it with,
          and how we protect it.
        </p>
        <h1 className=" text-xl mt-7 mb-3">What Information We Collect</h1>
        <p>
          We collect information to provide better services to our clients. This
          can be information that you provide us directly, such as your name,
          email address, and phone number when you sign up for our services or
          contact us for support.
        </p>
        <h1 className=" text-xl mt-7 mb-3">Liability Restrictions</h1>
        <p>
          LasioWeb LTD is not responsible for any technical, hardware or
          software failures of any kind; lost or unavailable network
          connections; and/or incomplete, garbled or delayed computer
          transmission. Under no circumstances will LasioWeb LTD be liable for
          any damages or injury that may result from the use of the materials on
          this site. The materials in this site are provided "as is" and without
          warranties of any kind to the fullest extent permissible pursuant to
          applicable laws. LasioWeb LTD may provide links to other sites that
          are not maintained by LasioWeb LTD, but LasioWeb LTD does not endorse
          those sites and is not responsible for the content of such other
          sites.
        </p>
        <h1 className=" text-xl mt-7 mb-3">Changes To This Privacy Policy</h1>
        <p>
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page.
        </p>
        <h1 className=" text-xl mt-7 mb-3">Contact Us</h1>
        <p>
          If you have any questions about this Privacy Policy, please
          <Link href="/contact" className="text-blue-700">contact us</Link>.
        </p>
      </section>
    </div>
  );
};

export default privacy;
