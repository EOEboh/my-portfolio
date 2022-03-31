import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
    // for setting form submit status
    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null },
      });
    //   for setting form inputs
      const [inputs, setInputs] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const handleServerResponse = (ok, msg) => {
        if (ok) {
          setStatus({
            submitted: true,
            submitting: false,
            info: { error: false, msg: msg },
          });
          setInputs({
            name: '',
            email: '',
            message: '',
          });
        } else {
          setStatus({
            info: { error: true, msg: msg },
          });
        }
      };

      const handleOnChange = (e) => {
        e.persist();
        setInputs((prev) => ({
          ...prev,
          [e.target.id]: e.target.value,
        }));
        setStatus({
          submitted: false,
          submitting: false,
          info: { error: false, msg: null },
        });
      };
      const handleOnSubmit = (e) => {
        e.preventDefault();
        setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
        axios({
          method: 'POST',
          url: 'https://formspree.io/f/xknyvqjg',
          data: inputs,
        })
          .then((response) => {
            handleServerResponse(
              true,
              'Thank you for reaching out. I would surely get back to you. 😊',
            );
          })
          .catch((error) => {
            handleServerResponse(false, error.response.data.error);
          });
      };

  return (
      <>
    <form className="form rounded-lg bg-white p-4  flex flex-col"
    onSubmit={handleOnSubmit}>
            <label htmlFor="name" className="text-sm text-gray-600 mx-4">
              {" "}
              Your Name
            </label>
            <input
              id='name'
              className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
              type="text"
              name="_replyto"
              required
              onChange={handleOnChange}
              value={inputs.name}
            />
            <label htmlFor="email" className="text-sm text-gray-600 mx-4 mt-4">
              Email
            </label>
            <input
              className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
              id='email'
              type="email"
              name="_replyto"
              onChange={handleOnChange}
              required
              value={inputs.email}
            />
            <label
              htmlFor="message"
              className="text-sm text-gray-600 mx-4 mt-4"
            >
              Message
            </label>
            <textarea
              rows="4"
              id='message'
              className="font-light rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-blue-500"
              name='message'
              required
              onChange={handleOnChange}
              value={inputs.message}
            />
            <button
              disabled={status.submitting}
              type="submit"
              className="bg-blue-500 rounded-md w-1/2 mx-4 mt-8 py-2 text-gray-50 text-xs font-bold"
            >
         {!status.submitting
            ? !status.submitted
              ? 'Send Message😎'
              : 'Message Sent 😊'
            : 'Sending...😶'}
            </button>
          </form>
             {status.info.error && (
                <div className="error">Error: {status.info.msg}</div>
              )}
              {!status.info.error && status.info.msg && (<p className=" rounded-md w-1/2 mx-4 mt-8 py-2 text-gray-50 text-xl font-bold">
                  {status.info.msg}
               </p>)}
        </>
  )
}

export default Form