import { AuthLayoutWrapper } from "@/components/auth/authLayout";
import "@/app/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthLayoutWrapper>{children}</AuthLayoutWrapper>;
}
