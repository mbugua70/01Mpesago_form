/* eslint-disable react-refresh/only-export-components */
// import {Suspense} from 'react'
// import { getUserData } from "./api";

// import {useLoaderData, Await, defer} from 'react-router-dom'
// import { requireAuth } from "./utilis";

import SurveyForm from './surveyform';

// export async function loader ({request}) {
//     await requireAuth(request)
//     return defer({userData: getUserData()});
// }


const SurveyPage = () =>{



    return(
        <>
        <div className="container">



          <SurveyForm/>
        </div>
        </>
    )
}

export default SurveyPage;