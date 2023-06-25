import { NextResponse } from 'next/server'
import { groq } from "next-sanity";
import { Experience  } from "../../../../typings";
import { client } from '../../../../sanity/lib/client'

const query = groq ` *[_type == "experience"]{
    ...,
    technologies[]->
  } `

export async function GET(){
    const experiences: Experience[] =  await client.fetch(query);

    return NextResponse.json({experiences})
}
