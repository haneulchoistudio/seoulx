import { props, redirect } from "~/lib/server/ssr";
import { User } from "~/types";

type Props = { user: User | null };

export async function getServerSideProps() {
  let user: User | null = null;
  if (!user) return props({ user });
  return redirect("/market", false);
}

export default function Market({ user }: Props) {
  return (
    user && (
      <div className="flex flex-col justify-center items-center bg-neutral-900 text-white">
        <section className="px-10 lg:px-20 max-w-[1200px] mx-auto w-full py-12 lg:py-20">
          <header className="flex justify-between items-center gap-x-2.5">
            {/* ..header */}
          </header>
          <main>{/* ..content body */}</main>
          <footer className="flex flex-col gap-y-2.5">{/* ..footer */}</footer>
        </section>
      </div>
    )
  );
}
