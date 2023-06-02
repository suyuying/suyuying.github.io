import React from "react";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import MyResume from "@site/src/components/MyResume";
import TwoColorPic from "@site/static/img/pattern_react.01996482.png";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout>
      <section className="header relative items-center flex h-screen max-h-860-px sm:max-h-full dark:bg-black">
        <div className="container items-center flex flex-col sm:flex-row flex-wrap lg:w-6/12 lg:ml-10">
          <div className="w-full px-4">
            <div className="pt-16 sm:pt-32">
              <h2 className="text-2xl sm:text-4xl inline-block font-lobster pb-1 mb-0 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 hover:from-pink-500 hover:to-yellow-500">
                {siteConfig.title}
              </h2>
              <p className="mt-1 text-xl leading-loose text-blueGray-500">
                This blog will focus on DevOps tool, cloud platform,
                coding(currently most is python), and some Knowledge about IT,
                That's share what we learn!
              </p>
              <div className="mt-12">
                <Link
                  to="/docs/intro"
                  className="link get-started font-bold text-white bg-gradient-to-r from-blue-500 to-green-500 hover:from-pink-500 hover:to-yellow-500 px-6 py-4 rounded outline-double hover:animate-bounce mr-10 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Note
                </Link>
                <Link
                  to="/blog"
                  className="hidden sm:inline-block link ml-1 font-bold text-white bg-gradient-to-r from-blue-500 to-green-500 hover:from-pink-500 hover:to-yellow-500 px-6 py-4 rounded outline-double hover:animate-bounce mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
        <img
          className=" absolute top-0 b-auto right-0 w-auto h-auto sm:w-6/12 -mt-48 sm:mt-0 hidden max-h-860px  lg:block"
          src={TwoColorPic}
          alt="square with blue and white mixed pictures"
        />
      </section>

      <section>
        <div
          id="features"
          className="relative w-full px-8 py-10 border-t border-gray-200  dark:bg-black md:py-16 lg:py-24 xl:py-40 xl:px-0"
        >
          <div className="container flex flex-col items-center justify-between h-full max-w-6xl mx-auto">
            <h2 className="my-5 text-base font-medium tracking-tight text-indigo-500 uppercase">
              Future Work
            </h2>
            <h3 className="max-w-2xl px-5 mt-2 text-3xl font-black leading-tight text-center text-gray-900 sm:mt-0 sm:px-0 sm:text-6xl">
              Built and Designed in My Mind
            </h3>
            <div className="flex flex-col w-full mt-0 lg:flex-row sm:mt-10 lg:mt-20">
              <div className="w-full max-w-md p-4 mx-auto mb-0 sm:mb-16 lg:mb-0 lg:w-1/3">
                <div className="relative flex flex-col items-center justify-center w-full h-full p-20 mr-5 rounded-lg">
                  <svg
                    className="absolute w-full h-full text-gray-100 fill-current"
                    viewBox="0 0 377 340"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <g>
                        <path d="M342.8 3.7c24.7 14 18.1 75 22.1 124s18.6 85.8 8.7 114.2c-9.9 28.4-44.4 48.3-76.4 62.4-32 14.1-61.6 22.4-95.9 28.9-34.3 6.5-73.3 11.1-95.5-6.2-22.2-17.2-27.6-56.5-47.2-96C38.9 191.4 5 151.5.9 108.2-3.1 64.8 22.7 18 61.8 8.7c39.2-9.2 91.7 19 146 16.6 54.2-2.4 110.3-35.6 135-21.6z"></path>
                      </g>
                    </g>
                  </svg>

                  <h4 className="relative mt-6 text-lg font-bold">
                    Automated Tools
                  </h4>
                  <p className="relative mt-2 text-base text-center text-gray-600">
                    Automate workflow with CI/CD, and proper monitor together
                    with optimized plan.
                  </p>
                  {/* <Link
                    to="#_"
                    className="relative flex mt-2 text-sm font-medium text-indigo-500 underline"
                  >
                    Learn More
                  </Link> */}
                </div>
              </div>

              <div className="w-full max-w-md p-4 mx-auto mb-0 sm:mb-16 lg:mb-0 lg:w-1/3">
                <div className="relative flex flex-col items-center justify-center w-full h-full p-20 mr-5 rounded-lg">
                  <svg
                    className="absolute w-full h-full text-gray-100 fill-current"
                    viewBox="0 0 358 372"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <g>
                        <path d="M315.7 6.5c30.2 15.1 42.6 61.8 41.5 102.5-1.1 40.6-15.7 75.2-24.3 114.8-8.7 39.7-11.3 84.3-34.3 107.2-23 22.9-66.3 23.9-114.5 30.7-48.2 6.7-101.3 19.1-123.2-4.1-21.8-23.2-12.5-82.1-21.6-130.2C30.2 179.3 2.6 141.9.7 102c-2-39.9 21.7-82.2 57.4-95.6 35.7-13.5 83.3 2.1 131.2 1.7 47.9-.4 96.1-16.8 126.4-1.6z"></path>
                      </g>
                    </g>
                  </svg>

                  <h4 className="relative mt-6 text-lg font-bold">
                    Data Analytics
                  </h4>
                  <p className="relative mt-2 text-base text-center text-gray-600">
                    Analyze stock and use Macroeconomics to prediect future
                    trend. Finally, machine learning tools will learn how to
                    better convert data and suggest modification.
                  </p>
                  {/* <Link
                    to="#_"
                    className="relative flex mt-2 text-sm font-medium text-indigo-500 underline"
                  >
                    Learn More
                  </Link> */}
                </div>
              </div>

              <div className="w-full max-w-md p-4 mx-auto mb-16 lg:mb-0 lg:w-1/3">
                <div className="relative flex flex-col items-center justify-center w-full h-full p-20 mr-5 rounded-lg">
                  <svg
                    className="absolute w-full h-full text-gray-100 fill-current"
                    viewBox="0 0 378 410"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <g>
                        <path d="M305.9 14.4c23.8 24.6 16.3 84.9 26.6 135.1 10.4 50.2 38.6 90.3 43.7 137.8 5.1 47.5-12.8 102.4-50.7 117.4-37.9 15.1-95.7-9.8-151.7-12.2-56.1-2.5-110.3 17.6-130-3.4-19.7-20.9-4.7-82.9-11.5-131.2C25.5 209.5-3 174.7 1.2 147c4.2-27.7 41-48.3 75-69.6C110.1 56.1 141 34.1 184 17.5c43.1-16.6 98.1-27.7 121.9-3.1z"></path>
                      </g>
                    </g>
                  </svg>
                  {/* <!-- FEATURE Icon 3 --> */}

                  <h4 className="relative mt-6 text-lg font-bold">
                    Share Knowledge
                  </h4>
                  <p className="relative mt-2 text-base text-center text-gray-600">
                    If I have seen further than others, it is by standing upon
                    the shoulders of giants.
                  </p>
                  <Link
                    to="/docs/intro"
                    className="relative flex mt-2 text-sm font-medium text-indigo-500 underline"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <Link
              to="https://hesdas.github.io"
              target="_blank"
              class="font-bold text-white bg-gradient-to-r from-blue-500 to-green-500 hover:from-pink-500 hover:to-yellow-500 px-6 py-4 rounded outline-double hover:animate-bounce mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
            >
              My WebSite
            </Link>
          </div>
        </div>
      </section>
      <MyResume />
    </Layout>
  );
}
