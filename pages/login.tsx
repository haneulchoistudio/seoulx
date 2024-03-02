import { props, redirect } from "~/lib/server/ssr";
import { FaLongArrowAltRight } from "react-icons/fa";
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
    <div className="h-screen flex flex-col justify-center items-center bg-neutral-900 text-white">
      <section className="px-10 lg:px-20 max-w-[1200px] mx-auto w-full py-12 lg:py-20">
        <h1 className="font-bold text-2xl lg:text-4xl text-center mb-3">
          서울엑스 로그인
        </h1>
        <h2 className="font-light text-neutral-400 text-lg lg:text-2xl text-center mb-3">
          Seoul X Login
        </h2>
        <p className="text-center text-base lg:text-lg leading-[1.67] lg:leading-[1.67] text-neutral-400 pb-6 mb-6 border-b">
          회원으로 로그인 하시면 마켓페이지로 이동합니다.
        </p>
        <ul className="w-full max-w-[375px] mx-auto flex flex-col gap-y-4 mb-4 lg:mb-6">
          <div className="flex flex-col gap-y-1.5">
            <label className="font-bold text-lg block">유저이름</label>
            <input
              type="text"
              className="w-full px-3.5 py-2 rounded bg-neutral-900"
            />
          </div>
          <div className="flex flex-col gap-y-1.5">
            <label className="font-bold text-lg block">패스워드</label>
            <input
              type="password"
              className="w-full px-3.5 py-2 rounded bg-neutral-900"
            />
          </div>
        </ul>
        <button
          type="button"
          className="w-full max-w-[375px] mx-auto flex items-center justify-between gap-x-3 lg:gap-x-4 font-medium text-base lg:text-lg px-6 py-3 lg:px-8 lg:py-3.5 rounded border bg-neutral-900/0 border-white/50 text-white lg:text-white/50 lg:hover:border-white lg:hover:text-white"
        >
          <span>로그인하기</span>
          <FaLongArrowAltRight className="text-lg lg:text-xl" />
        </button>
      </section>
    </div>
  );
}
