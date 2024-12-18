import React, { useState } from "react";
import type { NextPage } from "next";
import { useForm } from "react-hook-form";

const urlMail: any = process.env.URL_FETCH_MAIL;

const Lessons: NextPage = () => {
  const [success, setSuccess] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any, e: any) => {
    setisLoading(true);
    fetch(urlMail, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: data.firstname,
        surname: data.lastname,
        email: data.email,
        message: data.message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setSuccess(true);
          setisLoading(false);
          e.target.reset();
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="lessons">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Contact</h1>
        <p>For information about lessons, concerts and other business inquiries.</p>
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
        <input type="text" {...register("firstname", { required: true })} id="first-name" placeholder="First name" />
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
        {errors.message && <span>A message required.</span>}
        {errors.firstname && <span>Name is required.</span>}
        {errors.lastname && <span>Last name is required.</span>}
        {errors.email && <span>Email is required.</span>}
        {success && <span className="success">Thank you. I will contact you soon.</span>}
        <button disabled={isLoading}>Submit</button>
      </form>
    </div>
  );
};

export default Lessons;
