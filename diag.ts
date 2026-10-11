cat > /tmp/diag.ts << 'EOF'
import "dotenv/config";
import { getPayload } from "payload";
import config from "@payload-config";

async function run() {
  const payload = await getPayload({ config });
  const services = await payload.find({ collection: "services", limit: 20, sort: "order" });
  console.log("--- SERVICII ---");
  for (const s of services.docs) {
    console.log(s.id, JSON.stringify(s.title), "|", JSON.stringify(s.summary));
  }
  const projects = await payload.find({ collection: "projects", limit: 20, sort: "order", depth: 1 });
  console.log("--- PROIECTE ---");
  for (const p of projects.docs as any[]) {
    console.log(p.slug, "|", p.title, "| imagine:", (p.coverImage && p.coverImage.filename) || "FARA IMAGINE");
  }
  process.exit(0);
}
run().catch((e) => { console.error(e); process.exit(1); });
EOF