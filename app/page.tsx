import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Top Page",
  description: "獨協大学の部活とゼミをまとめて探せるサイト",
  openGraph: {
    title: "Top Page",
    description: "獨協大学の部活とゼミをまとめて探せるサイト",
    images: ["/images/dokkyo-info-logo.png"],
  },
};

export default function Page() {
  return <HomeClient />;
}