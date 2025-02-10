import { readDB } from "@/lib/db";
import { NextResponse } from 'next/server';
import { errorHandler } from "@/utils/error-handler";

export async function GET() {
    try {
      const data = await readDB();
      return NextResponse.json(data.indexdata);
    } catch (error) {
      return errorHandler(error);
    }
  }