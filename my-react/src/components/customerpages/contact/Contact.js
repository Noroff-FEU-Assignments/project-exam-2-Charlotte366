//import Heading from "../../layout/Heading";
import React from "react";
import { useForm } from "react-hook-form";



/*export default function Contact() {
    return (
        <>
            <Heading title="Contact" />
            <p>HOW CAN WE HELP?</p>
        </>
    );
}
*/



function App() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    function onSubmit(data) {
        console.log(data);
    }

    console.log(errors);

    return (
        <div className="containerForm">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>First name
                        <input {...register("firstName", { required: true, minLength: 3 })} />
                        {errors.firstName && <span>This field is required, minimum 3 characters</span>}
                    </label>
                </div>

                <div><label>Last name
                    <input {...register("lastName", { required: true, minLength: 4 })} />
                    {errors.lastName && <span>This field is required, minimum 4 characters</span>}</label></div>

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


                <button>Send</button>
            </form>
        </div>
    );
}

export default App;