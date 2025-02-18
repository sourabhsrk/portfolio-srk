interface SanityBody {
    _createdAt: string,
    _id: string,
    _rev: string,
    _updatedAt: string
}

interface Image {
    _type: "image",
    asset: {
        _ref: string,
        _type: "reference"
    }
}

export interface Skill extends SanityBody {
    _type: "skill",
    title: string,
    progress: number,
    image: Image
}

export interface Social extends SanityBody {
    _type: "social",
    title: string,
    url: string
}

export interface PageInfo extends SanityBody {
    _type: "pageInfo",
    address: string,
    heroImage: Image,
    backgroundInformation: string,
    email: string,
    role: string,
    name: string,
    phoneNumber: string,
    profilePic: Image,
    socials: Social[]
}

export interface Project extends SanityBody {
    _type: "project",
    title: string,
    image: Image,
    linkToBuild: string,
    summary: string,
    technologies: Skill[]
}

export interface ExperienceCardType extends SanityBody {
    _type: "experience",
    company: string,
    companyImage: Image,
    dateStarted: Date,
    dateEnded: Date,
    isCurrentlyWorkingHere: boolean,
    jobTitle: string,
    points: string[],
    technologies: Skill[]
}