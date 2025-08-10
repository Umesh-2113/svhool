import "./globals.css";
import SchoolHeader from "./components/Navbar";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Green Valley Junior School",
  description: "Welcome to our junior school website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
    
        {children}
      </body>
    </html>
  );
}
