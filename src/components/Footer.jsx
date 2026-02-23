import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div
      className="pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden"
      id="Footer"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Logo & Description */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img src={assets.logo_dark} alt="Company Logo" />
          <p className="text-gray-400 mt-4">
            Professional Tile, Drywall, and Painting Repair Services. We provide
            clean, reliable, and affordable home repairs with high-quality
            workmanship you can trust.
          </p>
        </div>

        {/* Services */}
        <div className="w-full md:w-1/5 mb-8 md:mb-0">
          <h3 className="text-white text-lg font-bold mb-4">Our Services</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <li>Tile Repair</li>
            <li>Drywall Repair</li>
            <li>Wall Patching</li>
            <li>Painting & Touch-Ups</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="w-full md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">Contact Info</h3>
          <p className="text-gray-400 mb-2">📞 +1 571 415 1766</p>
          <p className="text-gray-400 mb-2">📧 Email: .com</p>
          <p className="text-gray-400">
            📍 Serving Virginia & Surrounding Areas
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 py-4 mt-10 text-center text-gray-500">
        © {new Date().getFullYear()} Tile & Drywall Repair Services. All Rights
        Reserved.
      </div>
    </div>
  );
};

export default Footer;
