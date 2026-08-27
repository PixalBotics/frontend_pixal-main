import type { Metadata } from "next";
import SeoPage from "@/components/SeoPage";
import { BRAND_NAME, CORE_KEYWORDS, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Digital Marketing & Design | Pixalbotic",
  description:
    "Pixalbotic delivers digital marketing and design services, including brand identity, UI/UX design, SEO, and growth campaigns that convert.",
  keywords: [...CORE_KEYWORDS, "digital marketing agency", "brand identity design", "SEO services"],
  alternates: { canonical: `${SITE_URL}/services/digital-marketing` },
};

export default function DigitalMarketingPage() {
  return (
    <SeoPage
      title="Digital Marketing & Design"
      intro={`${BRAND_NAME} pairs design craft with performance marketing to help brands look sharper, rank higher, and convert more of the traffic they already earn.`}
      imageAlt="digital marketing and brand design"
      sections={[
        {
          heading: "Brand & UI/UX Design",
          content:
            "We create brand identities, design systems, and interface designs that keep your product and marketing visually consistent across every touchpoint.",
        },
        {
          heading: "SEO & Content Strategy",
          content:
            "Our team structures content, technical SEO, and on-page signals to improve visibility in traditional search and modern AI-powered discovery channels alike.",
        },
        {
          heading: "Growth Campaigns",
          content:
            "From paid social to email and lifecycle marketing, we build and manage campaigns tied to measurable outcomes—leads, signups, and revenue—not just impressions.",
        },
      ]}
    />
  );
}
