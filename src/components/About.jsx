import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2">
        About{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Our Services
        </span>
      </h1>

      <p className="text-gray-500 max-w-80 text-center mb-8">
        Professional Tile & Drywall Repair You Can Trust
      </p>

      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img
          src={assets.brand_img}
          alt="Tile and drywall repair work"
          className="w-full sm:w-1/2 max-w-lg"
        />

        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p>Years of Experience</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">200+</p>
              <p>Repairs Completed</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">100%</p>
              <p>Customer Satisfaction</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">Free</p>
              <p>Estimates</p>
            </div>
          </div>

          <p className="my-10 max-w-lg">
            We specialize in tile repair, drywall repair, and professional
            painting services. Whether you have cracked tiles, damaged walls,
            holes in drywall, or peeling paint, we provide clean, reliable, and
            high-quality workmanship. Our goal is to restore your home quickly
            and professionally at an affordable price.
          </p>

          <button className="bg-blue-600 text-white px-8 py-2 rounded" href="#Contact">
           Get a Free Estimate
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
