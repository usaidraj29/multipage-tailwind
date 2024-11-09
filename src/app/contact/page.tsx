export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-4 text-center">Contact Us</h1>
        <p className="text-base text-gray-600 mb-4">
          If you have any questions or need assistance, please feel free to reach out.
          Our support team is here to help you with any inquiries.
        </p>
        <p className="text-base text-gray-800 mb-2">Email: <a href="mailto:support@usaidtechsolutions.com" className="text-blue-600">support@usaidtechsolutions.com</a></p>
        <p className="text-base text-gray-800">Phone: +1 (555) 123-4567</p>
      </div>
    </div>
  );
}
