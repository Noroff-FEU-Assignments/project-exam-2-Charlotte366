import Heading from "../layout/Heading";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import FormError from "../common/FormError";
//import ReactDatePicker from "react-datepicker";
import {API_ENQUIRY} from "../../constants/api"; 
import React from 'react';
import background from "../../images/background.jpg";

 
function HotelEnquiry() {
  const [submitting, setSubmitting] = useState(false);
	const [serverError, setServerError] = useState(null);

	const history = useHistory();
   

    const { register, handleSubmit, formState: { errors } } = useForm();
    
    
    async function onSubmit(input) {
		setSubmitting(true);
		setServerError(null);

	
		console.log(input);

		try {
			const response = await axios.post(API_ENQUIRY, { "data": input});
			console.log("response", response.data);
			history.push("/");
		} catch (error) {
			console.log("error", error);
			setServerError(error.toString());
		} finally {
			setSubmitting(false);
		}
	} 

 return (
        <>
      

        <Heading title="Please ask to book your hotelroom here" />

        <div style={{ backgroundImage: `url(${background})` }}>
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

                    <div>
                    <label>Number of persons *over 6 persons? Please contact us
                <input type="number" {...register("number", { min: 1, max: 6 })} />
                {errors.number && <span>This field is required, min:1/</span>}
                    </label>
                </div>

                <div>
                    <label>Number of days 
                <input type="days" {...register("days", { min: 1, max: 30 })} />
                {errors.number && <span>We are sorry, you cant book a room for more than 30days min:1/</span>}
                    </label>
                </div>

                   
    
                <div><label>Please add your wanted dates, and other comments regarding your stay
                    <textarea {...register("comments", { required: true, minLength: 10 })} />
                    {errors.message && <span>This field is required, minimum 10 characters</span>}</label></div>


                    <button>{submitting ? "Submitting..." : "Submit"}</button>
                    </fieldset>
            </form>
        </div>
        </div>

</>

    );
}

export default HotelEnquiry;