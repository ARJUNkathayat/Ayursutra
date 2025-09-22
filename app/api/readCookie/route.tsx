import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore = await cookies();
  const cook = cookies();
 
  const token =  cookieStore.get("authToken");
  console.log("Token from cookie:", token?.value);

  return NextResponse.json({ token: token?.value });
}
