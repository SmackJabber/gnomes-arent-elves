import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";

/**
 * Home page - Landing page for gnomological research
 * Design: Vintage conspiracy aesthetic with hero background
 * By Dr. C, PhD in Gnomeology
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative py-20 px-4 text-center overflow-hidden"
        style={{
          backgroundImage:
            'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663526598276/7mdpff44cJYeQRpNSqH5SQ/hero-gnome-truth-P36pMvHwnSAPxi6wvpDQCE.webp)',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          {/* Classification Badge */}
          <div className="mb-8 inline-block">
            <div className="border-4 border-accent bg-card/80 backdrop-blur px-4 py-2">
              <p className="text-accent font-bold text-xs tracking-widest uppercase">CLASSIFIED INFORMATION</p>
            </div>
          </div>

          <h1 className="font-georgia text-5xl md:text-7xl font-bold text-white mb-6 leading-tight" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>
            Gnomes Aren't Elves
          </h1>

          <p className="text-xl md:text-2xl text-white mb-2 font-georgia italic" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.5)'}}>
            A Comprehensive Study in Gnomology
          </p>

          <p className="text-lg text-white mb-8 font-georgia" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.4)'}}>By Dr. C, PhD in Gnomeology</p>

          <p className="text-lg text-white mb-12 max-w-2xl mx-auto leading-relaxed" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.4)'}}>
            For decades, popular culture has perpetuated a grand deception. The Keebler Gnomes, Snap/Crackle/Pop, and Santa's workshop helpers have been systematically misidentified and exploited. We have the evidence. We have the proof. These are not elves—they are enslaved gnomes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about" className="no-underline">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
                Read the Research
              </Button>
            </Link>
            <Link href="/characters" className="no-underline">
              <Button size="lg" variant="outline" className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-bold">
                Case Studies
              </Button>
            </Link>
            <Link href="/advocacy" className="no-underline">
              <Button size="lg" variant="outline" className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-bold">
                Advocacy
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Key Points Section */}
      <section className="bg-card py-16 px-4 border-t-4 border-accent">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-georgia text-4xl font-bold text-foreground mb-12 text-center">
            Understanding Gnome Exploitation
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background p-6 border-l-4 border-primary">
              <h3 className="font-georgia text-2xl font-bold text-primary mb-3">Multiple Gnome Cultures</h3>
              <p className="text-foreground/70">
                Standard gnomes, leprechauns, and dwarven gnomes represent distinct populations. Each has unique cultural practices, traditions, and unfortunately, experiences with exploitation.
              </p>
            </div>

            <div className="bg-background p-6 border-l-4 border-accent">
              <h3 className="font-georgia text-2xl font-bold text-accent mb-3">Systematic Slavery</h3>
              <p className="text-foreground/70">
                Clean-shaven gnomes are enslaved across major corporations. From cookies to cereals to toys, gnome labor is systematically exploited for corporate profit while their suffering is normalized.
              </p>
            </div>

            <div className="bg-background p-6 border-l-4 border-primary">
              <h3 className="font-georgia text-2xl font-bold text-primary mb-3">Gnome Liberation</h3>
              <p className="text-foreground/70">
                Understanding gnome exploitation is the first step toward liberation. Education, advocacy, and consumer pressure are essential tools for achieving gnome freedom and rights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-primary-foreground py-12 px-4 border-t-4 border-accent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-georgia text-3xl font-bold mb-4">
            Join the Movement for Gnome Truth
          </h2>
          <p className="text-lg mb-6 font-georgia">
            Learn about gnome culture, understand the reality of gnome exploitation, and discover how you can support gnome liberation.
          </p>
          <Link href="/advocacy" className="no-underline">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold">
              Learn More About Advocacy
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
