import { Social } from "../../typings";
import { groq } from "next-sanity";
import {client} from '../../sanity/lib/client';

export const fetchSocials = async() => {
    const query = groq ` *[_type == "social"] `

    const socials: Social[] =  await client.fetch(query,{
        next: { revalidate: 30 },
    });
   // const data = await res.json();
    // const socials: Social[] = res;
    
    // console.log("fetching socials", socials);
    return socials;
}