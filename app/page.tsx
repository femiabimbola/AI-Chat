import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import {ArrowRight} from "lucide-react";
import {buttonVariants} from "@/components/ui/button";

const Home = () => {
  return (
    <>
      {/* Introductory & Hero section */}
      <MaxWidthWrapper className="mb-12 mt-28 sm:mt-32 flex flex-col items-center justify-center text-center">
        <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
          <p className="text-sm font-semibold text-gray-700">
            Chat with PDF is now public
          </p>
        </div>
        <h1 className="max-w-4xl sm:text-5xl text-4xl font-bold md:text6xl lg:text-7xl">
          Get insight from your <span className="text-blue-600">documents</span>{" "}
          in seconds
        </h1>
        <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
          Chat with PDF allows you to have conversation with any PDF and gain
          insight from the documents. Upload your documents and start asking
          questions immediately.
        </p>
        <Link
          href="/dashboard"
          target="_blank"
          className={buttonVariants({size: "lg", className: "mt-5 "})}
        >
          Get Started <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </MaxWidthWrapper>

      {/* Value proposition section */}
      <div>
        <div className="relative isolate">
          <div
            aria-hidden="true" /* aria-hidden is for decorational stuff , it is the sub */
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{clipPath: "polygon()"}}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b6] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" /* the left subtle gradient*/
            />
          </div>
          <div>
            <div className="mx-auto max-w-6xl px-6"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
