# DOMAIN_school_assignments.md — Context File for Claude

## Background & Scope
Specific DigiPen school assignments ranging from low-level C programming to complex C++ data structures and CI/CD pipelines. Engagement is usually under time pressure or for debugging failed test cases.

## Knowledge Level & Progression
- **Starting level:** Learning C standard library macros (`ULONG_MAX`, `sizeof`).
- **Key milestones:** Successful implementation of a file splitter/joiner and Matrix proxy class.
- **Current level:** Configuring Jenkins automated builds and implementing Dijkstra's algorithm.

## Key Decisions Made
- [2024-09-18] — DECISION: Buffer size must be exactly 4096 bytes. — RATIONALE: Requirement for the splitter assignment; failure to follow results in a zero grade.
- [2025-11-07] — DECISION: `Greater` template for sorting must not use `auto` or standard library headers. — RATIONALE: Assignment constraint.

## Active Projects & Threads
**PROJECT: Dijkstra's Algorithm Implementation**
Status: Completed [inferred]
Summary: Implementing shortest path calculations with negative edge handling.
Last active: 2025-03-13

**PROJECT: Jenkins CI/CD Setup**
Status: Active
Summary: Setting up daily SCM polling and multi-configuration builds for SliceEngine.
Last active: 2026-02-21

## Domain-Specific Preferences & Instructions
- **No Caps Documentation:** "document the important lines in my style of documentation (no caps, short and terse explanations of each line)" [2025-06-21].
- **Anti-Plagiarism:** Frequently requests renaming of variables and functions to avoid detection when looking at classmates' work. [2025-06-21]

## Recurring Questions & Unresolved Threads
- **Jenkins Terminal Access** — Difficulty knowing which terminal to use for testing builds from VS2022. [2026-01-30]

## Useful References Mentioned
- DigiPen Course CSD 2126.
- VPL (Virtual Programming Lab) environment.

## Notes for Claude
- The user is often under strict constraints (e.g., "no auto", "no standard headers"). Always check for these.
- Be very specific with step-by-step terminal instructions for CI/CD tasks.
