import Image from "next/image";

export default function SchoolHeader() {
  return (
    <header style={{ backgroundColor: "#3b2a8a", padding: "10px 0" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
          color: "white",
          padding: "0 20px",
        }}
      >
        {/* Logo */}
        <div style={{ marginRight: "15px" }}>
          <Image src="/logo.png" alt="School Logo" width={80} height={80} />
        </div>

        {/* Text */}
        <div>
          <p style={{ margin: "2px 0", fontSize: "20px", color: "#f1c40f" }}>
            मातेश्वरी बाल विद्या मंदिर प्राथमिक विद्यालय खरची 
          </p>
          <h1 style={{ margin: 0, fontSize: "22px", color: "#f1c40f",fontWeight: "bold" }}>
            MATESHWARI BAL VIDHYA MANDIR PRIMARY SCHOOL KHARCHI
          </h1>
        </div>
      </div>
    </header>
  );
}
