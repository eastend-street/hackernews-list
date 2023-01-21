import './globals.css';

import Header from './Header';
import Main from './Main';

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
