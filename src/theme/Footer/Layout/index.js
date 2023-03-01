import React from "react";
import clsx from "clsx";
import ProgressBar from "@site/src/components/ProgressBar";

export default function FooterLayout({ style, links, logo, copyright }) {
  return (
    <footer
      className={clsx(
        "font-sans container-fluid bg-gray-900 text-stone-200 pt-6",
        {
          "footer--dark": style === "dark",
        }
      )}
    >
      <ProgressBar />
      <div className="container container-fluid">
        {links}
        {(logo || copyright) && (
          <div className="footer__bottom text--center">
            {logo && <div className="margin-bottom--sm">{logo}</div>}
            {copyright}
          </div>
        )}
      </div>
    </footer>
  );
}
