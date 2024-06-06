'use server'

import { NextResponse } from 'next/server';
import { pool } from '@/app/api/conn';

let localPool: { getConnection: () => any; };

if (!global.pool){
  global.pool = pool;
}

localPool = global.pool;

export async function GET(request: Request, { params }: { params: { dataini: string } }) {
  const conn = await localPool.getConnection();
  const query = `SELECT * FROM mappe_tgrx`;
  console.debug(query);
  const rows = await conn.query(query);
 
  conn.release();
  conn.end();
  return NextResponse.json(rows, {status: 200});
}