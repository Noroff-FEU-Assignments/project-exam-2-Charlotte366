/*
import Heading from "../../layout/Heading";
import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import FormError from "../../common/FormError";
import ReactDatePicker from "react-datepicker";
import {API_ENQUIRY} from "../../../constants/api"; 



function Booking() {
    const [submitting, setSubmitting] = useState(false);
	const [serverError, setServerError] = useState(null);

	const history = useHistory();
   

    const { register, handleSubmit, formState: { errors } } = useForm();
    
    
    async function onSubmit(input) {
		setSubmitting(true);
		setServerError(null);

	
		console.log(input);

		try {
			const response = await axios.post(API_CONTACT, { "data": input});
			console.log("response", response.data);
			history.push("/contact");
		} catch (error) {
			console.log("error", error);
			setServerError(error.toString());
		} finally {
			setSubmitting(false);
		}
	}


    return (
        <>
        <Heading title="HOW CAN WE HELP?" />
        <div className="heading-text"><p>If you have any questions, please feel free to use the contact form below.</p> 
<p>We look forward to hearing from you</p></div>

        <div className="containerForm">
            
            <form onSubmit={handleSubmit(onSubmit)}>
            {serverError && <FormError>{serverError}</FormError>}

				<fieldset disabled={submitting}>
                <div>
                    <label>Full Name
                        <input {...register("name", { required: true, minLength: 3 })} />
                        {errors.fullName && <span>This field is required, minimum 3 characters</span>}
                    </label>
                </div>


                <div><label>Email
                    <input {...register("email", { required: true, minLength: 4 })} />
                    {errors.email && <span>{errors.email.message}</span>}</label></div>

                    <label>Date of arrival</label>
          <Controller
            control={control}
            name="ReactDatepicker"
            render={({ field }) => (
              <ReactDatePicker
                className="input"
                placeholderText="Select date"
                onChange={(e) => field.onChange(e)}
                selected={field.value}
              />
            )}
          />

<label>Number of persons</label>
          <Controller
            render={({ field }) => (
              <NumberFormat thousandSeparator {...field} />
            )}
            name="numberFormat"
            className="input"
            control={control}
          />

         <label>Number of days</label>
          <Controller
            render={({ field }) => (
              <NumberFormat thousandSeparator {...field} />
            )}
            name="numberFormat"
            className="input"
            control={control}
          />


                <div><label>Comments
                    <textarea {...register("comments", { required: true, minLength: 10 })} />
                    {errors.message && <span>This field is required, minimum 10 characters</span>}</label></div>


                    <button>{submitting ? "Submitting..." : "Submit"}</button>
                    </fieldset>
            </form>
        </div>




</>

    );
}

export default Booking;

*/

import Heading from "../../layout/Heading";




export default function HotelEnquiry() {
 return (
  <>
   <Heading title="Hotel Enquiry" />
  
 

  </>
 );
}