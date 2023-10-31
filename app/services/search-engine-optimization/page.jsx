"use client";
import Image from "next/image";
import GetStarted from "@components/GetStarted";
import { seoContactForm } from "@lib/api";
import { useState } from "react";

const initValues = {};
const initState = { values: initValues };

const seo = () => {
  const [state, setState] = useState(initState);
  const { values } = state;
  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));
  const onSubmit = async () => {
    // setState((prev) => ({
    //   ...prev,
    //   isLoading: true
    // }));
    try {
      await seoContactForm(values);
    } catch (error) {}
  };

  const handlePackage = (target) => {
    if (target.target.value == "bronze") {
      console.log(target.target.value);
      document.getElementById("bronze-budget").style.display = "block";
      document.getElementById("silver-budget").style.display = "none";
      document.getElementById("gold-budget").style.display = "none";
    } else if (target.target.value == "silver") {
      console.log(target.target.value);
      document.getElementById("bronze-budget").style.display = "none";
      document.getElementById("silver-budget").style.display = "block";
      document.getElementById("gold-budget").style.display = "none";
    } else if (target.target.value == "gold") {
      console.log(target.target.value);
      document.getElementById("bronze-budget").style.display = "none";
      document.getElementById("silver-budget").style.display = "none";
      document.getElementById("gold-budget").style.display = "block";
    }
  };
  return (
    <div className="text-sm">
      <div id="seo_home" className="hero">
        <div id="hero_text">
          <h1 className="font-bold uppercase">website optimization</h1>
          <p className="text-2xl mt-3">
            Data driven strategies to increase your brand awareness and get you
            ahead of your competition.
          </p>
        </div>
      </div>
      <section className=" justify-around first_item_extra w-5/6"></section>
      <section className="md:flex w-5/6">
        <div className="basis-2/4 justify-between">
          <h1 className="text-base text-center md:text-start md:text-2xl font-bold">
            PROFESSIONAL SEO THAT DRIVES RESULT
          </h1>
          <p className="mt-3">
            We combine research-driven strategy, inventive design, and clean
            coding to architect change and build the best experiences for our
            clients audiences. Some of our optimization services include:
          </p>
          <ul className="list-disc ms-5 mt-5">
            <li>Conversion Rate Optimization</li>
            <li>A/B Testing</li>
            <li>Multivariate Testing</li>
            <li>User Experience Audit</li>
            <li>SEO Strategy</li>
            <li>Performance Enhancements</li>
            <li>Site Security</li>
            <li>Accesable Design</li>
            <li>Analytics Dashboards</li>
          </ul>
        </div>
        <div className="ms-10 hidden md:block">
          <Image
            src="/assets/images/services/seo_img1.jpg"
            width={600}
            height={600}
          />
        </div>
      </section>
      <section className="ms-5 me-5 m_extra bg-gradient-to-tl from-sky-500 to-indigo-500">
        <h1 className="text-base text-center md:text-start md:text-2xl font-bold">
          SEO DONE THE RIGHT WAY!
        </h1>
        <p className="text-center w-5/6 md:w-3/6 m_auto mt-5 text-base">
          LasioWeb works with customers focused on local engine optimization or
          even global targeted keywords.
        </p>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10">
          <div id="more_services_1" className="h-60 rounded"></div>
          <div id="more_services_2" className="h-60 rounded"></div>
          <div id="more_services_3" className="h-60 rounded"></div>
          <div id="more_services_4" className="h-60 rounded"></div>
        </div>
      </section>
      <section className="md:ps-10 md:pe-10 md:flex w-5/6 mb-11 m_extra">
        <div className="basis-2/4">
          <h1 className="w-5/6 text-xl md:text-4xl">
            Let our Years of proven SEO experience help boost your rankings and
            sales
          </h1>
          <h1 className="mt-7 text-lg font-bold">What You Get</h1>
          <ul className="mt-5 list-disc ms-5">
            <li>Free Comprehensive Site Analysis Report worth 50,000</li>
            <li>Expert & insightful recommendations</li>
            <li>Suggested solution/package details</li>
          </ul>
          <h1 className="mt-5 font-bold">OUR OPTIMIZATION CAPABILITIES</h1>
          <ul className="mt-5 list-disc ms-5">
            <li>Conversion Rate Optimization</li>
            <li>Landing Page Optimization</li>
            <li>e-Commerce Optimization</li>
            <li>Organic & Technical SEO</li>
            <li>Data Analyst & Insights</li>
            <li>User Experience Design</li>
          </ul>
        </div>
        <div className="basis-2/4">
          <h1 className="text-center font-bold mt-10 md:mt-0">
            REQUEST A FREE SEO SITE ANALYSIS IN SECONDS
          </h1>
          <p className="text-center mt-2 mb-6">
            Complete the form below to get your free quote and analysis.
          </p>
          <form action="" className="w-5/6 m_auto">
            <div className="md:flex">
              <input
                type="text"
                placeholder="First Name"
                className="w-full block mb-5 me-2"
                name="firstName"
                value={values.name}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full block mb-5 ms-2"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="md:flex">
              <input
                type="text"
                placeholder="Company Name"
                className="w-full block mb-5 me-5"
                name="company"
                value={values.company}
                onChange={handleChange}
              />
              <input
                type="text"
                placeholder="Email"
                className="w-full block mb-5"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
            </div>
            <div className="md:flex">
              <div className="basis-2/4 md:me-2">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full block mb-5"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                />
                <select
                  name="package"
                  id="package"
                  onChange={handlePackage}
                  className="w-full block mb-5 text-slate-100"
                  style={{ color: "#808480" }}
                >
                  <option value="">Select your SEO Package</option>
                  <option value="bronze">Bronze/5 Keywords Local</option>
                  <option value="silver">
                    Silver/10 Keywords Moderate Competitive
                  </option>
                  <option value="gold">Gold/20 keywords Competitive</option>
                </select>
              </div>
              <div className="basis-2/4 md:ms-2">
                <input
                  type="text"
                  placeholder="Website URL"
                  className="w-full block mb-5"
                  name="url"
                  value={values.url}
                  onChange={handleChange}
                />
                <select
                  name="budget1"
                  id="bronze-budget"
                  className="w-full block mb-5 text-slate-100 hidden"
                  style={{ color: "#808480" }}
                  onChange={handleChange}
                >
                  <option value="">Choose your Budget</option>
                  <option value="$120">$120</option>
                  <option value="$170">$170</option>
                </select>
                <select
                  name="budget2"
                  id="silver-budget"
                  className="w-full block mb-5 text-slate-100 hidden"
                  style={{ color: "#808480" }}
                  onChange={handleChange}
                >
                  <option value="">Choose your Budget</option>
                  <option value="$350">$350</option>
                  <option value="$500">$500</option>
                  <option value="Unknown">Unknown</option>
                </select>
                <select
                  name="budget3"
                  id="gold-budget"
                  onChange={handleChange}
                  className="w-full block mb-5 text-slate-100 hidden"
                  style={{ color: "#808480" }}
                >
                  <option value="">Choose your Budget</option>
                  <option value="$400">$400</option>
                  <option value="$500">$500</option>
                  <option value="$700">$700</option>
                  <option value="#1000">$1000</option>
                  <option value="Unknown">Unknown</option>
                </select>
              </div>
            </div>

            <textarea
              name="message"
              id=""
              cols="30"
              rows="10"
              placeholder="How can we help you on SEO?"
              className="w-full h-32"
              value={values.message}
              onChange={handleChange}
            ></textarea>
            <button
              type="submit"
              className="px-7 py-4 text-white float-right mt-4"
              onClick={onSubmit}
            >
              SUBMIT
            </button>
          </form>
        </div>
      </section>
      *
      <GetStarted />
    </div>
  );
};

export default seo;
