import { NextResponse } from 'next/server'
import { groq } from "next-sanity";
import { Social } from "../../../../typings";
import { client } from '../../../../sanity/lib/client'

const query = groq ` *[_type == "social"] `


export async function GET(){
    const socials: Social[] =  await client.fetch(query);

    return NextResponse.json({socials})
}
