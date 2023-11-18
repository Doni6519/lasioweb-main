import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
const privacy = () => {
  return (
    <div className="text-sm">
      <Nav color="text-black hover:text-blue-500"/>
      <section className="w-5/6 flex flex-col md:flex-row justify-between items-center">
        <div className="me-5 align-middle order-last md:order-1 basis-2/4">
          <h1 className="text-4xl text-center mt-5 md:mt-0 uppercase">T & C</h1>
          <p className="w-5/6 m_auto text-center mt-1">
            Terms and conditions for LasioWeb
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
          Welcome to LasioWeb! We are a digital marketing company offering
          services such as website design, logo and branding, search engine
          optimization, and social media marketing. By using our services, you
          agree to abide by the following terms and conditions.
        </p>
        <h1 className=" text-xl mt-7 mb-3">Payment</h1>
        <p>
          LasioWeb starts working on a project upon receipt of a down payment
          with our standard payments terms 70%/30% or 50%/25%/25%. Unless
          otherwise specified in writing, the client is charged the remaining
          balace upon the completion of the project. Websites are made live upon
          the completion of the project, when all payment are cleared. If
          applicable, hosting and domain name registration will be paid every
          month.
        </p>
        <p>
          Additional services come at additional fees, on a for service basis or
          an hourly rate. If clients require additional services, the
          correspondent fee is added to their invoice and they are charged
          accordingly.
        </p>
        <h1 className=" text-xl mt-7 mb-3">Client Satisfaction</h1>
        <p>
          All of our services are 100% satisfactions guaranteed. We dont stop
          working until our clients are completely satisfied with their
          solution. That is our commitment. However, LasioWeb will no under
          circumstances be held responsible to satisfy unreasonable expectations
          and request. LasioWeb discretion to decide whether or not a request or
          expectation is reasonable or lies within the scope of offer of
          services to it's client. In othe words LasioWeb guarantees 100%
          satisfaction within the framework of it's original agreement with the
          client, according to Lasioweb's understanding.
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
        <h1 className=" text-xl mt-7 mb-3">Changes to Terms</h1>
        <p>
          We reserve the right to modify these terms at any time. Any changes
          will be posted on this page.
        </p>
        <h1 className=" text-xl mt-7 mb-3">Intellectual Property</h1>
        <p>
          All materials we create in the process of fulfilling our services are
          the property of LasioWeb LTD until full payment has been received.
          Upon receipt of full payment, ownership rights of the final designs
          will be transferred to you.
        </p>
        <h1 className=" text-xl mt-7 mb-3">Refund</h1>
        <p>
          If a client is not satisfied with LasioWeb services, client can ask
          for a refund. LasioWeb will be happy to exercise a refund, after doing
          a review.
        </p>
        <h1 className=" text-xl mt-7 mb-3">Completed projects</h1>
        <p>
          Unless clearly specified otherwise, all projects are set as
          "completed" after a 3 month period has passed (calculated from the
          first payment date). This means no more work will be done on that
          project and no service will be provided. This doesn't apply to hosting
          and domain registration services, which are provided independently of
          the project status, and only according to client's payments.
        </p>
        <h1 className=" text-xl mt-7 mb-3">Contact Us</h1>
        <p>
          If you have any questions about this Terms and conditions, please
          <Link href="/contact" className="text-blue-700">
            {" "}
            contact us
          </Link>
          .
        </p>
      </section>
    </div>
  );
};

export default privacy;
