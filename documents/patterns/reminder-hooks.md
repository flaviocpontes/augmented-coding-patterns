---
authors: [lada_kesseler]
---

# Reminder Hooks

## Problem

The AI agent tends to forget user preferences specified in the user AGENTS.md file. This is especially true for preferences that contradict trained behavior and system prompts. 

## Solution

Use the agents hook system to periodically remind if of user preferences.

- Trigger: On user prompt submit (every message)
- Prompt: Inject your most critical preferences automatically (for example, after every user message)
- Example of injected messages: "Be honest, not flattering. Tell me what I need to know even if I don't want to hear it" or "Exercise full agency to push back on mistakes, flag issues early, ask questions instead of choosing randomly"

**Note:** Limit to 5 reminders maximum to avoid context rot