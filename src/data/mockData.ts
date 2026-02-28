import { FeedItemData } from "@/components/FeedCard";
import { EventData } from "@/components/EventCard";
import { CompetitorData } from "@/components/CompetitorSidebar";

export const mockCompetitors: CompetitorData[] = [
  { name: "Palantir Technologies", website: "palantir.com", industry: "Data Analytics", lastActivity: "2 hours ago", activityCount: 14 },
  { name: "Snowflake", website: "snowflake.com", industry: "Cloud Data Platform", lastActivity: "5 hours ago", activityCount: 9 },
  { name: "Databricks", website: "databricks.com", industry: "Data & AI", lastActivity: "1 day ago", activityCount: 7 },
  { name: "Splunk", website: "splunk.com", industry: "Observability", lastActivity: "2 days ago", activityCount: 5 },
];

export const mockFeed: FeedItemData[] = [
  {
    id: "1",
    competitor: "Palantir Technologies",
    type: "service_launch",
    title: "Palantir Launches AIP for Defense — New AI Platform for Allied Nations",
    summary: "Palantir unveiled its Artificial Intelligence Platform (AIP) for Defense, enabling allied nations to deploy large language models on classified networks with full data sovereignty.",
    source: "palantir.com/newsroom",
    date: "Feb 26, 2026",
    url: "#",
  },
  {
    id: "2",
    competitor: "Snowflake",
    type: "case_study",
    title: "How Capital One Reduced Data Pipeline Costs by 40% with Snowflake",
    summary: "Capital One shares its journey migrating legacy data warehouses to Snowflake, resulting in 40% cost savings and 3x faster query performance across 2,000+ data pipelines.",
    source: "snowflake.com/customers",
    date: "Feb 24, 2026",
    url: "#",
  },
  {
    id: "3",
    competitor: "Databricks",
    type: "podcast",
    title: "The Data Brew Podcast Ep. 84 — RAG at Scale with Databricks Mosaic AI",
    summary: "Databricks CTO Matei Zaharia discusses retrieval-augmented generation architectures, vector search optimization, and the future of compound AI systems on enterprise data.",
    source: "Spotify / databricks.com",
    date: "Feb 22, 2026",
  },
  {
    id: "4",
    competitor: "Splunk",
    type: "press_release",
    title: "Splunk Announces Strategic Partnership with CrowdStrike for Unified Security",
    summary: "Splunk and CrowdStrike announced a joint integration enabling unified threat detection and response, combining SIEM and EDR capabilities in a single pane of glass.",
    source: "splunk.com/press",
    date: "Feb 20, 2026",
    url: "#",
  },
  {
    id: "5",
    competitor: "Palantir Technologies",
    type: "vlog",
    title: "Inside Palantir's Foundry: A Technical Deep Dive — YouTube Series",
    summary: "A new 4-part video series walking through Palantir Foundry's ontology layer, pipeline builder, and real-time decision-making workflows for supply chain operations.",
    source: "YouTube",
    date: "Feb 18, 2026",
  },
  {
    id: "6",
    competitor: "Snowflake",
    type: "news",
    title: "Snowflake Acquires AI Startup Neeva to Boost Enterprise Search Capabilities",
    summary: "Snowflake completed the acquisition of Neeva, integrating its AI-powered search technology into Snowflake Cortex to enhance natural language querying across enterprise data lakes.",
    source: "TechCrunch",
    date: "Feb 15, 2026",
    url: "#",
  },
];

export const mockEvents: EventData[] = [
  {
    id: "e1",
    name: "Gartner Data & Analytics Summit 2026",
    date: "Mar 11–13, 2026",
    location: "Orlando, FL",
    attendingOEMs: ["Snowflake", "Databricks", "Palantir"],
    speakers: ["Ali Ghodsi (Databricks)", "Frank Slootman (Snowflake)"],
    clientsAttending: ["JPMorgan Chase", "Deloitte"],
    url: "#",
  },
  {
    id: "e2",
    name: "RSA Conference 2026",
    date: "Apr 6–9, 2026",
    location: "San Francisco, CA",
    attendingOEMs: ["Splunk", "CrowdStrike", "Palo Alto Networks"],
    speakers: ["Gary Steele (Splunk CEO)"],
    clientsAttending: ["Bank of America"],
    url: "#",
  },
  {
    id: "e3",
    name: "AWS re:Invent 2026",
    date: "Nov 30 – Dec 4, 2026",
    location: "Las Vegas, NV",
    attendingOEMs: ["Snowflake", "Databricks", "Palantir", "Splunk"],
    speakers: ["Matei Zaharia (Databricks CTO)", "Benoit Dageville (Snowflake)"],
    clientsAttending: ["Goldman Sachs", "Deloitte", "JPMorgan Chase"],
  },
];
