import React from "react";
import Link from "@docusaurus/Link";
import BlogIcon from "@site/static/img/resume_svg/blogIcon.svg";
import GitHub from "@site/static/img/resume_svg/github.svg";
import FaceBook from "@site/static/img/resume_svg/facebook.svg";
// import MyResumePic from "@site/static/img/resume_svg/my_resume_pic.png";
// import GitHubAction from "@site/static/img/resume_svg/github-actions.svg";
// import AmazonWebIcon from "@site/static/img/resume_svg/amazon-web.svg";
// import GoogleCloudIcon from "@site/static/img/resume_svg/google-cloud.svg";
// import GrafanaIcon from "@site/static/img/resume_svg/grafana-ar21.svg";
// import KibanaIcon from "@site/static/img/resume_svg/kibana.svg";
// import MicrosoftAzureIcon from "@site/static/img/resume_svg/Microsoft_Azure.svg";
// import NginxIcon from "@site/static/img/resume_svg/nginx.svg";
// import ZabbixIcon from "@site/static/img/resume_svg/zabbix-icon.svg";
// import PythonIcon from "@site/static/img/resume_svg/python.svg";
// import ReactIcon from "@site/static/img/resume_svg/reacticon.svg";
// import CloudflareIcon from "@site/static/img/resume_svg/cloudflare.svg";

import { useColorMode } from "@docusaurus/theme-common";
import clsx from "clsx";
function MyResumeSide() {
  return (
    <div className="sticky col-span-12 lg:col-span-4 hidden lg:block h-screen  top-44">
      <div className=" w-full mb-6 lg:mb-0 mx-auto relative bg-white text-center dark:bg-[#111111] p-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0 ">
        <img
          src="https://avatars.githubusercontent.com/u/88280157?s=400&u=fcf8ec5983c4eb7f5ef7e86a377fa432f40feb95&v=4"
          alt="MyResumePic"
          width="240"
          height="240"
          decoding="async"
          data-nimg="1"
          className="w-[200px] h-[240px] absolute left-[50%] transform -translate-x-[50%] -translate-y-[-10%] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px]"
        />
        <BlogIcon />
        <div className="pt-[100px] pb-2">
          <h1 className="mt-6 mb-1 text-[26px] font-semibold ">Zax Su</h1>
          <h3 className="mb-4 text-[#7B7B7B] inline-block dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg dark:text-[#A6A6A6] ">
            IT/DevOps
          </h3>
        </div>
        <div className="flex justify-center space-x-4 bg-[#F3F6F6] dark:bg-[#1D1D1D] rounded-2xl ">
          <Link
            to="https://suyuying.github.io/"
            target="_blank"
            className="btn bg-white dark:bg-black shadow-md p-2 my-2 bg-gradient-to-r  hover:from-pink-500 hover:to-yellow-500"
          >
            <BlogIcon />
          </Link>
          <Link
            to="https://github.com/suyuying"
            target="_blank"
            className="btn bg-white dark:bg-black shadow-md px-1 my-2 bg-gradient-to-r  hover:from-pink-500 hover:to-yellow-500 "
          >
            <GitHub />
          </Link>
          <Link
            to="https://github.com/suyuying/"
            target="_blank"
            className="btn bg-white dark:bg-black shadow-md px-1 my-2 bg-gradient-to-r  hover:from-pink-500 hover:to-yellow-500 "
          >
            <FaceBook />
          </Link>
        </div>
        <div className="p-7 rounded-2xl mt-7 bg-[#F3F6F6] dark:bg-[#1D1D1D]">
          <div className="flex py-2.5 border-b border-[#E3E3E3] dark:border-[#3D3A3A]">
            <span className="flex-shrink-0 btn bg-white dark:bg-black text-[#6AB5B9]  shadow-md">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 384 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
              </svg>
            </span>
            <div className="text-left ml-2.5">
              <p className="m-0 text-xs text-[#44566C] dark:text-[#A6A6A6]">
                Location
              </p>
              <p className="m-0  break-all">Taiwan</p>
            </div>
          </div>
          <div className="flex py-2.5 border-b border-[#E3E3E3] dark:border-[#3D3A3A]">
            <span className="flex-shrink-0 btn bg-white dark:bg-black text-[#FD7590] shadow-md">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M176 216h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16zm-16 80c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16H176c-8.84 0-16 7.16-16 16v16zm96 121.13c-16.42 0-32.84-5.06-46.86-15.19L0 250.86V464c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V250.86L302.86 401.94c-14.02 10.12-30.44 15.19-46.86 15.19zm237.61-254.18c-8.85-6.94-17.24-13.47-29.61-22.81V96c0-26.51-21.49-48-48-48h-77.55c-3.04-2.2-5.87-4.26-9.04-6.56C312.6 29.17 279.2-.35 256 0c-23.2-.35-56.59 29.17-73.41 41.44-3.17 2.3-6 4.36-9.04 6.56H96c-26.51 0-48 21.49-48 48v44.14c-12.37 9.33-20.76 15.87-29.61 22.81A47.995 47.995 0 0 0 0 200.72v10.65l96 69.35V96h320v184.72l96-69.35v-10.65c0-14.74-6.78-28.67-18.39-37.77z"></path>
              </svg>
            </span>
            <div className="text-left ml-2.5">
              <p className="m-0 text-xs text-[#44566C] dark:text-[#A6A6A6]">
                Email
              </p>
              <p className="m-0  break-all">
                {" "}
                <Link
                  className="m-0 hover:text-[#FA5252] duration-300 transition"
                  to="mailto:ibthemes21@gmail.com"
                >
                  z0952657360@gmail.com
                </Link>
              </p>
            </div>
          </div>
          <div className="flex py-2.5 undefined">
            <span className="flex-shrink-0 btn bg-white dark:bg-black text-[#C17CEB] shadow-md">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path>
              </svg>
            </span>
            <div className="text-left ml-2.5">
              <p className="m-0 text-xs text-[#44566C] dark:text-[#A6A6A6]">
                Birthday
              </p>
              <p className="m-0  break-all">???, 1993</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MyResume() {
  const { colorMode, setColorMode } = useColorMode();
  return (
    <section
      className={clsx("min-h-screen", "bg-img-light", {
        "bg-img-dark": colorMode === "dark",
      })}
    >
      <div className="container grid grid-cols-12 md:gap-10 justify-between my-[100px]">
        <MyResumeSide />
        <div className="col-span-12 lg:col-span-8 ">
          <div className="lg:rounded-2xl bg-white dark:bg-[#111111]">
            <div data-aos="fade">
              <div className="pt-12 md:py-12 px-2 sm:px-5 md:px-10 lg:px-14">
                <h2 className="after-effect after:left-52">About Me</h2>
                <div className="lg:grid grid-cols-12 md:gap-10 pt-4 md:pt-[30px] items-center ">
                  <div className="col-span-12 space-y-2.5">
                    <div className="lg:mr-16">
                      <p className="text-gray-lite dark:text-color-910 leading-7">
                        如果自認
                        沒有比別人幸運,沒有比別人有天份,沒有比別人有背景,那能做的就是比別人有更多的耐心跟努力.
                      </p>
                      <p className="text-gray-lite leading-7 mt-2.5 dark:text-color-910">
                        Life is too short to live someone else's dream
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
