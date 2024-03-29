
import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import FormError from "../common/FormError";
import {API_CONTACT} from "../../constants/api"; 



function AddContact() {
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

                    <div><label>Phone
                    <input {...register("phone", { required: false, minLength: 4 })} />
                    {errors.email && <span>{errors.email.message}</span>}</label></div>

                    
                <div><label>Gender
                    <select {...register("gender", { required: true })} >
                        <option value="female">female</option>
                        <option value="male">male</option>
                        <option value="other">other</option>
                        {errors.subject && <span>This field is required</span>}
                    </select>
                </label>
                </div>


                <div><label>Message Us
                    <textarea {...register("message", { required: true, minLength: 10 })} />
                    {errors.message && <span>This field is required, minimum 10 characters</span>}</label></div>


                    <button>{submitting ? "Submitting..." : "Submit"}</button>
                    </fieldset>
            </form>
        </div>




</>

    );
}

export default AddContact;