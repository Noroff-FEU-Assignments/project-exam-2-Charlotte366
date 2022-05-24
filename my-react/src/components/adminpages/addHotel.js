import Heading from "../../layout/Heading";
import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import useAxios from "../../../hooks/useAxios";
import FormError from "../../common/FormError";



function AddContact() {
    const [submitting, setSubmitting] = useState(false);
	const [serverError, setServerError] = useState(null);

	const history = useHistory();
    const http = useAxios();

    const { register, handleSubmit, formState: { errors } } = useForm();

  
    async function onSubmit(data) {
		setSubmitting(true);
		setServerError(null);

		data.status = "publish";

		console.log(data);

		try {
			const response = await http.post("contacts", data);
			console.log("response", response.data);
			history.push("/dashboard/posts");
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
                        <input {...register("fullName", { required: true, minLength: 3 })} />
                        {errors.fullName && <span>This field is required, minimum 3 characters</span>}
                    </label>
                </div>


                <div><label>Email
                    <input {...register("email", { required: true, minLength: 4 })} />
                    {errors.email && <span>{errors.email.message}</span>}</label></div>

                <div><label>Subject, *required
                    <select {...register("subject", { required: true })} >
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