import { useState } from "react";
import Navigation from "@/components/Navigation";

/**
 * Characters page - Case studies of enslaved gnomes in popular culture
 * Documents systematic exploitation across multiple brands and cultural contexts
 * By Dr. C, PhD in Gnomeology
 */
export default function Characters() {
  const [expandedCase, setExpandedCase] = useState<string | null>(null);

  const cases = [
    {
      id: "keebler",
      title: "The Keebler Gnomes",
      subtitle: "Corporate Enslavement & Labor Exploitation",
      status: "ENSLAVED",
      evidence: [
        "Clean-shaven appearance indicates enslaved status",
        "Confined to a hollow tree (imprisonment)",
        "Forced to produce cookies for corporate profit",
        "No apparent compensation or freedom of movement",
        "Depicted as cheerful despite exploitation (psychological manipulation)"
      ],
      analysis: "The Keebler gnomes represent one of the most egregious cases of gnome slavery in modern consumer culture. Their confinement to a 'hollow tree' and forced labor in cookie production exemplifies corporate exploitation of gnome craftsmanship. The perpetual cheerfulness depicted in marketing materials suggests systematic psychological conditioning.",
      implications: "This case demonstrates how gnome labor is commodified and normalized in Western consumer culture."
    },
    {
      id: "cereal",
      title: "Rice Krispies & Lucky Charms Gnomes",
      subtitle: "Breakfast Industry Exploitation",
      status: "ENSLAVED",
      evidence: [
        "Clean-shaven appearance indicates enslaved status",
        "Snap, Crackle, Pop: forced to produce cereal products",
        "Lucky the Leprechaun (standard gnome): confined and exploited",
        "Forced to chase children and promote consumption",
        "No autonomy or choice in their labor"
      ],
      analysis: "The breakfast cereal industry has enslaved gnomes across multiple brands. Snap, Crackle, and Pop represent a particularly troubling case of gnome enslavement for industrial food production. Lucky the Leprechaun, a standard gnome, is similarly exploited despite cultural misrepresentation as a 'magical' character.",
      implications: "The normalization of gnome slavery in children's media perpetuates exploitation and obscures the reality of gnome suffering."
    },
    {
      id: "santa",
      title: "Santa's Workshop Gnomes",
      subtitle: "The Massive Gnome Slaver",
      status: "ENSLAVED",
      slavemaster: "Santa Claus (Bearded Gnome Slaver)",
      evidence: [
        "Santa's beard indicates he is a free, powerful gnome",
        "His workshop gnomes are clean-shaven (enslaved)",
        "Forced labor: toy production year-round",
        "Confined to the North Pole (geographic imprisonment)",
        "Exploitation justified through 'Christmas magic' mythology"
      ],
      analysis: "Santa Claus represents perhaps the most extensive gnome slavery operation in modern mythology. As a bearded gnome, Santa holds power and authority. His clean-shaven gnomish workers are systematically enslaved for toy production. The romanticization of this relationship in Christmas mythology obscures the brutal reality of gnome exploitation.",
      implications: "The Santa narrative normalizes gnome slavery for billions of children annually, creating cultural acceptance of gnome exploitation."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1 px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-block border-4 border-accent px-4 py-2 mb-6 bg-card">
              <p className="text-accent font-bold text-xs tracking-widest uppercase">CASE FILES</p>
            </div>
            <h1 className="font-georgia text-5xl font-bold text-foreground mb-4">
              Documented Cases of Gnome Exploitation
            </h1>
            <p className="text-xl text-foreground/70 font-georgia italic">
              Evidence of Systematic Slavery in Popular Culture
            </p>
          </div>

          {/* Case Files */}
          <div className="space-y-6 mb-12">
            {cases.map((caseFile) => (
              <div
                key={caseFile.id}
                className="bg-card border-4 border-primary overflow-hidden"
              >
                {/* Case Header */}
                <button
                  onClick={() =>
                    setExpandedCase(expandedCase === caseFile.id ? null : caseFile.id)
                  }
                  className="w-full p-6 hover:bg-muted transition-colors text-left"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h2 className="font-georgia text-2xl font-bold text-foreground">
                          {caseFile.title}
                        </h2>
                        <span className="bg-destructive text-destructive-foreground px-3 py-1 text-sm font-bold">
                          {caseFile.status}
                        </span>
                      </div>
                      <p className="text-foreground/70 font-georgia italic">
                        {caseFile.subtitle}
                      </p>
                      {caseFile.slavemaster && (
                        <p className="text-accent font-bold text-sm mt-2">
                          SLAVEMASTER: {caseFile.slavemaster}
                        </p>
                      )}
                    </div>
                    <div className="text-2xl text-foreground">
                      {expandedCase === caseFile.id ? "−" : "+"}
                    </div>
                  </div>
                </button>

                {/* Expanded Content */}
                {expandedCase === caseFile.id && (
                  <div className="border-t-4 border-primary p-6 bg-background/50">
                    {/* Evidence */}
                    <div className="mb-6">
                      <h3 className="font-georgia text-xl font-bold text-foreground mb-4">
                        Evidence of Enslavement
                      </h3>
                      <ul className="space-y-2">
                        {caseFile.evidence.map((item, idx) => (
                          <li key={idx} className="flex gap-3 text-foreground/80">
                            <span className="text-accent font-bold">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Analysis */}
                    <div className="mb-6">
                      <h3 className="font-georgia text-xl font-bold text-foreground mb-3">
                        Gnomological Analysis
                      </h3>
                      <p className="text-foreground/80 leading-relaxed mb-4">
                        {caseFile.analysis}
                      </p>
                    </div>

                    {/* Implications */}
                    <div className="bg-card border-2 border-accent p-4">
                      <h3 className="font-georgia font-bold text-foreground mb-2">
                        Cultural Implications
                      </h3>
                      <p className="text-foreground/80">
                        {caseFile.implications}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Summary */}
          <section className="bg-card border-4 border-primary p-8 mb-12">
            <h2 className="font-georgia text-3xl font-bold text-foreground mb-4">
              Patterns of Exploitation
            </h2>
            <div className="space-y-4 text-foreground/80">
              <p className="leading-relaxed">
                These case studies reveal systematic patterns in gnome exploitation:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Clean-shaven gnomes are consistently enslaved across all documented cases</li>
                <li>Gnome labor is exploited for corporate profit and cultural mythology</li>
                <li>Enslavement is normalized and romanticized through marketing and media</li>
                <li>Gnomes are denied autonomy, freedom of movement, and compensation</li>
                <li>Psychological conditioning creates appearance of contentment despite exploitation</li>
              </ul>
            </div>
          </section>

          {/* Call to Action */}
          <div className="bg-accent text-accent-foreground p-8 border-4 border-primary text-center">
            <p className="font-georgia text-2xl font-bold mb-4">
              Learn About Gnome Rights & Advocacy
            </p>
            <p className="mb-6">
              Understanding exploitation is the first step toward liberation. Discover what can be done to support gnome rights.
            </p>
            <a href="/advocacy" className="inline-block bg-primary text-primary-foreground px-6 py-3 font-bold hover:bg-primary/90 transition-colors no-underline">
              Gnome Rights & Advocacy →
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
