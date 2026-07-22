import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, domain, candidates, mode, location } = body;

    console.log("Received Enquiry:", { name, email, phone, company, domain, candidates, mode, location });

    return NextResponse.json(
      { success: true, message: "Enquiry submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Something went wrong!" },
      { status: 500 }
    );
  }
}