import React from "react";
import type { NextPage } from "next";
import { useForm } from "react-hook-form";

const Lessons: NextPage = () => {
    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <div className="lessons">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h1>Contact</h1>
                <p>
                    * for information about lessons, concerts and other business
                    inquiries.
                </p>
                {/* <div className="checkboxes-div">
                  <input type="checkbox" name="classes" id="classes" />
                  <label htmlFor="classes">Classes</label>
                  <br />
                  <input type="checkbox" name="concert" id="concert" />
                  <label htmlFor="concert">Concert</label>
                  <br />
                  <input
                      type="checkbox"
                      name="other-reason"
                      id="other-reason"
                  />
                  <label htmlFor="other-reason">Other</label>
              </div> */}
                <input
                    type="text"
                    {...register("firstname", { required: true })}
                    id="first-name"
                    placeholder="First name"
                />
                <input
                    type="text"
                    // name="last-name"
                    id="last-name"
                    placeholder="Last name"
                    {...register("lastname", { required: true })}
                />
                <input
                    type="email"
                    // name="email"
                    id="email"
                    placeholder="Email"
                    {...register("email", { required: true })}
                />
                <textarea
                    // name="text"
                    id="text"
                    placeholder="Your message"
                    {...register("message", { required: true })}
                />
                {/* <input type="date" name="date" id="date"/> */}
                {errors.message && (<span>A message required.</span>)}
                {errors.firstname && (<span>Name is required.</span>)}
                {errors.lastname && (<span>Last name is required.</span>)}
                {errors.email && (<span>Email is required.</span>)}
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Lessons;
