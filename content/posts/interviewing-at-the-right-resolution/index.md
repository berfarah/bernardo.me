---
title: "Mapping the Ocean Floor: Interviewing at the Right Resolution"
date: 2026-03-08
description: "What ocean floor mapping teaches us about interviewing — why depth beats breadth and how to design for real signal."
tags:
  - leadership
  - hiring
---

## A Video About the Ocean

I was watching a [Cleo Abram video about ocean mapping](https://www.youtube.com/watch?v=Cz24meZACsY), and it completely reframed how I think about something that has nothing to do with the ocean: hiring.

Here's the problem she describes. We've mapped the surface of Mars in higher resolution than we've mapped our own ocean floor. For decades, the best maps we had of the deep ocean came from satellite-based measurements. Broad, global coverage, but terrible resolution. You could see the general shape of things, but the picture was blurry. Too blurry to actually navigate by.

The breakthrough wasn't better satellites. It was narrower, more focused instruments. Sonar vessels that could map small areas in extraordinary detail. The trade-off was obvious: you couldn't cover everything. You had to choose where to point the beam. But the result was that a small, well-chosen area mapped in high resolution told you more than the entire ocean mapped in low resolution.

That trade-off, between breadth and resolution, is the exact same problem we face every time we interview someone.

---

## The Resolution Paradox

Here's the paradox at the heart of every interview process: **the more you try to cover, the less you actually learn.**

{{< figure-svg alt="Two views of the same ocean floor terrain: satellite-derived bathymetry shows blurry, indistinct features while multibeam sonar reveals detailed ridges, trenches, and peaks" caption="Satellite-derived vs. multibeam sonar bathymetry of the Charlie-Gibbs Fracture Zone. A complete scorecard at low resolution tells you less than focused depth on what matters. <em>Image courtesy of NOAA Ocean Exploration, Voyage to the Ridge 2022.</em>" >}}
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 740 310" width="740" height="310">
  <style>
    .topo-label { font-family: Texta, Helvetica, Arial, sans-serif; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; }
    .topo-subtitle { font-family: 'Newsreader', Georgia, serif; font-size: 12px; font-style: italic; }
  </style>

  <!-- Satellite View side -->
  <text x="175" y="24" text-anchor="middle" class="topo-label" fill="var(--color-text-secondary, #3d3a36)">Satellite View</text>
  <text x="175" y="42" text-anchor="middle" class="topo-subtitle" fill="var(--color-text-muted, #7a7772)">Every dimension scored, nothing learned</text>

  <image href="images/satellite-bathymetry.jpg" x="20" y="56" width="310" height="230" preserveAspectRatio="xMidYMid slice"/>
  <rect x="20" y="56" width="310" height="230" fill="none" stroke="var(--color-border, #eae7e1)" stroke-width="1" rx="4"/>

  <!-- Sonar View side -->
  <text x="565" y="24" text-anchor="middle" class="topo-label" fill="var(--color-text-secondary, #3d3a36)">Sonar View</text>
  <text x="565" y="42" text-anchor="middle" class="topo-subtitle" fill="var(--color-text-muted, #7a7772)">Fewer dimensions, real terrain</text>

  <image href="images/sonar-bathymetry.jpg" x="410" y="56" width="310" height="230" preserveAspectRatio="xMidYMid slice"/>
  <rect x="410" y="56" width="310" height="230" fill="none" stroke="var(--color-border, #eae7e1)" stroke-width="1" rx="4"/>
</svg>
{{< /figure-svg >}}

I once had four yeses on a panel where none of the scorecards had real conviction. Surface-level project descriptions, no depth beyond the high-level. Four yeses, zero confidence. That can happen when an interview loop is trying to cover eight dimensions across in a 45-minute conversation. Each dimension only gets a few minutes of airtime. Enough to fill a scorecard, but not enough to produce real signal. You end up with a satellite view where you can't differentiate a ridge from a trench.

Interviewing is [a noisy prediction problem](https://erikbern.com/2018/05/02/interviewing-is-a-noisy-prediction-problem.html): each assessment is a low-fidelity measurement, and adding more low-resolution measurements doesn't reduce the noise. You have to choose which parts of the ocean floor matter most for _this role, on this team, at this moment_, and accept that other areas will stay in low resolution.

---

## Start With What You're Actually Looking For

I've found many interview loops are assembled bottom-up. Someone pulls out their favorite system design prompt. Another interviewer brings in behavioral question they've been asking for three years. The loop gets stitched together from existing parts, and the implicit assumption is that if you cover enough topics, you'll learn enough to decide. But that's not a first principles approach. If you don't map your questions back to your criteria, how do you know you're assessing for the right things?

Instead, before writing a single question, I ask myself: **what are the three or four things that, if we had strong signal on them, would give us confidence in a decision?** Not a wish list of everything I'd love to know. The specific, prioritized signals that matter most for this role.

A senior engineer joining a team that's rewriting a core service needs different signal than one joining a steady-state team. A staff role might demand high resolution on how someone handles ambiguity and influences without authority, and only surface-level confirmation that they can write decent code. A management role might have different priorities entirely.

Once we have the rubric, the questions are much easier. Now we're looking for situations that can reflect the behavior and competencies we're looking for. We can catch flaws early, like assessing for "empathy" and "making tough calls" separately, missing managers who live their values when having tough performance conversations.

Our interview loop has a clear separation of concerns that sets our interviewers up, and our interviewers can walk into our debrief knowing what they were supposed to be mapping.

---

## Choosing Where to Point the Beam

Now we've defined our signals, we can start thinking about the skills involved in conducting our interview. As an interviewer, I have a library of questions that I can use to direct my conversation — but there's no way I can go deep on all of them. In a system design spanning architecture, domain modeling, error handling, monitoring, scalability and more, I still have to direct my focus. So, maybe the candidate's approach to error handling raises a question. I spend ten minutes there, while their monitoring answer stays at the surface level. Making these trade-offs in real-time requires three distinct skills:

{{< figure-svg alt="Interview time allocation showing broad scan, deep dive, and pivot phases" caption="A 45-minute interview: scan broadly, then commit depth where it matters most." >}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 185" width="680" height="185">
  <style>
    .beam-label { font-family: Texta, Helvetica, Arial, sans-serif; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; }
    .beam-time { font-family: 'Office Code Pro', monospace; font-size: 10px; }
    .beam-desc { font-family: 'Newsreader', Georgia, serif; font-size: 11px; }
    .beam-topic { font-family: Texta, Helvetica, Arial, sans-serif; font-size: 10px; }
  </style>

  <!-- Timeline bar background -->
  <rect x="30" y="30" width="620" height="48" rx="4" fill="var(--color-text-muted, #7a7772)" opacity="0.08"/>

  <!-- Broad Scan phase -->
  <rect x="30" y="30" width="155" height="48" rx="4" fill="var(--color-action, #4a7a94)" opacity="0.25"/>
  <text x="107" y="50" text-anchor="middle" class="beam-label" fill="var(--color-action, #4a7a94)">Broad Scan</text>
  <text x="107" y="68" text-anchor="middle" class="beam-time" fill="var(--color-text-muted, #7a7772)">~10 min</text>

  <!-- Deep Dive 1 -->
  <rect x="190" y="30" width="180" height="48" rx="4" fill="var(--color-accent, #f29e0b)" opacity="0.25"/>
  <text x="280" y="50" text-anchor="middle" class="beam-label" fill="var(--color-accent, #f29e0b)">Deep Dive</text>
  <text x="280" y="68" text-anchor="middle" class="beam-time" fill="var(--color-text-muted, #7a7772)">~15 min</text>

  <!-- Pivot marker -->
  <line x1="375" y1="82" x2="375" y2="100" stroke="var(--color-text-muted, #7a7772)" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="375" y="113" text-anchor="middle" class="beam-label" fill="var(--color-text-muted, #7a7772)" font-size="9px">pivot</text>
  <path d="M370,100 L375,108 L380,100" fill="none" stroke="var(--color-text-muted, #7a7772)" stroke-width="1"/>

  <!-- Deep Dive 2 (post-pivot) -->
  <rect x="375" y="30" width="180" height="48" rx="4" fill="var(--color-accent, #f29e0b)" opacity="0.35"/>
  <text x="465" y="50" text-anchor="middle" class="beam-label" fill="var(--color-accent, #f29e0b)">Deep Dive</text>
  <text x="465" y="68" text-anchor="middle" class="beam-time" fill="var(--color-text-muted, #7a7772)">~15 min</text>

  <!-- Wrap-up -->
  <rect x="560" y="30" width="90" height="48" rx="4" fill="var(--color-action, #4a7a94)" opacity="0.15"/>
  <text x="605" y="50" text-anchor="middle" class="beam-label" fill="var(--color-action, #4a7a94)">Wrap-up</text>
  <text x="605" y="68" text-anchor="middle" class="beam-time" fill="var(--color-text-muted, #7a7772)">~5 min</text>

  <!-- Topic annotations below -->
  <text x="107" y="140" text-anchor="middle" class="beam-desc" fill="var(--color-text-muted, #7a7772)">Experience overview,</text>
  <text x="107" y="155" text-anchor="middle" class="beam-desc" fill="var(--color-text-muted, #7a7772)">spot anomalies</text>

  <text x="280" y="140" text-anchor="middle" class="beam-desc" fill="var(--color-text-secondary, #3d3a36)">Planned signal:</text>
  <text x="280" y="155" text-anchor="middle" class="beam-desc" fill="var(--color-text-secondary, #3d3a36)">system design depth</text>

  <text x="465" y="140" text-anchor="middle" class="beam-desc" fill="var(--color-text-secondary, #3d3a36)">Emergent signal:</text>
  <text x="465" y="155" text-anchor="middle" class="beam-desc" fill="var(--color-text-secondary, #3d3a36)">ambiguity handling</text>

  <text x="605" y="140" text-anchor="middle" class="beam-desc" fill="var(--color-text-muted, #7a7772)">Candidate</text>
  <text x="605" y="155" text-anchor="middle" class="beam-desc" fill="var(--color-text-muted, #7a7772)">questions</text>
</svg>
{{< /figure-svg >}}

**The broad scan.** Early conversations (or the opening of each interview) establish a baseline: where does this person's experience cluster, what's their general depth, how do they talk about their work? I'm doing **risk assessment** — building a low-resolution picture to spot where the terrain looks odd. A candidate's summary of how they led a migration might sound perfectly reasonable — but is that because they drove the technical decisions, or because they're narrating someone else's work? The broad scan tells me where to go deeper.

**The deep dives.** Some are predetermined. If technical leadership is my top signal, I planned for it. Others emerge from the broad scan. The candidate mentions a project that sounds like it went sideways, then pivots quickly. A claim on their resume doesn't match the depth of their answers. A description of cross-team work sounds polished. Maybe too polished. These are the oddly shaped features on my map, and spending a few extra minutes at higher resolution might change my read entirely.

**The pivots.** The hardest skill, and one that requires the most judgment. Mid-conversation, something shifts — I came in planning to probe technical design, but the candidate's answer opens a more interesting question about how they handle ambiguity. Do I follow that thread or stick to my plan? If I can redirect depth to the most valuable signal, I'm making much better use of my time.

I've definitely gotten this wrong before. I've walked out of interviews thinking "did I get any real signal?", plodding along with my planned questions, collecting low-resolution information across the board instead of committing to depth anywhere. These days, I focus. I might only get two or three pieces of signal in an interview, but I'll feel confident in each one.

---

## Designing for Signal

With signals and depth allocated, a couple habits have made a big difference for me in increasing signal output.

**Challenge Your Signal**

While I set up interviewers with different conversations, I like having some overlapping territory on competencies from different perspectives. Different interviewers will pull different threads from the same story; one focuses on technical decisions, another on leadership dynamics, another on how the candidate handles the parts that didn't go well.

This applies within a single interview too. When I form an early impression, my instinct is to spend the rest of the conversation confirming it. I've learned to fight that. A positive impression that survives a genuine search for counter-evidence is worth far more than one I never tested. And a negative impression that dissolves under scrutiny has saved me from passing on the right person more than once.

**Make the Conversation Flow**

I feel very strongly about this: making people feel at ease isn't just something I do to be polite. People give you far better signal when they're not anxious, defensive, or confused about what you're asking. An interview where topics build on each other, where I'm genuinely curious rather than checking boxes, gets the candidate to stop performing and start communicating.

---

## The Debrief Is Where It All Lands

Everything upstream exists in service of this moment: the signal definitions, the depth allocation, the deliberate choices about where to point the beam.

{{< figure-svg alt="Competency synthesis diagram showing how multiple interviewers assess overlapping competencies to build a composite confidence picture" caption="Each interviewer probes specific competencies. The debrief composites them — overlaps calibrate, gaps are acknowledged." >}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 340" width="720" height="340">
  <style>
    .synth-label { font-family: Texta, Helvetica, Arial, sans-serif; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; }
    .synth-name { font-family: Texta, Helvetica, Arial, sans-serif; font-size: 10px; }
    .synth-comp { font-family: Texta, Helvetica, Arial, sans-serif; font-size: 9px; font-weight: 700; letter-spacing: 0.03em; }
    .synth-detail { font-family: 'Newsreader', Georgia, serif; font-size: 10px; }
  </style>

  <!-- Individual interviewer reads -->
  <text x="150" y="20" text-anchor="middle" class="synth-label" fill="var(--color-text-secondary, #3d3a36)">Individual Reads</text>

  <!-- Interviewer 1: Technical Depth, Ownership, Communication -->
  <g transform="translate(16, 38)">
    <text x="0" y="12" class="synth-name" fill="var(--color-text-muted, #7a7772)">Interviewer 1</text>
    <rect x="0" y="20" width="280" height="36" rx="4" fill="var(--color-text-muted, #7a7772)" opacity="0.05"/>
    <rect x="4" y="24" width="88" height="28" rx="3" fill="var(--color-accent, #f29e0b)" opacity="0.30"/>
    <text x="48" y="42" text-anchor="middle" class="synth-comp" fill="var(--color-accent, #f29e0b)">Technical Depth</text>
    <rect x="96" y="24" width="72" height="28" rx="3" fill="var(--color-accent, #f29e0b)" opacity="0.25"/>
    <text x="132" y="42" text-anchor="middle" class="synth-comp" fill="var(--color-accent, #f29e0b)">Ownership</text>
    <rect x="172" y="24" width="88" height="28" rx="3" fill="var(--color-action, #4a7a94)" opacity="0.20"/>
    <text x="216" y="42" text-anchor="middle" class="synth-comp" fill="var(--color-action, #4a7a94)">Communication</text>
  </g>

  <!-- Interviewer 2: Ambiguity, Ownership, Cross-team Influence -->
  <g transform="translate(16, 108)">
    <text x="0" y="12" class="synth-name" fill="var(--color-text-muted, #7a7772)">Interviewer 2</text>
    <rect x="0" y="20" width="280" height="36" rx="4" fill="var(--color-text-muted, #7a7772)" opacity="0.05"/>
    <rect x="4" y="24" width="72" height="28" rx="3" fill="var(--color-accent, #f29e0b)" opacity="0.30"/>
    <text x="40" y="42" text-anchor="middle" class="synth-comp" fill="var(--color-accent, #f29e0b)">Ambiguity</text>
    <rect x="80" y="24" width="72" height="28" rx="3" fill="var(--color-accent, #f29e0b)" opacity="0.25"/>
    <text x="116" y="42" text-anchor="middle" class="synth-comp" fill="var(--color-accent, #f29e0b)">Ownership</text>
    <rect x="156" y="24" width="110" height="28" rx="3" fill="var(--color-action, #4a7a94)" opacity="0.20"/>
    <text x="211" y="42" text-anchor="middle" class="synth-comp" fill="var(--color-action, #4a7a94)">Cross-team Influence</text>
  </g>

  <!-- Interviewer 3: Technical Depth, Ambiguity, Process & Structure -->
  <g transform="translate(16, 178)">
    <text x="0" y="12" class="synth-name" fill="var(--color-text-muted, #7a7772)">Interviewer 3</text>
    <rect x="0" y="20" width="280" height="36" rx="4" fill="var(--color-text-muted, #7a7772)" opacity="0.05"/>
    <rect x="4" y="24" width="88" height="28" rx="3" fill="var(--color-accent, #f29e0b)" opacity="0.25"/>
    <text x="48" y="42" text-anchor="middle" class="synth-comp" fill="var(--color-accent, #f29e0b)">Technical Depth</text>
    <rect x="96" y="24" width="72" height="28" rx="3" fill="var(--color-action, #4a7a94)" opacity="0.20"/>
    <text x="132" y="42" text-anchor="middle" class="synth-comp" fill="var(--color-action, #4a7a94)">Ambiguity</text>
    <rect x="172" y="24" width="104" height="28" rx="3" fill="var(--color-accent, #f29e0b)" opacity="0.25"/>
    <text x="224" y="42" text-anchor="middle" class="synth-comp" fill="var(--color-accent, #f29e0b)">Process &amp; Structure</text>
  </g>

  <!-- Arrow -->
  <g transform="translate(316, 108)">
    <line x1="0" y1="48" x2="48" y2="48" stroke="var(--color-text-muted, #7a7772)" stroke-width="2"/>
    <polygon points="48,42 62,48 48,54" fill="var(--color-text-muted, #7a7772)"/>
  </g>

  <!-- Composite confidence -->
  <text x="540" y="20" text-anchor="middle" class="synth-label" fill="var(--color-text-secondary, #3d3a36)">Composite Confidence</text>

  <g transform="translate(390, 38)">
    <rect x="0" y="16" width="310" height="270" rx="6" fill="var(--color-text-muted, #7a7772)" opacity="0.04" stroke="var(--color-border, #eae7e1)" stroke-width="1"/>

    <!-- Calibrated: 2+ reads (orange) -->
    <rect x="8" y="24" width="294" height="36" rx="3" fill="var(--color-accent, #f29e0b)" opacity="0.28"/>
    <text x="155" y="38" text-anchor="middle" class="synth-comp" fill="var(--color-accent, #f29e0b)">Technical Depth</text>
    <text x="155" y="52" text-anchor="middle" class="synth-detail" fill="var(--color-accent, #f29e0b)">Calibrated — 2 reads, high confidence</text>

    <rect x="8" y="66" width="294" height="36" rx="3" fill="var(--color-accent, #f29e0b)" opacity="0.24"/>
    <text x="155" y="80" text-anchor="middle" class="synth-comp" fill="var(--color-accent, #f29e0b)">Ownership</text>
    <text x="155" y="94" text-anchor="middle" class="synth-detail" fill="var(--color-accent, #f29e0b)">Calibrated — 2 reads, high confidence</text>

    <rect x="8" y="108" width="294" height="36" rx="3" fill="var(--color-accent, #f29e0b)" opacity="0.20"/>
    <text x="155" y="122" text-anchor="middle" class="synth-comp" fill="var(--color-accent, #f29e0b)">Ambiguity</text>
    <text x="155" y="136" text-anchor="middle" class="synth-detail" fill="var(--color-accent, #f29e0b)">Calibrated — 2 reads, high confidence</text>

    <!-- Single read (blue) -->
    <rect x="8" y="152" width="294" height="36" rx="3" fill="var(--color-action, #4a7a94)" opacity="0.18"/>
    <text x="155" y="166" text-anchor="middle" class="synth-comp" fill="var(--color-action, #4a7a94)">Communication</text>
    <text x="155" y="180" text-anchor="middle" class="synth-detail" fill="var(--color-action, #4a7a94)">Single read — moderate confidence</text>

    <rect x="8" y="194" width="294" height="36" rx="3" fill="var(--color-action, #4a7a94)" opacity="0.15"/>
    <text x="155" y="208" text-anchor="middle" class="synth-comp" fill="var(--color-action, #4a7a94)">Cross-team Influence</text>
    <text x="155" y="222" text-anchor="middle" class="synth-detail" fill="var(--color-action, #4a7a94)">Single read — moderate confidence</text>

    <rect x="8" y="236" width="294" height="36" rx="3" fill="var(--color-action, #4a7a94)" opacity="0.15"/>
    <text x="155" y="250" text-anchor="middle" class="synth-comp" fill="var(--color-action, #4a7a94)">Process &amp; Structure</text>
    <text x="155" y="264" text-anchor="middle" class="synth-detail" fill="var(--color-action, #4a7a94)">Single read — moderate confidence</text>
  </g>
</svg>
{{< /figure-svg >}}

"I liked them" and "something felt off" has come up at one point or another with every group of interviewers I've worked with. They're fine as starting points. But I've learned to push past them fast: what specifically did you observe? "They struggled with system design" isn't super useful. "They defaulted to a monolithic approach, didn't consider failure modes until I prompted them, but course-corrected quickly with strong first-principles reasoning" is a high resolution data point a group can work with.

The best debriefs I've been in usually have one thing in common: people are honest about where they have depth and where they don't. In one, an interviewer flagged that she hadn't gotten signal on metrics-driven decision-making for an engineering manager candidate. Rather than treat that as a gap to worry about, we mapped back to what we actually needed: logical consistency, tough calls with data, structured problem-solving. That signal was scattered across other interviews — ownership from the leadership round, goal decomposition from the process round. We composited it and made a confident hire, one of the best managers I've brought on.

What I'm after is **reproducible decisions** — if I ran the same candidate through again with different interviewers, would we land in a similar place? That's only possible if my interviewers are calibrated. I've seen "strong signal on system design" mean completely different things to different people in the same debrief. The only fix I've found is ongoing: shadow each other, compare notes on the same candidate, talk about what you're seeing and why. Not to make everyone agree — different perspectives are the whole point — but so that when we composite the picture, we're actually working from commensurable data.

---

## Back to the Ship

There's one more step most people skip: checking the map against reality.

When a hire works out, I look back at what the process predicted. When one doesn't, I do the same. The feedback cycle is long, the data is messy, and clean attribution is rare. But even rough pattern-matching over time has taught me which of my signals were actually predictive and which were noise that felt like signal.

{{< figure-svg alt="Feedback loop: define signals, interview, debrief and decide, observe outcomes, repeat" caption="Each decision sharpens the next one." >}}
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 260" width="480" height="260">
  <style>
    .loop-label { font-family: Texta, Helvetica, Arial, sans-serif; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; }
    .loop-num { font-family: 'Office Code Pro', monospace; font-size: 10px; }
  </style>

  <!-- Node 1: Define Signals (top) -->
  <rect x="168" y="16" width="144" height="44" rx="22" fill="var(--color-text-muted, #7a7772)" opacity="0.08" stroke="var(--color-text-secondary, #3d3a36)" stroke-width="1.5"/>
  <text x="240" y="35" text-anchor="middle" class="loop-num" fill="var(--color-text-muted, #7a7772)">1</text>
  <text x="240" y="50" text-anchor="middle" class="loop-label" fill="var(--color-text-secondary, #3d3a36)">Define Signals</text>

  <!-- Node 2: Interview (right) -->
  <rect x="336" y="108" width="128" height="44" rx="22" fill="var(--color-text-muted, #7a7772)" opacity="0.08" stroke="var(--color-text-secondary, #3d3a36)" stroke-width="1.5"/>
  <text x="400" y="127" text-anchor="middle" class="loop-num" fill="var(--color-text-muted, #7a7772)">2</text>
  <text x="400" y="142" text-anchor="middle" class="loop-label" fill="var(--color-text-secondary, #3d3a36)">Interview</text>

  <!-- Node 3: Debrief & Decide (bottom) -->
  <rect x="152" y="200" width="176" height="44" rx="22" fill="var(--color-text-muted, #7a7772)" opacity="0.08" stroke="var(--color-text-secondary, #3d3a36)" stroke-width="1.5"/>
  <text x="240" y="219" text-anchor="middle" class="loop-num" fill="var(--color-text-muted, #7a7772)">3</text>
  <text x="240" y="234" text-anchor="middle" class="loop-label" fill="var(--color-text-secondary, #3d3a36)">Debrief &amp; Decide</text>

  <!-- Node 4: Observe Outcomes (left) -->
  <rect x="16" y="108" width="144" height="44" rx="22" fill="var(--color-text-muted, #7a7772)" opacity="0.08" stroke="var(--color-text-secondary, #3d3a36)" stroke-width="1.5"/>
  <text x="88" y="127" text-anchor="middle" class="loop-num" fill="var(--color-text-muted, #7a7772)">4</text>
  <text x="88" y="142" text-anchor="middle" class="loop-label" fill="var(--color-text-secondary, #3d3a36)">Observe Outcomes</text>

  <!-- Arrow 1→2 (top-right) -->
  <path d="M312,50 Q360,60 370,108" fill="none" stroke="var(--color-text-muted, #7a7772)" stroke-width="1.5"/>
  <polygon points="366,106 372,116 376,104" fill="var(--color-text-muted, #7a7772)"/>

  <!-- Arrow 2→3 (bottom-right) -->
  <path d="M370,152 Q360,190 328,210" fill="none" stroke="var(--color-text-muted, #7a7772)" stroke-width="1.5"/>
  <polygon points="330,206 324,216 336,214" fill="var(--color-text-muted, #7a7772)"/>

  <!-- Arrow 3→4 (bottom-left) -->
  <path d="M152,210 Q120,190 110,152" fill="none" stroke="var(--color-text-muted, #7a7772)" stroke-width="1.5"/>
  <polygon points="106,154 108,142 114,152" fill="var(--color-text-muted, #7a7772)"/>

  <!-- Arrow 4→1 (top-left) — EMPHASIZED feedback connection -->
  <path d="M110,108 Q120,60 168,42" fill="none" stroke="var(--color-accent, #f29e0b)" stroke-width="3"/>
  <polygon points="166,36 174,36 168,48" fill="var(--color-accent, #f29e0b)"/>
</svg>
{{< /figure-svg >}}

I'll never have complete information about a candidate. Nobody will. But I've gotten better at being honest about that uncertainty — building processes that make the best use of limited data, and closing the loop so each decision sharpens the next one. Not perfection. Repeatability.
