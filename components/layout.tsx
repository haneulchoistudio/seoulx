import Head from "next/head";

interface ILayout {
  title?: string;
  description?: string;
}

export default function Layout({
  title = "",
  description = "",
  children,
}: ILayout & React.PropsWithChildren) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      {children && children}
    </>
  );
}
