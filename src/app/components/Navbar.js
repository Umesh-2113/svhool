import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-yellow-300 p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
        
        {/* School Name Block */}
        <div className="text-center md:text-left">
          <p className="text-lg text-gray-900">
            मातेश्वरी बाल विद्या मंदिर प्राथमिक विद्यालय खरची
          </p>
          <h1 className="text-xl font-bold text-gray-900">
            MATESHWARI BAL VIDHYA MANDIR PRIMARY SCHOOL KHARCHI
          </h1>
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-6 font-medium text-gray-800">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/academics">Academics</Link></li>
          <li><Link href="/gallery">Gallery</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>

      </div>
    </nav>
  );
}
