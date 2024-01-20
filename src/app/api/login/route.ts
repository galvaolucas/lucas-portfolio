import { NextApiRequest, NextApiResponse } from "next";
import * as jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export function POST(request: NextApiRequest) {
  if (request?.url) {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get('token');
    const user = jwt.verify(token as string, process.env.NEXT_PUBLIC_JWT_PUBLIC_KEY ?? '');
    if (user.sub) {
      return NextResponse.json({ user, id: user.sub });
    } else {
      return NextResponse.json({ user: null });
    }
  }
};
