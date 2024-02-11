import {useRouter, useSearchParams} from "next/navigation";
import {trpc} from "../_trpc/client";

const AuthCallback = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const origin = searchParams.get("origin");

  //  It runs on the page load
  trpc.authCallback.useQuery(undefined, {
    onSuccess: ({success}) => {
      if (success) {
        // if user is synced to db
        router.push(origin ? `/${origin}` : "/dashboard");
      }
    },
    onError: (error) => {
      if (error.data?.code === "UNAUTHORIZED") {
        router.push("/sign-in");
      }
    },
    retry: true,
    retryDelay: 500,
  });
  return <div></div>;
};

export default AuthCallback;
