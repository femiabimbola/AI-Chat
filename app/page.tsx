import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import {ArrowRight} from "lucide-react";
import {buttonVariants} from "@/components/ui/button";

const Home = () => {
  return (
    <MaxWidthWrapper className="mb-12 mt-28 sm:mt-32 flex flex-col items-center justify-center text-center">
      <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
        <p className="text-sm font-semibold text-gray-700">
          Chat with PDF is now public
        </p>
      </div>
      <h1 className="max-w-4xl text-5xl font-bold md:text6xl lg:text-7xl">
        Get insight from your <span className="text-blue-600">documents</span>{" "}
        in seconds
      </h1>
      <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
        Chat with PDF allows you to have conversation with any PDF and gain
        insight from the documents. Upload your documents and start asking
        questions immediately.
      </p>
      <Link href="/dashboard" target="_blank" className={buttonVariants()}>
        Get Started <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </MaxWidthWrapper>
  );
};

export default Home;
