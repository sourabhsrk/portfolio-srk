import { Skill } from "../../typings";
import { groq } from "next-sanity";
import {client} from '../../sanity/lib/client';

export const fetchSkills = async() => {
    const query = groq ` *[_type == "skill"] `;

    const skills: Skill[] = await client.fetch(query,{
        next: { revalidate: 30 },
    });
   // const data = await res.json();
    // const skills: Skill[] = res.skills;
    
    // console.log("fetching skills", skills);
    return skills;
}