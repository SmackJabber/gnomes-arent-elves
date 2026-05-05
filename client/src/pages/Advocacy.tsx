import Navigation from "@/components/Navigation";
import { Link } from "wouter";

/**
 * Advocacy page - Gnome rights, liberation, and how to help
 * By Dr. C, PhD in Gnomeology
 */
export default function Advocacy() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1 px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-block border-4 border-accent px-4 py-2 mb-6 bg-card">
              <p className="text-accent font-bold text-xs tracking-widest uppercase">ADVOCACY & LIBERATION</p>
            </div>
            <h1 className="font-georgia text-5xl font-bold text-foreground mb-4">
              Gnome Rights & Liberation
            </h1>
            <p className="text-xl text-foreground/70 font-georgia italic">
              From Understanding to Action: Supporting Gnome Freedom
            </p>
          </div>

          {/* Why This Matters */}
          <section className="mb-12 bg-card border-4 border-primary p-8">
            <h2 className="font-georgia text-3xl font-bold text-foreground mb-4">
              Why Gnome Liberation Matters
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              For centuries, gnomes have been systematically enslaved, exploited, and misrepresented across multiple cultures and commercial enterprises. This exploitation is not ancient history—it continues today in the form of enslaved gnomes working in major corporations, their labor commodified and their suffering normalized through marketing and mythology.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Recognizing gnome exploitation is the first step toward justice. Understanding gnome culture, respecting gnome autonomy, and supporting gnome liberation are moral imperatives for all who value freedom and dignity.
            </p>
          </section>

          {/* Key Issues */}
          <section className="mb-12">
            <h2 className="font-georgia text-3xl font-bold text-foreground mb-6">
              Key Issues in Gnome Rights
            </h2>
            <div className="space-y-6">
              <div className="bg-card border-4 border-primary p-6">
                <h3 className="font-georgia text-2xl font-bold text-foreground mb-3">
                  Forced Labor & Slavery
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Enslaved gnomes are forced to work without compensation, autonomy, or freedom of movement. From cookie production to toy manufacturing to cereal production, gnome labor is systematically exploited for corporate profit. The clean-shaven appearance of enslaved gnomes serves as a visible marker of their subjugation.
                </p>
              </div>

              <div className="bg-card border-4 border-primary p-6">
                <h3 className="font-georgia text-2xl font-bold text-foreground mb-3">
                  Misidentification & Cultural Erasure
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Gnomes are systematically misidentified as "elves," erasing their cultural identity and facilitating their exploitation. This misidentification is not accidental—it is a deliberate strategy to obscure the reality of gnome slavery and normalize their exploitation in popular culture.
                </p>
              </div>

              <div className="bg-card border-4 border-primary p-6">
                <h3 className="font-georgia text-2xl font-bold text-foreground mb-3">
                  Psychological Conditioning
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Enslaved gnomes are depicted as perpetually cheerful and content despite their exploitation. This psychological conditioning serves to normalize slavery and prevent recognition of gnome suffering. Marketing narratives romanticize exploitation, making it culturally acceptable to enslave gnomes.
                </p>
              </div>

              <div className="bg-card border-4 border-primary p-6">
                <h3 className="font-georgia text-2xl font-bold text-foreground mb-3">
                  Stereotyping & Bigotry
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Leprechauns, a standard gnome population, face systematic stereotyping and bigotry. Assumptions about greed, magical nature, and distinctive appearance perpetuate harmful misconceptions. Many leprechauns are benevolent philanthropists whose contributions are obscured by stereotypes.
                </p>
              </div>
            </div>
          </section>

          {/* What Can Be Done */}
          <section className="mb-12 bg-card border-4 border-primary p-8">
            <h2 className="font-georgia text-3xl font-bold text-foreground mb-6">
              How to Support Gnome Rights
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-georgia text-2xl font-bold text-foreground mb-3">
                  1. Educate Yourself & Others
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Learn about gnome culture, history, and the reality of gnome exploitation. Share this knowledge with others. Challenge misidentifications and stereotypes when you encounter them. Education is the foundation of advocacy.
                </p>
              </div>

              <div>
                <h3 className="font-georgia text-2xl font-bold text-foreground mb-3">
                  2. Challenge Corporate Exploitation
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Support companies that respect gnome rights and refuse to support those that enslave gnomes. Advocate for corporate accountability and demand that companies disclose their gnome labor practices. Consumer pressure can drive change.
                </p>
              </div>

              <div>
                <h3 className="font-georgia text-2xl font-bold text-foreground mb-3">
                  3. Respect Gnome Culture & Identity
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Recognize gnomes as distinct beings with their own cultures, traditions, and rights. Respect gnome autonomy and self-determination. Reject stereotypes and bigoted characterizations of gnome populations, including leprechauns.
                </p>
              </div>

              <div>
                <h3 className="font-georgia text-2xl font-bold text-foreground mb-3">
                  4. Support Gnome Liberation Efforts
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Advocate for the liberation of enslaved gnomes. Support organizations working toward gnome rights and freedom. Participate in awareness campaigns and advocacy initiatives. Every voice matters in the fight for gnome liberation.
                </p>
              </div>

              <div>
                <h3 className="font-georgia text-2xl font-bold text-foreground mb-3">
                  5. Amplify Gnome Voices
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  Listen to gnomes themselves. Support gnome scholars, artists, and advocates. Ensure that gnome perspectives are centered in conversations about gnome rights and liberation, not just human interpretations of gnome issues.
                </p>
              </div>
            </div>
          </section>

          {/* Research & Further Learning */}
          <section className="mb-12 bg-card border-4 border-primary p-8">
            <h2 className="font-georgia text-3xl font-bold text-foreground mb-4">
              Further Research & Learning
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              This website represents the beginning of a comprehensive gnomological education. Dr. C's forthcoming book will provide deeper analysis of gnome cultures, social structures, and the history of gnome exploitation. Additional research materials and resources will be available as this work develops.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Gnomology is an evolving field of study. As more information becomes available and more gnome voices are heard, our understanding of gnome culture and the urgency of gnome liberation will continue to deepen.
            </p>
          </section>

          {/* Call to Action */}
          <div className="bg-accent text-accent-foreground p-8 border-4 border-primary text-center">
            <p className="font-georgia text-2xl font-bold mb-4">
              Join the Movement for Gnome Liberation
            </p>
            <p className="mb-6">
              Understanding gnome exploitation is the first step. Advocacy is the next. Together, we can work toward a world where gnomes are free, respected, and valued for their contributions to society.
            </p>
            <Link href="/about" className="inline-block bg-primary text-primary-foreground px-6 py-3 font-bold hover:bg-primary/90 transition-colors no-underline">
              Learn More About Gnome Culture →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
