import {useRouter, useSearchParams} from "next/navigation";

const AuthCallback = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const origin = searchParams.get("origin");

  return <div> Auth callback</div>;
};

export default AuthCallback;
