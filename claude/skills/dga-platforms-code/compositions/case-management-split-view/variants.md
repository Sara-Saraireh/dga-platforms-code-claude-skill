# Case Management Split View — variants

Structurally distinct variants of [`composition.md`](composition.md). Interpretive operational
guidance; structure only, no visual styling. Variants must differ in structure (dominant region,
ordering, split, navigation, drill-down, density, sequence, or responsive transformation), not in color,
spacing, radius, shadow, typography, or accent.

## Case and Timeline

### Best for
Cases where chronology drives understanding (progression, escalations, decisions over time).

### Structural model
Case list beside the open case; within the case, a dominant chronological timeline with header and
actions around it.

### Dominant element
The case timeline.

### Regions
Case list · case header · timeline (dominant) · evidence linked from events · participants · actions.

### Navigation
Split list↔case; timeline-led within the case; drilling an event opens its evidence/detail.

### Responsive behavior
Desktop: list + case with timeline central. Tablet: list as drawer, timeline main. Mobile: list → case;
timeline vertical; header sticky; actions sticky.

### Distinction from other variants
Chronology is the organizing spine, unlike Case and Evidence (documents lead) or Multi-Party (relations
lead).

### Risks
Timeline noise for very long cases; support grouping/filtering of events.

### Avoid when
The case is understood mainly through documents (Case and Evidence) or its parties/relationships
(Multi-Party Case).

## Case and Evidence

### Best for
Cases where a body of documents/records is central to understanding and action.

### Structural model
Case list beside the open case; within the case, an evidence/records region dominates, with timeline and
participants as supporting tabs.

### Dominant element
The case evidence/records.

### Regions
Case list · case header · evidence/records (dominant) · timeline (tab) · participants (tab) · actions.

### Navigation
Split list↔case; evidence-led within the case; timeline/participants via tabs; act from the case.

### Responsive behavior
Desktop: list + case with evidence central. Tablet: list drawer, evidence main, tabs for the rest.
Mobile: list → case; evidence first; timeline/participants in tabs; sticky actions.

### Distinction from other variants
Documents/records are the dominant region, where Case and Timeline leads with chronology and Multi-Party
leads with relationships.

### Risks
Evidence overwhelming status/next action; keep the header and actions persistently visible.

### Avoid when
Chronology (Case and Timeline) or parties (Multi-Party Case) are the real key to the case.

## Multi-Party Case

### Best for
Cases defined by relationships among several parties (complaints, disputes, multi-entity investigations).

### Structural model
Case list beside the open case; within the case, a participants/relationships region is dominant, with
per-party evidence and a shared timeline in support.

### Dominant element
The participants and their relationships.

### Regions
Case list · case header · participants/relationships (dominant) · per-party evidence · shared timeline ·
actions.

### Navigation
Split list↔case; party-led within the case; selecting a party filters evidence/timeline to that party;
act on the case.

### Responsive behavior
Desktop: list + case with a relationship view central. Tablet: list drawer, parties main. Mobile: list →
case; participants list first; selecting a party opens its detail full-screen; sticky actions.

### Distinction from other variants
Relationships/parties are the organizing structure, not chronology (Case and Timeline) or documents
(Case and Evidence).

### Risks
Relationship complexity becoming unreadable; provide a clear per-party focus and filtering.

### Avoid when
There is effectively one party, or time/documents drive the case (use the other variants).
