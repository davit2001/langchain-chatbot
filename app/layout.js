import './globals.css';

export const metadata = {
  title: 'Magic chatbot',
  description: 'Magic wizard chatbot to answer your questions',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
