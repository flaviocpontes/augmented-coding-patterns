import PatternMap from "./PatternMap";
import { getAllPatterns } from "@/lib/markdown";
import { PatternContent } from "@/lib/types";
import mapIndex from "@/public/maps/map-index.json";

type PatternData = PatternContent & {
  name: string;
  category: string;
};

export default function TalkPage() {
  const allPatterns = [
    ...getAllPatterns("patterns"),
    ...getAllPatterns("anti-patterns"),
    ...getAllPatterns("obstacles")
  ];

  const patternDataByNumber: Record<string, PatternData> = {};
  const patternDataByLabel: Record<string, PatternContent> = {};

  Object.entries(mapIndex).forEach(([number, info]) => {
    const pattern = allPatterns.find(p => p.slug === info.slug);
    if (pattern) {
      patternDataByNumber[number] = {
        ...info,
        ...pattern
      };
    }
  });

  allPatterns.forEach(pattern => {
    patternDataByLabel[pattern.title] = pattern;
  });

  return (
    <div>
      <div style={{ padding: '2rem 2rem 1rem', textAlign: 'center' }}>
        <h1>Augmented Coding: Mapping the Uncharted Territory</h1>
      </div>
      <PatternMap
        patternDataByNumber={patternDataByNumber}
        patternDataByLabel={patternDataByLabel}
      />
      <div style={{ padding: '1rem 2rem 2rem', textAlign: 'center' }}>
        <p>
          Explore the interactive map above, or{' '}
          <a
            href="https://www.youtube.com/watch?v=_LSK2bVf0Lc&t=5301s"
            target="_blank"
            rel="noopener noreferrer"
          >
            watch the guided walkthrough
          </a>
          {' '}on YouTube.
        </p>
      </div>
    </div>
  );
}
