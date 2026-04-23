import { SelectedPage, ClassType } from "@/shared/types";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Class";
import "./classes.css";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "Build strength, sculpt your body, and boost your confidence with our weight training classes. Led by certified trainers, each session is designed to help you lift safely, maximize results, and track your progress. Whether you’re a beginner or an experienced lifter, our classes focus on proper form, effective techniques, and progressive workouts that challenge you while keeping fitness fun. Get stronger, feel empowered, and see the results you’ve been working for!",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Find your balance, flexibility, and inner calm with our yoga classes. Perfect for all levels, our sessions blend mindful movement, breathing techniques, and gentle stretches to reduce stress, improve posture, and increase strength. Led by experienced instructors, each class helps you reconnect with your body and mind, leaving you refreshed, focused, and energized. Whether you’re a beginner or a seasoned yogi, our yoga classes guide you on a journey toward wellness and harmony.",
    image: image2,
  },
  {
    name: "Ab Core Classes",
    description:
      "Strengthen your core, improve posture, and sculpt your midsection with our targeted Ab Core classes. Designed for all fitness levels, these high-energy sessions focus on building endurance, stability, and definition in your abs and core muscles. Led by expert instructors, every workout challenges you safely while keeping you motivated..",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Take your fitness journey beyond the ordinary with our Adventure Classes! From obstacle challenges and outdoor bootcamps to team-based fitness games, these classes are designed to push your limits, boost endurance, and make working out exciting. Perfect for thrill-seekers and anyone who wants to add energy and fun.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
      "Elevate your workout with our dynamic Fitness Classes! Designed for all levels, these sessions combine cardio, strength, and functional training to help you burn calories, build muscle, and boost energy. Led by certified instructors, each class keeps you motivated, challenged, and having fun while working toward your fitness goals. From group workouts to high-intensity sessions.",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Take your fitness to the next level with our expert-led Training Classes. Whether your goal is strength, endurance, or overall conditioning, these sessions are designed to challenge your body, improve technique, and maximize results. Suitable for all levels, our trainers guide you through safe, effective workouts that keep you motivated and progressing.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="classes-section">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >

        <motion.div
          className="classes-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="classes-text">
            <HText>OUR CLASSES</HText>
            <p>
              Discover a class for every fitness level and goal! From high-energy cardio and strength training to calming yoga and mobility sessions, our expert-led classes are designed to keep you motivated, challenged, and having fun. Whether you prefer group workouts that energize you or focused one-on-one training, we’ve got the perfect class to fit your lifestyle. Join us and experience fitness that moves with you!
            </p>
          </div>
        </motion.div>


        <div className="classes-scroll">
          <ul className="classes-list">
            {classes.map((item, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
