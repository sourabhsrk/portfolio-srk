import { Project } from "../../typings";
import { groq } from "next-sanity";
import {client} from '../../sanity/lib/client';

export const fetchProjects = async() => {
    const query = groq ` *[_type == "project"]{
        ...,
        technologies[]->
      } `

    const projects: Project[] = await client.fetch(query,{
        next: { revalidate: 30 },
    });
   // const data = await res.json();
    // const projects: Project[] = res.projects;
    
   // console.log("fetching projects", projects);
    return projects;
}