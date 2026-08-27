import type { Metadata } from "next";
import SeoPage from "@/components/SeoPage";
import { BRAND_NAME, CORE_KEYWORDS, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Mobile App Development | Pixalbotic",
  description:
    "Pixalbotic builds native and cross-platform mobile apps with React Native, delivering fast, reliable iOS and Android experiences for growing businesses.",
  keywords: [...CORE_KEYWORDS, "mobile app development", "React Native developers", "iOS and Android apps"],
  alternates: { canonical: `${SITE_URL}/services/mobile-app-development` },
};

export default function MobileAppDevelopmentPage() {
  return (
    <SeoPage
      title="Mobile App Development"
      intro={`${BRAND_NAME} designs and builds mobile apps that feel native, perform reliably, and scale with your user base—from first release to ongoing feature growth.`}
      imageAlt="mobile app development on iOS and Android"
      sections={[
        {
          heading: "Cross-Platform Engineering",
          content:
            "We build with React Native to ship a single, high-quality codebase across iOS and Android, reducing development time without compromising native performance or feel.",
        },
        {
          heading: "Product-Led App Design",
          content:
            "Our team designs intuitive mobile experiences grounded in real user flows, then engineers the app architecture, offline support, and API integrations needed to support them at scale.",
        },
        {
          heading: "App Store Ready",
          content:
            "From build pipelines to store submission, analytics, and crash monitoring, we prepare your app for a smooth launch and give your team the tools to iterate quickly post-release.",
        },
      ]}
    />
  );
}
