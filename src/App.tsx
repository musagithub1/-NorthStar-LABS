import { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Contact, DetailDialog, Header, SectionLabel } from "./components/site";
import type { Audience, Detail } from "./components/site";
import { Breadcrumb, FAQList, JoinButton } from "./components/sections";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Internships from "./pages/Internships";
import Learning from "./pages/Learning";
import Community from "./pages/Community";
import About from "./pages/About";
import { ProjectsPage, ServicesPage } from "./pages/Business";
import { faqs } from "./data/content";
import { normalizePath, sitePages } from "./data/pages";

export default function App({ path = "/" }: { path?: string }) {
  const route = normalizePath(path);
  const page = sitePages.find((item) => item.path === route);
  const [audience, setAudience] = useState<Audience>("student");
  const [interest, setInterest] = useState("");
  const [detail, setDetail] = useState<Detail | "privacy" | null>(null);
  useEffect(() => {
    document.title = page?.title ?? "Page Not Found | NorthStar Labs";
    if (page)
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute("content", page.description);
    const params = new URLSearchParams(window.location.search);
    setAudience(params.get("audience") === "client" ? "client" : "student");
    setInterest(params.get("interest") ?? "");
  }, [page]);
  const content =
    route === "/" ? (
      <Home showDetail={setDetail} onContact={setAudience} />
    ) : route === "/internships/" ? (
      <Internships />
    ) : route === "/learn/" ? (
      <Learning showDetail={setDetail} />
    ) : route === "/community/" ? (
      <Community />
    ) : route === "/services/" ? (
      <ServicesPage />
    ) : route === "/projects/" ? (
      <ProjectsPage onContact={setAudience} />
    ) : route === "/about/" ? (
      <About />
    ) : route === "/contact/" ? (
      <>
        <div className="container contact-breadcrumb">
          <Breadcrumb label="Contact" />
        </div>
        <Contact
          audience={audience}
          setAudience={setAudience}
          initialInterest={interest}
        />
        <section className="section contact-application">
          <div className="container">
            <div className="cv-contact-banner">
              <div>
                <SectionLabel>Joining the internship community?</SectionLabel>
                <h2>Your CV is a good starting point.</h2>
                <p>
                  Send your CV with a short introduction on WhatsApp. Tell us
                  what you know and what you would like to learn.
                </p>
              </div>
              <JoinButton />
            </div>
          </div>
        </section>
        <section className="section faq-section">
          <div className="container faq-layout">
            <div>
              <SectionLabel>A little more clarity</SectionLabel>
              <h2>
                Good questions.
                <br />
                <span className="text-muted">Straight answers.</span>
              </h2>
            </div>
            <FAQList items={faqs} />
          </div>
        </section>
      </>
    ) : (
      <section className="section not-found">
        <div className="container">
          <SectionLabel>Let’s find your direction</SectionLabel>
          <h1>
            This page hasn’t
            <br />
            <span className="gradient-text">been built yet.</span>
          </h1>
          <p>
            Explore NorthStar’s learning paths, internships, community, and
            technology services from the home page.
          </p>
          <a className="button" href="/">
            Back to NorthStar
            <ArrowUpRight size={17} />
          </a>
        </div>
      </section>
    );
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header onContact={setAudience} path={route} />
      <main id="main" tabIndex={-1}>
        {content}
      </main>
      <Footer onPrivacy={() => setDetail("privacy")} />
      <DetailDialog
        detail={detail}
        onClose={() => setDetail(null)}
        onContact={setAudience}
      />
    </>
  );
}
