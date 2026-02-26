import Navbar from "./Navbar";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/header_img.png')" }}
      id="Header"
    >
      <Navbar />

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white"
      >
        <h1 className="text-4xl sm:text-5xl md:text-[70px] inline-block max-w-4xl font-semibold pt-20 leading-tight">
          Professional Tile & Drywall Repair Services
        </h1>

        <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
          Cracked tiles? Damaged drywall? Peeling paint? We provide clean,
          reliable, and affordable home repairs you can trust.
        </p>

        <div className="space-x-6 mt-12">
          <a
            href="#Projects"
            className="border border-white px-8 py-3 rounded hover:bg-white hover:text-black transition"
          >
            View Our Work
          </a>
          <a
            href="#Contact"
            className="bg-blue-600 px-8 py-3 rounded hover:bg-blue-700 transition"
          >
            Get Free Estimate
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
