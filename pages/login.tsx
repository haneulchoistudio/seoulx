import { props, redirect } from "~/lib/server/ssr";
import { User } from "~/types";

type Props = {
  user: User | null;
};

export async function getServerSideProps() {
  let user: User | null = null;
  if (user) return redirect("/market", false);
  return props({});
}

export default function Login({ user }: Props) {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <section className="px-10 lg:px-20 max-w-[1200px] mx-auto w-full py-12 lg:py-20">
        <h1 className="font-bold text-2xl lg:text-4xl text-center mb-3">
          서울엑스 로그인
        </h1>
        <h2 className="font-light text-neutral-400 text-lg lg:text-2xl text-center mb-3">
          Seoul X Login
        </h2>
        <p className="text-center text-base lg:text-lg leading-[1.67] lg:leading-[1.67] text-neutral-700 pb-6 mb-6 border-b">
          회원으로 로그인 하시면 마켓페이지로 이동합니다.
        </p>
        <ul className="w-full max-w-[500px] mx-auto">
          <div>
            <label className="font-medium text-lg mb-2.5">유저이름</label>
            <input type="text" className="w-full" />
          </div>
        </ul>
      </section>
    </div>
  );
}
