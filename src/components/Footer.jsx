// components/Footer.js
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
        <div className="space-x-4 mt-2 md:mt-0">
          <a href="/privacy-policy" className="text-sm hover:underline">Privacy Policy</a>
          <a href="/terms" className="text-sm hover:underline">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
