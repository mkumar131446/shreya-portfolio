import deloitte from '../assets/logos/deloitte.png'
import brightpower from '../assets/logos/brightpower.png'
import cvs from '../assets/logos/cvs.png'
import teacher from '../assets/logos/uptu.jpg'
import nydis from '../assets/logos/NYDIS_Logo.png'
import dycd from '../assets/logos/dycd.png'


export interface Tool {
  name: string
  icon: string
}

export const tools: Tool[] = [
  { name: 'Python', icon: '🐍' },
  { name: 'R', icon: '📊' },
  { name: 'SQL', icon: '🗄️' },
  { name: 'SAS', icon: '📈' },
  { name: 'Databricks', icon: '🧱' },
  { name: 'RapidMiner', icon: '⚙️' },
  { name: 'Tableau', icon: '📊' },
  { name: 'Power BI', icon: '📉' },
  { name: 'Excel', icon: '📗' },
  { name: 'Advanced Excel', icon: '📘' },
  { name: 'ArcGIS', icon: '🗺️' },
  { name: 'Salesforce', icon: '☁️' },
  { name: 'Microsoft SQL', icon: '🛢️' },
  { name: 'DBMS', icon: '📂' },
  { name: 'XAMPP', icon: '⚡' },
  { name: 'Jira', icon: '🧩' },
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