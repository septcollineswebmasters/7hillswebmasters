import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site";

/**
 * Kept for compatibility and monitoring.
 * Primary lead delivery happens client-side via FormSubmit (with mailto fallback),
 * because FormSubmit blocks many server IP ranges behind Cloudflare.
 */
export async function POST() {
  return NextResponse.json({
    ok: true,
    email: siteConfig.email,
    note: "Submit from the website forms. First FormSubmit delivery requires inbox confirmation.",
  });
}
