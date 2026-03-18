// ### PLACEHOLDER: Researcher will customize video data

export interface VideoResult {
  id: string;
  title: string;
  source: string;
  duration: string;
  views: string;
  thumbnailKey?: string;
}

// Fictional video results for research simulation
export const VIDEOS: VideoResult[] = [
  {
    id: "v1",
    title: "Todd Smith on small business growth strategies ...",
    source: "YouTube · Entrepreneur Channel",
    duration: "7:18",
    views: "Jan 30, 2025"
  },
  {
    id: "v2",
    title: "Todd Smith — Omaha Business Leader of the Year 2024",
    source: "YouTube · Omaha World-Herald",
    duration: "3:55",
    views: "Dec 5, 2024"
  },
  {
    id: "v3",
    title: "Building a sales team from scratch — Todd Smith",
    source: "YouTube · Sales Hacker",
    duration: "11:22",
    views: "Aug 15, 2024"
  }
];

