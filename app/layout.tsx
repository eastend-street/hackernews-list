import './globals.css';

import Header from './components/Header';
import Main from './components/Main';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        <Main>{children}</Main>
      </body>
    </html>
  );
}
