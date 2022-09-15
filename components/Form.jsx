import Link from "next/link";

import React from "react";
import FormSection from "./FormSection";
import { MdCancel } from "react-icons/md";

export const Form = () => {
  return (
    <div className="h-screen relative flex flex-col justify-center">
      <nav className="w-full rounded-2xl sm:max-w-5xl max-w-[96vw] mx-auto">
        <div className="mx-8 p-4">
          <div className="flex items-center justify-between ">
            <Link href="/">
              <span className="text-3xl text-blue-700 font-semibold logo">
                Villa
              </span>
            </Link>

            <MdCancel />
          </div>
        </div>
      </nav>
      <FormSection />
    </div>
  );
};
