import { useRouter } from "next/router";
import Head from "next/head";
import Menu from "../../components/Menu";
import Main from "../../components/Main";

const Employee = () => {
  const router = useRouter();
  const { employee } = router.query;

  return (
    <div id="home">
      <Head>
        <title>{employee}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Menu />
      <Main employee={employee} />
      <style global jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        #home {
          display: flex;
          min-height: 100vh;
        }
      `}</style>
    </div>
  );
};

export default Employee;
