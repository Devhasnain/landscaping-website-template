export const faqsQuery = `query GetFaqs($first: Int = 10) {
  faqs(first: $first) {
    nodes {
      title
      excerpt
    }
  }
}`

export const servicesQuery =(limit:number)=> `query GetServices($first: Int = ${limit || 4}) {
  services(first: $first) {
    nodes {
      title
      slug
      excerpt  
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
    }
  }
}`

export const projectsQuery =(limit:number)=> `query GetProjects($first: Int = ${limit}) {
  projects(first: $first) {
    nodes {
      title
      slug
      excerpt  
      customFields{
        location
      }
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
    }
  }
}`

export const teamsQuery =`query GetTeams($first: Int = 10) {
  teams(first: $first) {
    nodes {
      title
      excerpt
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
    }
  }
}`

export const serviceSlugs =(limit:number)=> `query GetServiceSlugs {
  services(first: ${limit}) {
    nodes {
    title
      slug
    }
  }
}`

export const serviceBySlug = (slug:string)=>`query GetServiceBySlug {
  service(id: "${slug}", idType: SLUG) {
      title
      slug
      content
      date
      excerpt  
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
    }
}`

export const projectSlugs = `query GetProjectSlugs {
  projects(first: 1000) {
    nodes {
      slug
    }
  }
}`

export const projectBySlug =(slug:string)=> `query GetProjectBySlug {
  project(id: "${slug}", idType: SLUG) {
      title
      slug
      content
      date
      excerpt  
      customFields{
        location
      }
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
    }
}`

export const legalPageBySlug =(slug:string)=> `query GetLegalPageBySlug {
  legalPage(id: "${slug}", idType: SLUG) {
      title
      excerpt
      date
      slug
      content
    }
}`