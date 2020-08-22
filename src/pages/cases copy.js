import Layout from '../components/Layout';
import Case_List from '../components/Case_List';
import fetch from 'isomorphic-unfetch';
// import {useState} from 'react';


const Cases = ({cases}) => {
  // const [state, setState] = useState({cases:[], isLoading:false})
  


  // Making an API call to Cases-API
  // getCases((data) => {
  //   setState((prev) => ({...prev, cases:data}))
  // })
  return (
    <Layout title="Cases | Covid Anchor">
      <h1>Cases Pages</h1>
      <div className="cases">
        {cases.map((item, key) =>{
          return <Case_List key={key} caseData={item} />
        })}
      </div>
    </Layout>
  );
}
const CASE_API = 'http://127.0.0.1:5000';
export const getStaticProps = async() => {
  let response = await fetch(CASE_API)
  let data =  await response.json()
  console.log(data);
  return {
    props: {
      

  }}
}

export default Cases;


// Get Cases from Flask
// const CASE_API = 'http://127.0.0.1:5000';
// let getCases = async(update) => {
//   // let response = await fetch(CASE_API)
//   // let data =  await response.json()
//   console.log(update(data))
//   await update(data)
// } 