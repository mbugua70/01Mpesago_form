/* eslint-disable react-refresh/only-export-components */
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { ToastContainer, toast, Slide } from "react-toastify";
import { surveyForm } from "./api";
import { OfflineContext } from "../context_offline/offline_context";
import useOnlineStatus from "../custom_hook/useOffline";

const SurveyForm = () => {
  const isOnline = useOnlineStatus();

  const form = useForm({
    defaultValues: {
      name: "",
      second_name: "",
      third_name: "",
      phone: "",
    },
  });

  const { register, handleSubmit, reset, formState } = form;
  const { isSubmitSuccessful, isSubmitting } = formState;

  const onSubmit = async (data) => {
      try {
        const response = await surveyForm(data);
        if (response) {
          const MySwal = withReactContent(Swal);
          MySwal.fire({
            html: <i>Your data have been submitted successfully!</i>,
            icon: "success",
          });
        }
      } catch (err) {
        const MySwal = withReactContent(Swal);
        MySwal.fire({
          html: <i>{err.message}</i>,
          icon: "error",
        });
      }

  };

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <>
      <div className="card-panel card-relative">
        <form
          className="form"
          id="form"
          method="post"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h4>Report</h4>
          <label htmlFor="name">1. First Name</label>
          <input
            className="input"
            type="text"
            name="name"
            id="name"
            placeholder="Enter your first name"
            {...register("name")}
          />
          <label htmlFor="second_name">2. Second Name</label>
          <input
            className="input"
            type="text"
            name="second_name"
            id="second_name"
            placeholder="Enter second name"
            {...register("second_name")}
          />
          <label htmlFor="third_name">3. Third Name</label>
          <input
            className="input"
            type="text"
            name="third_name"
            id="third_name"
            placeholder="Enter name"
            {...register("third_name")}
          />
          <label htmlFor="phone">4. Number registered on Mpesa go</label>
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Enter the  number"
            {...register("phone")}
          />


          <button className="btn-large" id="hide_icons" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                submitting{" "}
                <div
                  className="preloader-wrapper icon-submit active"
                  id="preloader_icon_three"
                >
                  <div className="spinner-layer spinner-green-only">
                    <div className="circle-clipper left">
                      <div className="circle"></div>
                    </div>
                    <div className="gap-patch">
                      <div className="circle"></div>
                    </div>
                    <div className="circle-clipper right">
                      <div className="circle"></div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                submit{" "}
                <i className="material-icons" id="buttonSubmit_icon">
                  send
                </i>
              </>
            )}
          </button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default SurveyForm;