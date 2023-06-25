import { NextResponse } from 'next/server'
import { groq } from "next-sanity";
import { Skill } from "../../../../typings";
import { client } from '../../../../sanity/lib/client'

const query = groq ` *[_type == "skill"] `


export async function GET(){
    const skills: Skill[] =  await client.fetch(query);

    return NextResponse.json({skills})
}
