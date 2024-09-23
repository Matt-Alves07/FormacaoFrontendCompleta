/* Elements */
const addNoteBtn = document.querySelector(".add-note");
const exportBtn = document.querySelector("#export-notes");
const noteInput = document.querySelector("#note-content");
const searchInput = document.querySelector("#search-input");
const notesContainer = document.querySelector("#notes-container");

/* Functions */
const getNotes = () => {
    let result = JSON.parse(localStorage.getItem("notes") || "[]");

    const hasFixedNotes = result.some(note => note.fixed);

    const orderedResult = hasFixedNotes
        ? result.sort((a, b) => (a.fixed === b.fixed ? 0 : a.fixed ? -1 : 1))
        : result.sort((a, b) => a.id - b.id);

    if (orderedResult)
        localStorage.setItem("notes", JSON.stringify(orderedResult));

    return orderedResult;
}

const addNote = () => {
    if (!noteInput.value)
        return;

    const notes = getNotes();

    const noteObject = {
        id: generateId(notes),
        content: noteInput.value,
        fixed: false
    }

    const noteElement = createNote(noteObject.id, noteObject.content);
    notesContainer.appendChild(noteElement);

    notes.push(noteObject);

    saveNotes(notes);

    noteInput.value = "";
    noteInput.focus();
}

const generateId = (notes) => {
    if (!notes)
        return 1;

    return notes.length > 0 ? Math.max(...notes.map(note => note.id)) + 1 : 1;
}

const createNote = (id, content, fixed = false) => {
    const element = document.createElement("div");
    element.classList.add("note");
    if (fixed)
        element.classList.add("fixed");

    const textArea = document.createElement("textarea");
    textArea.value = content;
    textArea.placeholder = "Adicione algum texto...";
    element.appendChild(textArea);

    /* Note text changed event */
    element
        .querySelector("textarea")
        .addEventListener("keyup", (e) => {
            const noteContent = e.target.value;
            updateNoteContent(id, noteContent);
        });

    const pinIcon = document.createElement("i");
    pinIcon.classList.add(...["bi", "bi-pin"]);
    element.appendChild(pinIcon);

    /* Pin icon click event */
    element
        .querySelector(".bi-pin")
        .addEventListener("click", () => toggleFixed(id));

    const removeIcon = document.createElement("i");
    removeIcon.classList.add(...["bi", "bi-x-circle"]);
    element.appendChild(removeIcon);

    /* Remove icon click event */
    element
        .querySelector(".bi-x-circle")
        .addEventListener("click", () => removeNote(id, element));

    const doubleIcon = document.createElement("i");
    doubleIcon.classList.add(...["bi", "bi-file-earmark-plus"]);
    element.appendChild(doubleIcon);

    /* Duplicate icon click event */
    element
        .querySelector(".bi-file-earmark-plus")
        .addEventListener("click", () => duplicateNote({id, content, fixed}, element));

    return element;
}

const saveNotes = (notes) => {
    localStorage.setItem("notes", JSON.stringify(notes));
}

const loadNotes = (notesList) => {
    const notes = notesList ? notesList : getNotes();

    console.log(notes);

    notesContainer.innerHTML = "";

    notes.forEach((note) => {
        const noteElement = createNote(note.id, note.content, note.fixed);
        notesContainer.appendChild(noteElement);
    });
}

const toggleFixed = (id) => {
    const notes = getNotes();
    if (notes.length === 0)
        return;

    notes.forEach((note) => {
        if (note.id === id)
            note.fixed = !note.fixed;
    });

    saveNotes(notes);
    loadNotes();
}

const removeNote = (id, element) => {
    const filteredNotes = getNotes().filter((note) => note.id !== id);
    saveNotes(filteredNotes);

    notesContainer.removeChild(element);
}

const duplicateNote = (note, element) => {
    const notes = getNotes();
    const newNote = {
        id: generateId(notes),
        content: note.content,
        fixed: note.fixed
    };

    notes.push(newNote);
    saveNotes(notes);
    
    const noteElement = createNote(newNote.id, newNote.content, newNote.fixed);
    notesContainer.appendChild(noteElement)
}

const updateNoteContent = (id, textContent) => {
    const notes = getNotes()
    if (!notes)
        return;

    const targetNote = notes.filter((note) => note.id === id)[0];
    if (!targetNote)
        return;

    targetNote.content = textContent;
    saveNotes(notes);
}

const searchNotes = (searchContent) => {
    const notes = getNotes();
    if (searchContent === "") {
        loadNotes(notes);
        return;
    }

    const filteredNotes = notes.filter(note =>
        note.content.toLowerCase().includes(searchContent.toLowerCase())
    );

    loadNotes(filteredNotes);
}

const exportNotes = () => {
    const notes = getNotes();
    if (!notes)
        return;

    const csvHeader = "id,content,fixed\n";
    const csvRows = notes.map((note) => {
        return `${note.id},"${note.content}",${note.fixed}`;
    }).join("\n");

    const csvContent = csvHeader + csvRows;
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "notas.csv");
    link.style.visibility = 'hidden';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

/* Events */
addNoteBtn.addEventListener("click", () => addNote());

searchInput.addEventListener("keyup", (e) => {
    const searchContent = e.target.value;

    searchContent === ""
        ? loadNotes()
        : searchNotes(searchContent);
})

exportBtn.addEventListener("click", () => exportNotes());

/* Inicialization */
loadNotes();