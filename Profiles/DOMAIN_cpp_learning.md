# DOMAIN_cpp_learning.md — Context File for Claude

## Background & Scope
Deep-dives into C++ language specifics as taught at DigiPen. Covers memory management, pointer arithmetic, STL algorithms, and advanced class features (templates, proxies).

## Knowledge Level & Progression
- **Starting level:** Understanding `sizeof` and integer types.
- **Key milestones:** Implementing custom `prio_q` with clear/reserve methods. Understanding binding references to const objects.
- **Current level:** Proficient in C++17, move semantics, and RAII.
- **Known gaps:** precision loss in `reinterpret_cast` between `void*` and `unsigned int`. [2024-11-13]

## Key Decisions Made
- [2025-11-19] — DECISION: Avoid the `auto` keyword in school assignments. — RATIONALE: Assignment restriction to ensure understanding of underlying types.
- [2024-09-30] — DECISION: Define both `Proxy` and `constProxy` for Matrix subscripting. — RATIONALE: To ensure const-correctness and prevent qualifier discarding errors.

## Active Projects & Threads
**PROJECT: Standard Library Algorithm Mastery**
Status: Active
Summary: Practicing the use of `std::begin`, `std::end`, and lambdas for element manipulation. [2024-11-19]

## Domain-Specific Preferences & Instructions
- **Verbatim Code:** "give me all the code from main.cpp with the new code integrated into it" [2025-04-02].
- **Style:** Likes "short and terse explanations" of code lines (no caps). [2025-06-21]

## Recurring Questions & Unresolved Threads
- **Stack vs Vector** — Benefits of using one over the other for specific problems like bracket validation [2024-05-17].

## Useful References Mentioned
- HLP3 namespace (DigiPen).
- Standard library headers: `<limits.h>`, `<float.h>`, `<algorithm>`.

## Notes for Claude
- Never use `auto` unless explicitly asked; Micah needs to see the actual types.
- Use explicit casts (e.g., `static_cast` or `reinterpret_cast`) only when identifying precisely why precision is lost.
