import Nav from "@/components/landing/Nav";
import Hero from "@/components/landing/Hero";
import LogoBar from "@/components/landing/LogoBar";
import ProblemStatement from "@/components/landing/ProblemStatement";
import Features from "@/components/landing/Features";
import UseCases from "@/components/landing/UseCases";
import Philosophy from "@/components/landing/Philosophy";
import ArchitectureDiagram from "@/components/landing/ArchitectureDiagram";
import InstallSection from "@/components/landing/InstallSection";
import TryItOut from "@/components/landing/TryItOut";
import StorageSection from "@/components/landing/StorageSection";
import ObservabilityAsCode from "@/components/landing/ObservabilityAsCode";
import SecuritySection from "@/components/landing/SecuritySection";
import AsciiSection from "@/components/landing/AsciiSection";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

async function getGitHubStars(): Promise<number | undefined> {
  try {
    const res = await fetch("https://api.github.com/repos/The-True-Hooha/loghaven", {
      next: { revalidate: 3600 }, // cache for 1 hour
      headers: { Accept: "application/vnd.github+json" },
    });
    if (!res.ok) return undefined;
    const data = await res.json();
    return data.stargazers_count as number;
  } catch {
    return undefined;
  }
}

export default async function Home() {
  const stars = await getGitHubStars();

  return (
    <main style={{ backgroundColor: "#070B0F", color: "#E6E1D8", overflowX: "hidden" }}>
      <Nav stars={stars} />

      <div id="hero"><Hero /></div>
      <LogoBar />
      <div id="features"><ProblemStatement /></div>
      <Features />
      <div id="use-cases"><UseCases /></div>
      <Philosophy />
      <div id="architecture"><ArchitectureDiagram /></div>
      <div id="install"><InstallSection /></div>
      <TryItOut />
      <StorageSection />
      <ObservabilityAsCode />
      <SecuritySection />
      <AsciiSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}
