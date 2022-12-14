import Head from "next/head";
import { Form } from "../components/Form";
// import Form from "../components/FormSection";

export default function Home() {
  return (
    <>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <div className="backdrop-filter backdrop-blur-sm bg-opacity-50 max-w-screen overflow-hidden max-h-screen">
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Form />
      </div>
    </>
  );
}
