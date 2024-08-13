import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from "react-router-dom"
// import Layout from "./layout"

import SurveyPage from "./survey"
import Layout from "./layout"
import PageNotFound from "./404"
import SurveyLayout from "./surveylayout"

// import { surveyLoader} from "./survey"


import SurveyForm from "./surveyform";



// import { requireAuth } from "./utilis"
import { requireAuth } from "./utilis";
import FormLayout from "./FormLayout";
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>

        <Route path="/" element={<SurveyLayout />} >
          <Route
            path="/"
            element={<FormLayout />}
          >

          </Route>
          {/* <Route
            path="/survey"
            element={<SurveyPage />}
            loader={async ({ request }) => {
              return await requireAuth(request);
            }}
          /> */}

          {/* <Route
            path="/survey/edit"
            element={<EditEvent />}
            loader={async ({ request }) => {
              return await requireAuth(request);
            }}
          /> */}
          {/*
          <Route
            path="/survey"
            element={<SurveyForm />}
            // loader={async ({request}) => {
            //     return requireAuth(request)
            // }}
          /> */}
        </Route>

      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);