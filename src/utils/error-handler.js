import { NextResponse } from 'next/server';

export function errorHandler(error) {
  console.error('API Error:', error);
  return NextResponse.json(
    { error: 'Internal Server Error' },
    { status: 500 }
  );
}