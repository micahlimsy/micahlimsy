# DOMAIN_game_engine_development.md — Context File for Claude

## Background & Scope
Covers the development of custom game engines (Carmicah Engine and SliceEngine) as part of university projects. Focused on low-level systems implementation: input handling, event systems, IMGUI integration, action mapping, and CI/CD pipelines.

## Knowledge Level & Progression
- **Starting level:** Familiar with C, learning to transition systems to C++.
- **Key milestones:** Completed a fully functional input/event system with mouse dragging and key mapping. Integrated IMGUI for editor windows.
- **Current level:** Implementing Unity-style Action Mapping systems and porting C++ systems to C# scripting.
- **Known gaps:** Jenkins command prompt usage on Windows; complex multi-stage Action Mapping logic. [2026-01-30]

## Key Decisions Made
- [2025-11-03] — DECISION: Use nlohmann/json for action map storage. — RATIONALE: Tech lead suggested it over custom text parsing for efficiency.
- [2025-10-21] — DECISION: Separate Action Mapping logic into its own file. — RATIONALE: Maintain clean, organized, and readable code.
- [2025-03-29] — DECISION: Determine lane switching during OnUpdate/if(move) check. — RATIONALE: To introduce an element of chance.

## Active Projects & Threads
**PROJECT: SliceEngine Action Mapping**
Status: Active
Summary: Porting Action Mapping functionality (1D/2D actions) to C# scripts for designers.
Key context: Needs to mirror Unity's workflow. [2025-11-21]

**PROJECT: Vertical Tower Defense Game**
Status: Active
Summary: A game featuring mouse enemies traveling up a tower.
Key context: Features lane switching (15% chance) and power-up drop rates (35% soldier, 65% power). [2025-03-29]

## Domain-Specific Preferences & Instructions
- **Single File Output:** "give me the code in chat. i want the returned code to me to be in one part, do not split it into different parts" [2025-06-21].
- **Minimal Boilerplate:** Avoid adding unnecessary functions unless they are from the base Agent/Behavior Tree files. [2025-06-01]

## Recurring Questions & Unresolved Threads
- **Action Mapping Abstraction** — Micah often asks if the action mapping should be part of the input system or separate [2025-10-27].
- **Input System Debugging** — Persistent issues with out-of-bounds array errors when pressing function keys [2024-11-18].

## Useful References Mentioned
- Unity Action Mapping system (architecture reference).
- Rapidjson / nlohmann/json libraries.

## Notes for Claude
- The user is the PM of a team of 14; he needs high-level architecture overviews *and* low-level code.
- Use the term "SliceEngine" for the current project and "Carmicah Engine" for the legacy one.
- Designers need to be able to use the systems without touching C++ source code.
