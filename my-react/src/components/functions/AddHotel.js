
import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import FormError from "../common/FormError";
import {API_HOTELS_POPULATE} from "../../constants/api";
import useAxios from "../../hooks/useAxios";


function AddHotel() {
    const [submitting, setSubmitting] = useState(false);
	const [serverError, setServerError] = useState(null);

	const history = useHistory();
    const http = useAxios();
   

    const { register, handleSubmit, formState: { errors } } = useForm();
    

    async function onSubmit(input) {
		setSubmitting(true);
		setServerError(null);

	
		console.log(input);

		try {
			const response = await http.post(API_HOTELS_POPULATE, {"data": input});
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
        <div className="heading-text"><p>Add details about the hotel here. Remember to submit the form afterwards</p></div>

        <div className="containerForm">
            
            <form onSubmit={handleSubmit(onSubmit)}>
            {serverError && <FormError>{serverError}</FormError>}

				<fieldset disabled={submitting}>
                <div>
                    <label>Name of the hotel
                        <input {...register("name", { required: true, minLength: 3 })} />
                        {errors.name && <span>This field is required, minimum 3 characters</span>}
                    </label>
                </div>


                <div><label>Email
                    <input {...register("email", { required: true, minLength: 4 })} />
                    {errors.email && <span>{errors.email.message}</span>}</label></div>


                    <div><label>Description text
                    <textarea {...register("message", { required: true, minLength: 10 })} />
                    {errors.message && <span>This field is required, minimum 10 characters</span>}</label></div>


                <div><label>Price
                <input {...register("price", { required: true, minLength: 1 })} />
                    {errors.number && <span>Please add a price in number format</span>}</label></div>

                    <div><label>Distance to airport
                <input {...register("airportdistance", { required: true, minLength: 1 })} />
                    {errors.number && <span>Please add kilometers to airport</span>}</label></div>

                    <div><label>Distance to centrum
                <input {...register("centrumdistance", { required: true, minLength: 1 })} />
                    {errors.number && <span>Please add kilometers to centrum</span>}</label></div>

                    <div><label>Street name
                <input {...register("street name", { required: true, minLength: 1 })} />
                    {errors.message && <span>Please add street name</span>}</label></div>

                    <div><label>Post name
                <input {...register("postname", { required: true, minLength: 1 })} />
                {errors.message && <span>Please add post name</span>}</label></div>

                    <div><label>Post number
                <input {...register("postnumber", { required: true, maxLength: 4 })} />
                    {errors.number && <span>Please add post number</span>}</label></div>

                    <button>{submitting ? "Submitting..." : "Submit"}</button>
                    </fieldset>
            </form>
        </div>




</>

    );
}

export default AddHotel;