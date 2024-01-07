import { NextApiRequest, NextApiResponse } from "next";
import * as jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import { JwtPayload } from "jsonwebtoken";

export async function POST(request: NextApiRequest) {
  if (request?.url) {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get('token');
    const decode = jwt.verify(token as string, process.env.NEXT_PUBLIC_JWT_PUBLIC_KEY ?? '');
    if (decode) {
      return NextResponse.json({ valid: true });
    } else {
      return NextResponse.json({ valid: false });
    }
  }
};
