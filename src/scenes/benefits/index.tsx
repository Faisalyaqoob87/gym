import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import Benefit from "./Benefit";
import "./benefits.css";

const benefits: Array<BenefitType> = [
 {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Experience a gym built for results. Our world-class studios feature cutting-edge equipment, innovative workout zones, and expert guidance to make every session effective and enjoyable. Whether you’re here to build strength, improve endurance, or transform your body, we provide everything you need to succeed.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Explore a wide variety of classes designed to suit every fitness level and goal. From high-intensity cardio and strength training to calming yoga and flexibility sessions, we have something for everyone. Our expert instructors ensure each class is effective, fun, and motivating, helping you stay consistent and reach your fitness goals faster.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Train with the best! Our certified trainers bring years of experience, knowledge, and motivation to every session. Whether you’re a beginner or an advanced athlete, they provide personalized guidance, ensure proper form, and create workouts tailored to your goals. With our expert team by your side, every session is safe, effective, and designed to help you achieve real results.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="benefits-section">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
        {/* HEADER */}
        <motion.div
          className="benefits-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>MORE THAN JUST GYM.</HText>
          <p className="benefits-subtext">
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>

        {/* BENEFIT CARDS */}
        <motion.div
          className="benefits-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {benefits.map((benefit) => (
            <Benefit
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHIC + TEXT */}
        <div className="benefits-content">
          <img
            className="benefits-image"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />

          <div className="benefits-text">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <HText>
                MILLIONS OF HAPPY MEMBERS GETTING{" "}
                <span className="text-primary">FIT</span>
              </HText>
            </motion.div>

            <motion.p
              className="benefits-paragraph"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
               Our community of fitness enthusiasts is growing every day, with millions of members achieving their goals, building strength, and transforming their lives. Whether you’re starting your fitness journey or pushing toward new personal bests, we’re here to support you every step of the way. Get fit, stay motivated, and become part of a community that celebrates every victory—big or small.
            </motion.p>

            <div className="benefits-button">
              <ActionButton setSelectedPage={setSelectedPage}>
                Join Now
              </ActionButton>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
