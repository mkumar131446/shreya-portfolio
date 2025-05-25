import deloitte from '../assets/logos/deloitte.png'
import brightpower from '../assets/logos/brightpower.png'
import cvs from '../assets/logos/cvs.png'
import teacher from '../assets/logos/uptu.jpg'
import nydis from '../assets/logos/NYDIS_Logo.png'
import dycd from '../assets/logos/dycd.png'
import tebleau from '../assets/logos/tableau-logo.png'
import powerbi from '../assets/logos/power-bi-logo.png'
import excel from '../assets/logos/excel-log.png'
import python from '../assets/logos/python-logo.png'
import r from '../assets/logos/r-logo.png'
import sql from '../assets/logos/sql-logo.jpeg'
import sas from '../assets/logos/sas-logo.png'
import databricks from '../assets/logos/databricks_Logo.png'
import rapidminer from '../assets/logos/rapidminer_logo.jpg'
import advExcel from '../assets/logos/adv-excel-logo.png'
import arcgis from '../assets/logos/arcgis-logo.png'
import salesforce from '../assets/logos/salesforce-logo.png'
import dbms from '../assets/logos/dbms-logo.png'
import jira from '../assets/logos/Jira_Logo.png'
import microsoftsql from '../assets/logos/microsoft-sql-logo.jpg'
import ignou from '../assets/logos/ignou-logo.png'
import rgec from '../assets/logos/rgec-logo.jpg'
import pace from '../assets/logos/pace-university.png'


export interface Tool {
  name: string
  icon: string
}

export const tools: Tool[] = [
  { name: 'Python', icon: python },
  { name: 'R', icon: r },
  { name: 'SQL', icon: sql },
  { name: 'SAS', icon: sas },
  { name: 'Databricks', icon: databricks },
  { name: 'RapidMiner', icon: rapidminer },
  { name: 'Tableau', icon: tebleau },
  { name: 'Power BI', icon: powerbi },
  { name: 'Excel', icon: excel },
  { name: 'Advanced Excel', icon: advExcel },
  { name: 'ArcGIS', icon: arcgis },
  { name: 'Salesforce', icon: salesforce },
  { name: 'Microsoft SQL', icon: microsoftsql },
  { name: 'DBMS', icon: dbms },
  { name: 'Jira', icon: jira },
]

interface ExperienceItem {
  logo: string
  company: string
  role: string
  duration: string
  description: string[]
}

export const experiences: ExperienceItem[] = [
  {
    logo: deloitte,
    company: 'Deloitte',
    role: 'Audit & Assurance Analytics Specialist',
    duration: 'Aug 2023 – Present',
    description: [
      'Built analytics using SAS, R, Python, Excel, and Power BI to support audit objectives.',
      'Created dashboards in Tableau and Power BI to communicate findings.',
      'Transformed datasets to identify trends and mitigate risks.'
    ]
  },
  {
    logo: brightpower,
    company: 'Bright Power, Inc.',
    role: 'Compliance Analyst',
    duration: 'August 2022 – August 2023',
    description: [
      'Analyzed energy usage data for 250+ properties using SQL and Excel.',
      'Prepared performance reports and dashboards in Tableau.',
    ]
  },
  {
    logo: cvs,
    company: 'CVS Health',
    role: 'Data & Analytics Consultant',
    duration: 'June 2022 – August 2022',
    description: [
      'Resolved insurance data discrepancies using Advanced Excel.',
      'Processed policy changes and resolved customer issues using Salesforce.'
    ]
  },
  {
    logo: brightpower,
    company: 'Bright Power, Inc.',
    role: 'Compliance Benchmarking Intern',
    duration: 'January 2022 – June 2022',
    description: [
      'Worked on various Ad-hoc projects helped the team in benchmarking properties and updating information in salesforce.',
      'Generated Reports by pulling information using SQL queries from Database and visualize the property Energy Score card report in Tableau.',
      'Analyzed and resolved any data discrepancies in Energy Score card and ensured timely transfer of utility data into Portfolio Manager.'
    ]
  },
  {
    logo: nydis,
    company: 'New York Disaster Interfaith Services (NYDIS)',
    role: 'Community Preparedness Intern',
    duration: 'August 2021 – January 2022',
    description: [
      'Gathered data about homeless people from Housing & Urban Development, analyze trends using MS Excel to assist in creating shelter options.',
      'Collected data from NYC Health to identify the zip-code with less vaccination rate and COVID-19 related problems and visualize it on Tableau.',
    ]
  },
  {
    logo: dycd,
    company: 'NYC Department of Youth and Community Development',
    role: 'Data Analysis - Capacity Building Intern',
    duration: 'June 2021 – August 2021',
    description: [
      'Reviewed data collection approaches and recommend improvements to help department understand employee training trends.',
      'Cleaned and processed data using Excel and Python, used Power BI to identify insights about meeting attendees & their geo-location.',
    ]
  },
  {
    logo: teacher,
    company: 'State Government Education Department, Uttar Pradesh, India',
    role: 'Teacher',
    duration: 'July 2016 – January 2020',
    description: [
      'Educated students and collaborated with department heads to implement teaching materials to develop creative thinking skills.',
    ]
  },
]

export interface ResearchItem {
  title: string
  summary: string
  pdfLink: string
  doiLink: string
}

export const researchPapers: ResearchItem[] = [
  {
    title:
      "Advancements in Data Analytics Tools: How Technology is Revolutionizing Business Decision-Making",
    summary:
      "This paper explores how modern data analytics tools—powered by AI, ML, and cloud computing—are reshaping business decision-making. From improving operational efficiency to enabling real-time predictions and customer-centric strategies, it examines the profound impact of analytics platforms on today’s competitive business landscape.",
    pdfLink:
      "https://journalijsra.com/sites/default/files/fulltext_pdf/IJSRA-2025-1338.pdf",
    doiLink: "https://doi.org/10.30574/ijsra.2025.15.2.1338",
  },
]

interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Research & Publications', href: '#research' },
  { label: 'Tech Stack', href: '#tech' },
  { label: 'Contact', href: '#contact' },
]

interface EducationItem {
  logo: string
  degree: string
  university: string
  concentration: string
  duration: string
}

export const education: EducationItem[] = [
  {
    logo: pace,
    degree: 'Master of Science',
    university: 'Pace University, New York, NY',
    concentration: 'in Information Systems',
    duration: 'May 2022',
  },
  {
    logo: ignou,
    degree: 'Master of Arts (M.A.)',
    university: 'Indira Gandhi National Open University (IGNOU)- Delhi, India',
    concentration: 'in Economics',
    duration: 'July 2018',
  },
  {
    logo: rgec,
    degree: 'Bachelor of Technology (B.Tech)',
    university: 'Radha Govind Engineering College (RGEC)- Meerut, India',
    concentration: 'in Electronics and Instrumentation Engineering',
    duration: 'July 2012',
  }
]
