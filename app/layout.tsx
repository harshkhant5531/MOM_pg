import "./globals.css";

export const metadata = {
  title: "Meeting Management",
  icons: {
    icon: "/websiteLogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
