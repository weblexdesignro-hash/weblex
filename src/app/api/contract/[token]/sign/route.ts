import { NextResponse } from "next/server";
import { getPayload } from "payload";
import config from "@payload-config";

export async function POST(request: Request, { params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  const body = await request.json().catch(() => null);

  if (!body?.signature || !body?.typedName) {
    return NextResponse.json({ error: "Date lipsă." }, { status: 400 });
  }

  const payload = await getPayload({ config });

  const found = await payload.find({
    collection: "contracts",
    where: { publicToken: { equals: token } },
    limit: 1,
    overrideAccess: true,
  });

  const contract = found.docs[0];
  if (!contract) {
    return NextResponse.json({ error: "Contract inexistent." }, { status: 404 });
  }
  if (contract.status === "signed") {
    return NextResponse.json({ error: "Contractul a fost deja semnat." }, { status: 409 });
  }
  if (contract.status !== "sent") {
    return NextResponse.json({ error: "Contractul nu este disponibil pentru semnare." }, { status: 403 });
  }

  const forwardedFor = request.headers.get("x-forwarded-for");
  const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "necunoscut";

  await payload.update({
    collection: "contracts",
    id: contract.id,
    overrideAccess: true,
    data: {
      status: "signed",
      signature: {
        dataUrl: body.signature,
        signedByName: body.typedName,
        signedAt: new Date().toISOString(),
        signerIp: ip,
      },
    },
  });

  return NextResponse.json({ ok: true });
}
