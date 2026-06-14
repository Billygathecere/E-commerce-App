// Receives secure Safaricom payment receipts
export async function POST() {
  return Response.json({ message: "Callback received" });
}
