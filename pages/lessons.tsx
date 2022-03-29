import React from 'react'
import type { NextPage } from "next";

const Lessons: NextPage = () => {
  return (
      <div className="lessons">
          <form>
              <h1>Contact me</h1>
              <div className="checkboxes-div">
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
              </div>
              <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="First name"
              />
              <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  placeholder="Last name"
              />
              <input type="email" name="email" id="email" placeholder='Email'/>
              <textarea name="text" id="text" placeholder='Your message' />
              <input type="date" name="date" id="date"/>
              <button>Submit</button>
          </form>
      </div>
  );
}

export default Lessons