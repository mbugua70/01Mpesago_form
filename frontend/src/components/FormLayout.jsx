import { Outlet } from "react-router-dom";
import SurveyPage from "./survey";

export default function FormLayout() {

  return (
    <>
      <SurveyPage />
      <Outlet  />
    </>
  );
}
