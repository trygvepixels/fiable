// src/app/admin/layout.js
export const metadata = {
  title: "Admin Login | Fiable",
  description: "Access point for the Fiable Building Solutions administration panel.",
};

export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center  ">
      {children}
    </div>
  );
}
