import Layout from '../components/Layout';
import Case_List from '../components/Case_List';
import fetch from 'isomorphic-unfetch';


const Cases = ({ cases }) => {
  return (
    <Layout title="Cases | Covid Anchor">
      <div className="content">
        <h1>Cases Pages</h1>


        {/* List of Cases */}
        <div className="cases">
          {cases.map((item, key) =>
            <Case_List key={key} caseData={item} />
          )}
        </div>
        {/* Cases */}



        {/* STYLING */}
        <style jsx>
          {`
          .content{
            width: 100%;
            height: 100%;
            padding: 4rem;
          }
          .cases{
            width: 100%;
            height: 100%;
            display:grid;
            grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
            gap: 4rem;

            }

          `}

        </style>
      </div>
    </Layout>
  );
}

// Get Cases
const CASE_API = 'http://127.0.0.1:5000';
export async function getStaticProps() {
  const response = await fetch(CASE_API)
  const cases = await response.json()
  console.log(cases);
  return {
    props: {
      cases,
    },
  }
}

export default Cases;
