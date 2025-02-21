// import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().min(3).max(30).required('Please enter your first name'),
    email: yup.string().required('Please enter your email address'),
    message: yup.string().min(3).max(2000).required('Please add a message'),
  })
  .required();

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Your name</label>
      <input
        className="border-2"
        type="text"
        name="name"
        {...register("name")}
      />
      <p className="text-red-600">{errors.name?.message}</p>
      <label htmlFor="email">Your email address</label>
      <input
        className="border-2"
        type="text"
        name="email"
        {...register("email")}
      />
      <p className="text-red-600">{errors.email?.message}</p>
      <label htmlFor="message">Write us your message</label>
      <input
        className="border-2"
        type="text"
        name="message"
        {...register("message")}
      />
      <p className="text-red-600">{errors.message?.message}</p>
      <input type="submit" />
    </form>
  );

  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [message, setMessage] = useState("");

  //   function onFormSubmit(e) {
  //     e.preventDefault();
  //     // this is where I would use the states as a payload in an api call:
  //     const body = {
  //       name,
  //       email,
  //       message,
  //     };
  //     // and then a fetch to the api

  //     console.log(body);

  //     if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
  //       alert("Please enter you name, email and a message before sending.");
  //     } else {
  //       alert(
  //         "Thank you for reaching out. We will contact you as soon as possible. Have a nice day!"
  //       );
  //     }
  //   }

  //   function onNameChange(event) {
  //     setName(event.target.value);
  //     console.log(event.target.value);
  //   }

  //   function onEmailChange(e) {
  //     setEmail(e.target.value);
  //   }

  //   function onMessageChange(e) {
  //     setMessage(e.target.value);
  //   }

  //   return (
  //     <>
  //       <form onSubmit={handleSubmit(onSubmit)}>
  //         <label htmlFor="name">Your name</label>
  //         <input
  //           type="text"
  //           name="name"
  //           value={name}
  //           placeholder="Your name"
  //           onChange={onNameChange}
  //           required
  //         />
  //         <label htmlFor="email">Your email address</label>
  //         <input
  //           type="email"
  //           name="email"
  //           value={email}
  //           placeholder="Your email"
  //           onChange={onEmailChange}
  //           required
  //         />
  //         <label htmlFor="message">Write us your message</label>
  //         <input
  //           type="text"
  //           name="message"
  //           value={message}
  //           placeholder="Your message"
  //           onChange={onMessageChange}
  //           required
  //         />
  //         <button>Send message</button>
  //       </form>
  //     </>
  //   );
}
