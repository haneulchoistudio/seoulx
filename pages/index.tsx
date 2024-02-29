import { FaLongArrowAltRight } from "react-icons/fa";

export default function Index() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <section className="px-10 lg:px-20 max-w-[1200px] mx-auto w-full py-12 lg:py-20">
        <h1 className="font-bold text-2xl lg:text-4xl text-center mb-3">
          서울엑스
        </h1>
        <h2 className="font-light text-neutral-400 text-lg lg:text-2xl text-center mb-3">
          Seoul X
        </h2>
        <p className="text-center text-base lg:text-lg leading-[1.67] lg:leading-[1.67] text-neutral-700 pb-6 mb-6 border-b">
          엘리자베스타운 한인들을 위한 김치, 깍두기, 그리고 각종 맛나는 반찬.
        </p>
        <button
          type="button"
          className="w-full sm:w-max mx-auto flex items-center gap-x-3 lg:gap-x-4 font-medium text-base lg:text-lg px-6 py-3 lg:px-8 lg:py-3.5 rounded border text-neutral-700 border-neutral-700 lg:hover:bg-neutral-900 lg:hover:border-transparent lg:hover:text-white"
        >
          <span>회원으로 로그인</span>
          <FaLongArrowAltRight className="text-lg lg:text-xl" />
        </button>
      </section>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}
