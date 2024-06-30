import AntdRegistry from '@/lib/antd/AntdRegistry';
import { Oxanium } from "next/font/google";
import '@/styles/globals.css';

const oxanium = Oxanium({ subsets: ["latin"] });

export const metadata = {
  title: "Underdogg | Next",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={oxanium.className}>
          <AntdRegistry>
            {children}
          </AntdRegistry>
      </body>
    </html>
  );
}
