import { Experience } from "../../typings";
import { groq } from "next-sanity";
import {client} from '../../sanity/lib/client';

export const fetchExperience = async() => {
    const query = groq ` *[_type == "experience"]{
        ...,
        technologies[]->
      } `

    const experiences: Experience[] = await client.fetch(query,{
        next: { revalidate: 30 },
    });
  //  const data = await res.json();
   // const experiences: Experience[] = res.experiences;
    
    // console.log("fetching experience", experiences);
    return experiences;
}