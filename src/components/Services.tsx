import Tabs from "./ui/Tabs";
import type { Service } from "../shared/types/Service";
import type { TabItem } from "../shared/types/Tabs";

const samplePrivate: Service[] = [
  { id: "p1", title: "Personal or Portfolio Website", short: "Responsive portfolio site.", tech: ["WordPress", "React", "TailwindCSS"] },
  { id: "p2", title: "Landing Page", short: "Conversion oriented landing.", tech: ["HTML", "GSAP", "Hotwire"] },
  { id: "p3", title: "Small E-Commerce Setup", short: "Shop with payments.", tech: ["PrestaShop", "Stripe"] },
  { id: "p4", title: "Maintenance & Security", short: "Monthly updates and backups.", tech: ["Docker", "Linux"] },
  { id: "p5", title: "SEO & Performance", short: "CWV and Lighthouse tuning.", tech: ["Chrome DevTools"] },
  { id: "p6", title: "Theme Customization", short: "Custom WP/PrestaShop themes.", tech: ["Twig", "SCSS"] },
  { id: "p7", title: "UX & Micro-Animations", short: "Micro-interactions with GSAP.", tech: ["GSAP", "CSS"] },
  { id: "p8", title: "Consulting & Strategy", short: "Technical & stack advice.", tech: ["All"] },
];

const sampleCompany: Service[] = [
  { id: "c1", title: "Custom Web Applications", short: "Full-stack apps and SaaS.", tech: ["Symfony", "React", "Postgres"] },
  { id: "c2", title: "API Design & Integrations", short: "REST/GraphQL APIs.", tech: ["API Platform", "OAuth2"] },
  { id: "c3", title: "E-Commerce & Headless", short: "Scalable e-commerce.", tech: ["PrestaShop", "Headless"] },
  { id: "c4", title: "CI/CD & DevOps", short: "Automated pipelines.", tech: ["GitHub Actions", "Docker"] },
  { id: "c5", title: "Refactor & Modernize", short: "Codebase modernization.", tech: ["PHP OOP", "Unit Tests"] },
  { id: "c6", title: "Testing & QA", short: "Unit/integration testing.", tech: ["PHPUnit", "Jest"] },
  { id: "c7", title: "Performance & Profiling", short: "Query and frontend tuning.", tech: ["Postgres", "Chrome DevTools"] },
  { id: "c8", title: "Support & Monitoring", short: "SLA-like ongoing support.", tech: ["Linux", "Monitoring"] },
];

export default function ServicesTabs() {
  const tabs: TabItem[] = [
    { id: "private", label: "Private / Small Biz", services: samplePrivate },
    { id: "company", label: "Companies / Startups", services: sampleCompany },
  ];

  return (
    <section className="services-tabs" id="services">
      <h3 className="subtitle">Here is a list of</h3>
      <h2 className="title">What I do</h2>
      <div className="container services-tabs_container">
         <Tabs tabs={tabs} />
      </div>
    </section>
  );
}
