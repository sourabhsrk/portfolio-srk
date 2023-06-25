'use client'
import { Experience } from "../../typings";

export const fetchExperience = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`,{
        next: { revalidate: 30 },
    });
    const data = await res.json();
    const experiences: Experience[] = data.experiences;
    
    // console.log("fetching experience", experiences);
    return experiences;
}