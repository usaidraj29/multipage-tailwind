import './globals.css';
import Navbar from './navbar/Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>USAID Tech Solutions</title>
      </head>
      <body className="bg-gray-100 text-gray-800 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
