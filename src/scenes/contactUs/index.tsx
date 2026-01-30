import { useForm } from "react-hook-form";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText";
import "./contact.css";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contactus" className="contact-section">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* HEADER */}
        <motion.div
          className="contact-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-primary">JOIN NOW</span> TO GET IN SHAPE
          </HText>
          <p className="contact-description">
            Join our gym today and gain access to world-class facilities, expert
            trainers, and a variety of classes tailored to help you reach your
            goals.
          </p>
        </motion.div>

        {/* FORM + IMAGE */}
        <div className="contact-content">
          {/* FORM */}
          <motion.div
            className="contact-form-wrapper"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/e8a5bdfa807605332f809e5656e27c6e"
              method="POST"
              className="contact-form"
            >
              <input
                className="contact-input"
                type="text"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="contact-error">
                  This field is required (max 100 characters).
                </p>
              )}

              <input
                className="contact-input"
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern:
                    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="contact-error">Invalid email address.</p>
              )}

              <textarea
                className="contact-input"
                placeholder="MESSAGE"
                rows={4}
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="contact-error">
                  Message is required (max 2000 characters).
                </p>
              )}

              <button type="submit" className="contact-button">
                SUBMIT
              </button>
            </form>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            className="contact-image-wrapper"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <img
              className="contact-image"
              alt="contact-us-page-graphic"
              src={ContactUsPageGraphic}
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
