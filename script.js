function buildPrompt() {
    const task = document.getElementById("task").value.trim();
    const persona = document.getElementById("persona").value.trim();
    const format = document.getElementById("format").value.trim();
    const tone = document.getElementById("tone").value.trim();
    const context = document.getElementById("context").value.trim();
    const constraints = document.getElementById("constraints").value.trim();
    const referencesText = document.getElementById("references").value.trim();
    const references = referencesText ? referencesText.split("\n") : [];

    let parts = [];

    if (task) {
        let taskBlock = `<Task>\n  <Instruction>${task}</Instruction>`;
        if (persona) taskBlock += `\n  <Persona>${persona}</Persona>`;
        if (format) taskBlock += `\n  <Format>${format}</Format>`;
        if (tone) taskBlock += `\n  <Tone>${tone}</Tone>`;
        taskBlock += `\n</Task>`;
        parts.push(taskBlock);
    }

    if (context || constraints) {
        let ctxBlock = `<Context>`;
        if (context) ctxBlock += `\n  <Background>${context}</Background>`;
        if (constraints) ctxBlock += `\n  <Constraints>${constraints}</Constraints>`;
        ctxBlock += `\n</Context>`;
        parts.push(ctxBlock);
    }

    if (references.length > 0) {
        let refBlock = "<References>\n";
        references.forEach((ref, i) => {
            refBlock += `  <Example id="${i + 1}">${ref}</Example>\n`;
        });
        refBlock += "</References>";
        parts.push(refBlock);
    }

    const result = parts.join("\n\n");
    const output = document.getElementById("output");
    output.textContent = result;

    // Auto-adjust height by content
    output.style.height = "auto";
    output.style.height = output.scrollHeight + "px";
}

function copyOutput() {
    const output = document.getElementById("output").textContent;
    if (!output) {
        console.log("Nothing to copy yet! Generate a prompt first.");
        return;
    }
    navigator.clipboard.writeText(output)
        .then(() => console.log("Prompt copied to clipboard ✅"))
        .catch(() => console.log("Failed to copy ❌"));
}
