import { NextResponse } from 'next/server'
import { groq } from "next-sanity";
import { PageInfo } from "../../../../typings";
import { client } from '../../../../sanity/lib/client'

const query = groq ` *[_type == "pageInfo"][0] `


export async function GET(){
    const pageInfo: PageInfo =  await client.fetch(query);

    return NextResponse.json({pageInfo})
}
