import type { Metadata } from "next";
import SeoPage from "@/components/SeoPage";
import { BRAND_NAME, CORE_KEYWORDS, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "CRM & GoHighLevel Solutions | Pixalbotic",
  description:
    "Pixalbotic builds custom CRMs and sets up, configures, and manages GoHighLevel for growing businesses—including GHL AI assistants and software for connected hardware like digital signage.",
  keywords: [
    ...CORE_KEYWORDS,
    "CRM development",
    "GoHighLevel agency",
    "GHL setup and management",
    "GoHighLevel AI assistant",
    "digital signage software",
  ],
  alternates: { canonical: `${SITE_URL}/services/crm-gohighlevel` },
};

export default function CrmGoHighLevelPage() {
  return (
    <SeoPage
      title="CRM & GoHighLevel Solutions"
      intro={`${BRAND_NAME} builds custom CRMs and runs full-service GoHighLevel implementations, so your sales, marketing, and support teams operate from one connected system instead of a patchwork of tools.`}
      imageAlt="CRM dashboard and GoHighLevel automation workflow"
      sections={[
        {
          heading: "Custom CRM Development",
          content:
            "We design and build CRMs tailored to how your team actually sells and supports customers—custom pipelines, deal stages, reporting dashboards, and integrations with your existing tools. Whether you need a lightweight internal CRM or a full customer-data platform, we build it to fit your process, not the other way around.",
        },
        {
          heading: "GoHighLevel Setup & Management",
          content:
            "As a GoHighLevel agency, we handle end-to-end GHL implementation: sub-account builds, pipelines, calendars, funnels, email/SMS workflows, and white-label configuration. We manage ongoing optimization too, so your GHL instance keeps pace with your business instead of becoming another system to maintain.",
        },
        {
          heading: "AI Assistants & Chatbots on GoHighLevel",
          content:
            "We configure GoHighLevel's conversational AI as a front-line assistant—qualifying leads, answering common questions, and booking appointments straight into your calendar. It's the same practical, automation-first approach behind our AI Solutions work, applied directly inside the CRM your team already uses.",
        },
        {
          heading: "Software for Connected & Signage Hardware",
          content:
            "Beyond software running in a browser, we build the custom applications that drive physical devices—digital signage displays, in-store screens, and kiosk hardware—including syncing content and campaigns from your CRM or marketing platform straight to the screen.",
        },
      ]}
    />
  );
}
