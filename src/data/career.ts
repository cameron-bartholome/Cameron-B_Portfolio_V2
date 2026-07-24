// Career Journey content. Add a new role by pushing another `CareerStage`
// object onto `careerStages` -- the section renders directly from this file.

export interface CareerStageParallel {
  label: string;
  title: string;
  org: string;
  description: string;
}

export interface CareerStage {
  id: string;
  label: string;
  active: boolean;
  title: string;
  org: string;
  /** Optional dates string, e.g. "2021 -- 2024". Left blank shows "DATES". */
  period?: string;
  description: string;
  /** Process chips shown as a left-to-right flow, e.g. REQUIREMENTS -> CONCEPTS -> ... */
  tags: string[];
  quote?: string;
  parallel?: CareerStageParallel;
}

export const careerStages: CareerStage[] = [
  {
    id: 'mechanical-design-engineer',
    label: 'MAIN STAGE 01',
    active: false,
    title: 'Mechanical Design Engineer',
    org: 'Brabant Engineering · supporting high-tech ASML Design & Engineering projects',
    period: 'Nov-2022 to Jun-2026',
    description:
      'Worked through the complete mechanical-design lifecycle, including requirements, concepts, calculations, tolerance analysis, GD&T, design reviews, risk and failure analysis, manufacturability, technical documentation, TPD, production support, and final release.',
    tags: ['REQUIREMENTS', 'CONCEPTS', 'ANALYSIS', 'DETAIL DESIGN', 'REVIEW', 'TPD', 'RELEASE'],
    parallel: {
      label: 'SUPPORTING PARALLEL EXPERIENCE · WEEKENDS',
      title: 'Weekend Cleanroom Assembly Technician',
      org: 'HQ Pack',
      description:
        'Gained additional hands-on experience in cleanroom assembly, product handling, practical working methods, and understanding how released designs are experienced by technicians. Ran alongside my design career and strengthened it.',
    },
  },
  {
    id: 'system-qualification-test-engineer',
    label: 'MAIN STAGE 02 · ACTIVE',
    active: true,
    title: 'System Qualification Test Engineer',
    org: 'ASML · current role',
    description:
      'Qualifying complex operating systems, executing tests, observing machine behaviour, investigating failures, replacing or recovering modules, verifying performance, documenting results, and cooperating with production, support, and development teams.',
    tags: ['PREPARE', 'EXECUTE', 'OBSERVE', 'INVESTIGATE', 'RECOVER', 'RETEST', 'VERIFY'],
    quote: 'I wanted to see what happens when design intent meets a running machine.',
  },
];

export interface FutureStage {
  name: string;
  sub: string;
  tag: string;
  /** Solid = achieved/current stage. Dashed = not yet reached. */
  solid: boolean;
  current?: boolean;
}

export const futureStages: FutureStage[] = [
  { name: 'MECHANICAL DESIGN', sub: 'Strong foundation', tag: 'FOUNDATION', solid: true },
  { name: 'SYSTEM QUALIFICATION', sub: 'Current expansion', tag: 'CURRENT', solid: true, current: true },
  { name: 'SYSTEMS ENGINEERING', sub: 'Preferred direction', tag: 'POSSIBLE NEXT STEP', solid: false },
  { name: 'SYSTEM ARCHITECTURE', sub: 'Long-term possibility', tag: 'LONG-TERM', solid: false },
];

export const openDirection = {
  title: 'The right opportunity may reveal another path',
  tag: 'OPEN',
};

export const journeyIntro = {
  heading: 'From design intent to machine behaviour.',
  body: 'I moved into system qualification to understand what happens after a design is released, integrated, and expected to perform in the real world.',
};

export const futureDirectionCopy = {
  heading: 'Where this could lead.',
  paragraphs: [
    'My move into system qualification is not a step away from design. It is a chance to understand what happens after a design is released, when hardware, software, electronics, procedures, production, and people all have to work together.',
    'Mechanical design remains one of my core strengths, and I continue developing it through personal projects. My current role is helping me build a broader understanding of complete systems and the real-world problems that are difficult to see from the design side alone.',
    'My current direction is to combine these perspectives and grow toward systems engineering and, over time, system architecture. That said, I do not see it as one fixed route. Engineering is broad, and there may be an interesting technical path or opportunity that I have not come across yet. As long as I am learning, solving meaningful problems, and staying close to the product, I am open to where that may lead.',
  ],
};
