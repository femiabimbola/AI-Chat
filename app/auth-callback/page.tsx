import {useRouter, useSearchParams} from "next/navigation";
import {trpc} from "../_trpc/client";

const AuthCallback = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const origin = searchParams.get("origin");

  const {data,isLoading} = trpc.test.useQuery();
  return <div> Auth callback</div>;
};

export default AuthCallback;
