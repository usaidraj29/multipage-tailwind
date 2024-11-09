export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 p-6">
      <h1 className="text-4xl font-bold text-center mb-4">Welcome to USAID Tech Solutions</h1>
      <p className="text-lg text-center mb-6">Your one-stop solution for all things tech!</p>
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-2">What We Do</h2>
        <p className="text-base text-gray-600">
          We provide innovative tech solutions and services that help businesses
          grow and thrive in the digital world. Our team is dedicated to delivering
          high-quality products and exceptional customer service.
        </p>
      </div>
      <footer className="mt-6 text-gray-500 text-sm">© 2024 USAID Tech Solutions</footer>
    </div>
  );
}
