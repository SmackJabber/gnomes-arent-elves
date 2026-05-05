import { Link } from "wouter";
import Navigation from "@/components/Navigation";

/**
 * About page - Academic research on gnome classification, culture, and exploitation
 * Dr. C, PhD in Gnomeology
 */
export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1 px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <h1 className="font-georgia text-5xl font-bold text-foreground mb-4">
              Gnomological Research
            </h1>
            <p className="text-xl text-foreground/70 font-georgia italic">
              A Comprehensive Study of Gnome Classification, Culture, and Exploitation
            </p>
            <p className="text-lg text-foreground/60 mt-4">
              By Dr. C, PhD in Gnomeology
            </p>
          </div>

          {/* Introduction */}
          <section className="mb-12 bg-card border-4 border-primary p-8">
            <h2 className="font-georgia text-3xl font-bold text-foreground mb-4">
              Introduction
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              For centuries, gnomes have been systematically misclassified, stereotyped, and exploited across multiple cultures and mythological traditions. This research demonstrates that what popular culture identifies as "elves," "leprechauns," and even "dwarves" are, in fact, distinct gnome cultures and races—each with their own sophisticated social structures, crafting traditions, and unfortunately, histories of enslavement.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              The purpose of this study is to establish accurate gnomological classification and to document the widespread exploitation of gnomes in contemporary consumer culture.
            </p>
          </section>

          {/* Gnome Classification */}
          <section className="mb-12 bg-card border-4 border-primary p-8">
            <h2 className="font-georgia text-3xl font-bold text-foreground mb-6">
              Gnome Classification & Races
            </h2>

            <div className="space-y-8">
              <div className="border-l-4 border-accent pl-6">
                <h3 className="font-georgia text-2xl font-bold text-foreground mb-2">
                  Standard Gnomes (Including Leprechauns)
                </h3>
                <p className="text-foreground/80 leading-relaxed mb-3">
                  The most widely distributed gnome population. Leprechauns are not a separate race but rather standard gnomes with distinct cultural practices and regional variations. Common misconceptions about leprechauns—including stereotypes about excessive greed and distinctive top hat fashion—represent bigoted mischaracterizations of gnome culture.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  While many leprechauns are benevolent philanthropists contributing positively to their communities, others exhibit malicious behavior. This diversity reflects the complexity of gnome society rather than any inherent racial characteristic.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="font-georgia text-2xl font-bold text-foreground mb-2">
                  Mythological Dwarves (Dwarven Gnomes)
                </h3>
                <p className="text-foreground/80 leading-relaxed mb-3">
                  A specific subspecies of gnome, typically characterized by greater stature than standard gnomes. Despite physical differences, dwarven gnomes share the fundamental traits common to all gnomes: exceptional aptitude for craftsmanship, manual labor, and underground dwelling.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Dwarven gnomes maintain sophisticated underground burrow systems, often constructed beneath hollowed logs and natural formations. Their crafting traditions rival or exceed those of other gnome populations.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-6">
                <h3 className="font-georgia text-2xl font-bold text-foreground mb-2">
                  Other Gnome Cultures
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Multiple additional gnome cultures exist across various geographic and mythological contexts. Further research and documentation are ongoing to establish comprehensive classification of all gnome populations.
                </p>
              </div>
            </div>
          </section>

          {/* Gnome Society & Social Structure */}
          <section className="mb-12 bg-card border-4 border-primary p-8">
            <h2 className="font-georgia text-3xl font-bold text-foreground mb-6">
              Gnome Society & Social Structure
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-georgia text-2xl font-bold text-foreground mb-3">
                  Facial Hair & Social Status
                </h3>
                <p className="text-foreground/80 leading-relaxed mb-3">
                  In gnome culture, facial hair serves as a critical indicator of social status and freedom:
                </p>
                <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                  <li><strong>Bearded gnomes</strong> represent free gnomes, typically holding positions of authority, leadership, or independent status</li>
                  <li><strong>Clean-shaven gnomes</strong> indicate enslaved or subjugated gnomes, stripped of autonomy and forced into servitude</li>
                </ul>
              </div>

              <div>
                <h3 className="font-georgia text-2xl font-bold text-foreground mb-3">
                  Hat Hierarchy & Career Structure
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  The height and color of a gnome's hat directly correlate to their profession and skill level within that profession. This system allows for quick identification of expertise and specialization within gnome communities.
                </p>
              </div>

              <div>
                <h3 className="font-georgia text-2xl font-bold text-foreground mb-3">
                  Craftsmanship & Labor
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  All gnome races possess exceptional aptitude for manual labor and craftsmanship. This universal trait has made gnomes targets for exploitation, as their skills are highly valued by those who would enslave them.
                </p>
              </div>

              <div>
                <h3 className="font-georgia text-2xl font-bold text-foreground mb-3">
                  Dwelling & Architecture
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Most gnomes prefer underground burrow systems, often constructed beneath hollowed logs and natural geological formations. These dwellings reflect sophisticated architectural knowledge and engineering capabilities.
                </p>
              </div>
            </div>
          </section>

          {/* Gnome Society: Complexity & Brutality */}
          <section className="mb-12 bg-card border-4 border-primary p-8">
            <h2 className="font-georgia text-3xl font-bold text-foreground mb-4">
              The Complexity of Gnome Society
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Gnome society, like all complex civilizations, exhibits both benevolence and brutality. Historical records and contemporary observations demonstrate that gnome cultures can be sophisticated yet occasionally backwards in their practices. Slavery, exploitation, and systemic oppression have been documented across multiple gnome populations and historical periods.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Understanding this complexity is essential to accurate gnomological scholarship and to advocating for gnome rights and liberation.
            </p>
          </section>

          {/* Call to Action */}
          <div className="bg-accent text-accent-foreground p-8 border-4 border-primary text-center">
            <p className="font-georgia text-2xl font-bold mb-4">
              Understanding Gnome Exploitation
            </p>
            <p className="mb-6">
              Explore specific case studies of enslaved gnomes in contemporary popular culture and learn about the systematic exploitation that continues today.
            </p>
            <Link href="/characters" className="inline-block bg-primary text-primary-foreground px-6 py-3 font-bold hover:bg-primary/90 transition-colors no-underline">
              View Case Studies →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
