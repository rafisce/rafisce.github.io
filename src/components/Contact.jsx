import { useEffect, useRef, useState } from "react";
import { styles } from "../utils/styles";
import emailjs from "@emailjs/browser";
import { Header } from "../utils/UtilityComponents";
import { motion } from "framer-motion";
import { Envelope } from "../utils/icons";

const Contact = ({ state, dark }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState("nothing");

  const sendEmail = (e) => {
    contactRef.current.checkValidity();
    contactRef.current.reportValidity();
    e.preventDefault();
    if (name!==""&&email!==""&&message!=="") {
      setAlert("sent");
      emailjs
        .send(
          import.meta.env.VITE_YOUR_SERVICE_ID,
          import.meta.env.VITE_YOUR_TEMPLATE_ID,
          {
            from_name: name,
            email: email,
            phone: phone,
            message: message,
          },
          import.meta.env.VITE_YOUR_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result.text);
            setAlert("Message sent =)");
            setName("");
            setEmail("");
            setPhone("");
            setMessage("");
          },
          (error) => {
            console.log(error.text);
            setName("");
            setEmail("");
            setPhone("");
            setAlert("Error! Message not sent =(");
          }
        );

      setTimeout(() => {
        setAlert("nothing");
      }, 5000);
    }
  };

  const contactRef = useRef();
  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
  };

  useEffect(() => {}, [state, dark]);

  return (
    <section
      className={`${styles.padding} max-w-7xl mx-auto relative`}
      id="contact-section"
    >
      <Header text="Contact Me." dark={dark} />

      <div>
        <motion.form
          variants={container}
          initial="hidden"
          whileInView="show"
          className={`flex flex-col ${
            dark ? "bg-dark/40" : "bg-day/40"
          } rounded-[10px] xs:my-10  xs:px-3 xs:py-10 sm:p-16 sm:my-20 gap-5 relative backdrop-blur-[5px] text-white `}
          ref={contactRef}
        >
          <div>
            {alert === "sent" ? (
              <Envelope />
            ) : (
              <div
                className={`h-[60px] ${
                  alert === "nothing"
                    ? "text-transparent"
                    : alert === "Error! Message not sent"
                    ? " text-red-600"
                    : "text-green-300"
                } text-center`}
              >
                {alert}
              </div>
            )}
          </div>
          <motion.input
            className={`name p-3 rounded-[5px]  ${
              dark ? "bg-transparent/40" : "bg-day/40"
            } focus:outline-none placeholder:text-white`}
            placeholder="Your name"
            value={name}
            autoComplete="name"
            id="name"
            required
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
            variants={item}
          />
          <motion.div
            className="ephone flex justify-stretch gap-5 xs:flex-col md:flex-row"
            variants={item}
          >
            <input
              className={`xs:w-full md:w-[50%] p-3 rounded-[5px]  ${
                dark ? "bg-transparent/40" : "bg-day/40"
              } text-[white] focus:outline-none placeholder:text-white`}
              placeholder="Your Email"
              value={email}
              type="email"
              autoComplete="email"
              id="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className={`xs:w-full md:w-[50%] p-3 rounded-[5px]  ${
                dark ? "bg-transparent/40" : "bg-day/40"
              } text-[white] focus:outline-none placeholder:text-white`}
              placeholder="Phone"
              autoComplete="phone"
              id="phone"
              value={phone}
              type="phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </motion.div>
          <motion.textarea
            className={`message p-3 rounded-[5px] ${
              dark ? "bg-transparent/40" : "bg-day/40"
            } text-[white] focus:outline-none placeholder:text-white`}
            placeholder="Message"
            id="message"
            rows={10}
            value={message}
            required
            onChange={(e) => setMessage(e.target.value)}
            variants={item}
          />
          <motion.button
            variants={item}
            className={`send p-3 rounded-[5px] bg-${
              dark ? "dark" : "day"
            } inline-block`}
            onClick={sendEmail}
          >
            Send
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
