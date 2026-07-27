import RevealOnScroll from "./RevealOnScroll";

const steps = [
  { title: "Discutie & brief", desc: "Intelegem afacerea ta, obiectivele si publicul tinta." },
  { title: "Design & concept", desc: "Propunem directia vizuala si structura site-ului." },
  { title: "Dezvoltare", desc: "Construim site-ul cu tehnologii moderne, rapide si sigure." },
  { title: "Testare & lansare", desc: "Verificam viteza, SEO si responsive-ul pe toate device-urile." },
  { title: "Mentenanta continua", desc: "Ramanem alaturi de tine cu actualizari si suport." },
];

export default function ProcessTimeline() {
  return (
    <div className="grid gap-8 md:grid-cols-5">
      {steps.map((step, i) => (
        <RevealOnScroll key={step.title} delay={i * 0.08} className="relative">
          <div className="flex items-center gap-3 md:flex-col md:items-start">
            <span className="font-display text-3xl font-semibold text-brand/30">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="hidden h-px flex-1 bg-black/10 md:mt-6 md:block" />
          </div>
          <h3 className="mt-3 font-display text-lg font-semibold">{step.title}</h3>
          <p className="mt-1 text-sm text-mist">{step.desc}</p>
        </RevealOnScroll>
      ))}
    </div>
  );
}
