import {useRouter, useSearchParams} from "next/navigation";
import {trpc} from "../_trpc/client";

const AuthCallback = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const origin = searchParams.get("origin");

  const {data, isLoading} = trpc.authCallback.useQuery(undefined, {
    onSuccess: ({success}) => {
      if (success) {
        router.push("");
      }
    },
  });
  return <div> Auth callback</div>;
};

export default AuthCallback;
