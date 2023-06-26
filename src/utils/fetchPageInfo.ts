import { PageInfo } from "../../typings";
import { groq } from "next-sanity";
import {client} from '../../sanity/lib/client';

export const fetchPageInfo = async() => {

    const query = groq ` *[_type == "pageInfo"][0] `;

    const pageInfo: PageInfo = await client.fetch(query,{
        next: { revalidate: 30 },
    });
    //const data = await res.json();
    // const pageInfo: PageInfo = res.pageInfo;
    
    // console.log("fetching pageInfo", pageInfo);
    return pageInfo;
}