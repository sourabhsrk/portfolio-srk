'use client'
import { Social } from "../../typings";

export const fetchSocials = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getSocials`,{
        next: { revalidate: 30 },
    });
    const data = await res.json();
    const socials: Social[] = data.socials;
    
    // console.log("fetching socials", socials);
    return socials;
}