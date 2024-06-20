'use server'

import { NextResponse } from 'next/server';
import Client from 'node-scp';

export async function POST(request: Request) {

  try {
    const body = await request.json();
	
    const svgMap = body.svgMap;
    const fileName = body.fileName;

    const path = `${process.env.WRITE_MAPS_FOLDER}${fileName}`;

    const client = await Client({
      host: process.env.MAPS_HOST,
      port: 22,
      username: process.env.MAPS_USER,
      password: process.env.MAPS_PASSWORD,
    })
    console.log(path);
    await client.writeFile(path, svgMap, { flag: 'w' })
    client.close()

    return NextResponse.json({'success': true}, {status: 200});
  } catch (err) {
    console.error(err);
    return NextResponse.json({'error': err}, {status: 500});
  }

}