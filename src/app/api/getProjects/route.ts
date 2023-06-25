import { NextResponse } from 'next/server'
import { groq } from "next-sanity";
import { Project } from "../../../../typings";
import { client } from '../../../../sanity/lib/client'

const query = groq ` *[_type == "project"]{
    ...,
    technologies[]->
  } `



export async function GET(){
    const projects: Project[] =  await client.fetch(query);

    return NextResponse.json({projects})
}
