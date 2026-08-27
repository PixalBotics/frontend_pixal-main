import type { Metadata } from "next";
import SeoPage from "@/components/SeoPage";
import { BRAND_NAME, CORE_KEYWORDS, SITE_URL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "AI Solutions | Pixalbotic",
  description:
    "Pixalbotic is an AI development agency delivering AI-powered automation workflows, chatbots and assistants, and custom intelligent systems for modern companies.",
  keywords: [...CORE_KEYWORDS, "AI solutions", "AI automation services", "AI workflow automation", "AI integration"],
  alternates: { canonical: `${SITE_URL}/services/ai-solutions` },
};

export default function AISolutionsPage() {
  return (
    <SeoPage
      title="AI Solutions"
      intro={`${BRAND_NAME} delivers AI solutions that improve speed, decision quality, and team productivity through practical, measurable implementations.`}
      imageAlt="AI automation and intelligent systems"
      sections={[
        {
          heading: "Business-First AI Strategy",
          content:
            "We begin by mapping your goals and existing workflows, then design AI systems that solve real bottlenecks such as repetitive tasks, slow support cycles, and fragmented knowledge access.",
        },
        {
          heading: "AI Automations & Workflows",
          content:
            "We build AI-powered automation workflows that take work off your team's plate—triaging inbound leads, drafting responses, syncing records between systems, and flagging what actually needs a human. Every automation is built around a measurable outcome, not novelty.",
        },
        {
          heading: "Automation and Integration",
          content:
            "Our engineers integrate AI with your web platforms, CRM systems, and internal tools so your teams can automate processes without disrupting existing operations. This includes configuring AI assistants and chatbots inside platforms like GoHighLevel—see our dedicated CRM & GoHighLevel page for that side of the work.",
        },
        {
          heading: "AI Search Readiness",
          content:
            "We structure content and product data in clear formats with FAQs and schema support so your business can be understood more accurately by AI-powered search systems.",
        },
      ]}
      relatedLinks={[{ label: "CRM & GoHighLevel AI Assistants", href: "/services/crm-gohighlevel" }]}
    />
  );
}
