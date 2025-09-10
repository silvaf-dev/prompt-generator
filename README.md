# 📝 Prompt Generator

A web-based tool to design structured prompts with clarity and consistency.  
Inspired by Google’s [Prompting Essentials Specialization](https://www.coursera.org/specializations/prompting-essentials-google), this app helps you quickly create, format, and refine prompts for LLMs using a flexible template.  

## 🚀 Features 
- **Task definition**: Write your instruction, persona, and desired output format.
- **Context builder**: Add background and constraints for precision.
- **References support**: Include one-shot, few-shot, or guiding examples.
- **Instant output**: Generate a well-structured prompt in XML-style blocks.
- **Copy to clipboard**: One click and your prompt is ready to paste into your LLM.
- **Responsive design**: Works smoothly on desktop and mobile.

## 📂 Project Structure
- `index.html` → Main app (all-in-one, no external dependencies).
- `styles.css` → Clean, responsive UI.
- `script.js` → Handles prompt generation & copy functionality.

## 💡 Example Output
Input:
```
Task: Suggest 5 career paths for me that will keep me relevant for the next 10 years.
Persona: As an expert career advisor.
Format: Bulleted list.
Context: Based on what you know about me so far.
Constraints: Do not suggest anything AI-related.
```

Generated:
```xml
<Task>
  <Instruction>Suggest 5 career paths for me that will keep me relevant for the next 10 years.</Instruction>
  <Persona>As an expert career advisor.</Persona>
  <Format>Bulleted list</Format>
</Task>

<Context>
  <Background>Based on what you know about me so far.</Background>
  <Constraints>Do not suggest anything AI-related.</Constraints>
</Context>
```

## 🛠️ Getting Started
1. Clone the repo:
   ```bash
   git clone https://github.com/silvaf-dev/prompt-generator.git
   cd prompt-generator
   ```
2. Open `index.html` in your browser.  
   *(No build step, no dependencies — pure HTML, CSS, JS)*

## 🌟 Why Prompt Generator?
Crafting good prompts is half science, half art.  
Prompt Generator gives you a **repeatable framework** to move from vague instructions to **clear, testable, and reusable** prompts.

Mnemonic reminder: **T**houghtfully **C**reate **R**eally **E**xcellent **I**nputs ✅

## 📜 License
MIT — free to use, modify, and share.
