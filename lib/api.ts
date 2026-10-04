import { LegalPage, Project, Service, Team } from "@/types";

import { faqsQuery, legalPageBySlug, projectBySlug, projectSlugs, projectsQuery, serviceBySlug, serviceSlugs, servicesQuery, teamsQuery } from "./graphql-queries";
import { wpFetch } from "./wp";


export const getFaqs= async()=> {
    try {
       const data:any = await wpFetch(faqsQuery);
       return data?.faqs?.nodes || []
    } catch (error) {
        return []
    }
}

export const getServices= async(limit:number):Promise<Service[] | []>=> {
    try {
       const data:any = await wpFetch(servicesQuery(limit));
       return data?.services?.nodes || []
    } catch (error) {
        return []
    }
}

export const getProjects= async(limit:number):Promise<Project[] | []>=> {
    try {
       const data:any = await wpFetch(projectsQuery(limit));
       return data?.projects?.nodes || []
    } catch (error) {
        return []
    }
}

export const getTeams = async():Promise<Team[] | []>=> {
    try {
       const data:any = await wpFetch(teamsQuery);
       return data?.teams?.nodes || []
    } catch (error) {
        return []
    }
}

export const getServiceSlugs = async(limit:number):Promise<{slug:string,title?:string}[]|[]>=> {
    try {
       const data:any = await wpFetch(serviceSlugs(limit));
       return data?.services?.nodes || []
    } catch (error) {
        return []
    }
}


export const getServiceBySlug = async(slug:string):Promise<Service|null>=> {
    try {
       const data:any = await wpFetch(serviceBySlug(slug));
       return data?.service || null
    } catch (error) {
        return null
    }
}

export const getProjectSlugs = async():Promise<{slug:string}[]|[]>=> {
    try {
       const data:any = await wpFetch(projectSlugs);
       return data?.projects?.nodes || []
    } catch (error) {
        return []
    }
}

export const getProjectBySlug = async(slug:string):Promise<Project|null>=> {
    try {
       const data:any = await wpFetch(projectBySlug(slug));
       return data?.project || null
    } catch (error) {
        return null
    }
}

export const getLegalPageBySlug = async(slug:string):Promise<LegalPage|null>=> {
    try {
       const data:any = await wpFetch(legalPageBySlug(slug));
       return data?.legalPage || null
    } catch (error) {
        return null
    }
}