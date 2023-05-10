import "./globals.css";

import Chat from "./components/Chat";
import Provider from "./components/Provider";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Bookly",
  description: "Your Book Store for Horror and Romantic novels",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <Toaster />
          <Chat />

          {children}
        </Provider>
      </body>
    </html>
  );
}
