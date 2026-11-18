import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const secret = req.headers.get("authorization");
    const expectedSecret = process.env.SANITY_REVALIDATE_SECRET;

    if (expectedSecret && secret !== `Bearer ${expectedSecret}`) {
      return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
    }

    if (body?._type === "post" || body?._type === "author") {
      revalidatePath("/blog", "page");
      revalidatePath("/blog/[slug]", "page");
      revalidatePath("/", "page");
      revalidatePath("/sitemap.xml");
      return NextResponse.json({ revalidated: true, now: Date.now() });
    }

    return NextResponse.json({ message: "No revalidation needed" });
  } catch (err) {
    return NextResponse.json(
      { message: "Error revalidating", err: String(err) },
      { status: 500 }
    );
  }
}
