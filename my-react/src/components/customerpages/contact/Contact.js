import Heading from "../../layout/Heading";
import React from "react";
import { useForm } from "react-hook-form";



/*export default function Contact() {
    return (
        <>
            <Heading title="HOW CAN WE HELP" />
            <p>If you have any questions, please feel free to use the contact form below. 
We look forward to hearing from you</p>
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
        <>
        <Heading title="HOW CAN WE HELP?" />
        <div className="heading-text"><p>If you have any questions, please feel free to use the contact form below.</p> 
<p>We look forward to hearing from you</p></div>

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


                <button>SEND</button>
            </form>
        </div>




</>

    );
}

export default App;