const STORAGE_KEY = "todo-list-items";

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const emptyState = document.querySelector("#empty-state");
const remainingCount = document.querySelector("#remaining-count");
const clearCompletedButton = document.querySelector("#clear-completed");

let todos = loadTodos();

// 從瀏覽器儲存空間讀取先前的待辦事項。
function loadTodos() {
  try {
    const savedTodos = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(savedTodos) ? savedTodos : [];
  } catch (error) {
    return [];
  }
}

// 儲存目前清單，讓重新整理後資料仍然存在。
function saveTodos() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

// 將待辦資料重新繪製到畫面上，避免操作後畫面與資料不同步。
function renderTodos() {
  todoList.replaceChildren();

  todos.forEach((todo) => {
    const listItem = document.createElement("li");
    listItem.className = `todo-item${todo.completed ? " completed" : ""}`;

    const checkbox = document.createElement("input");
    checkbox.className = "todo-checkbox";
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.setAttribute("aria-label", `標記「${todo.text}」為完成`);
    checkbox.addEventListener("change", () => toggleTodo(todo.id));

    const text = document.createElement("span");
    text.className = "todo-text";
    text.textContent = todo.text;

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.type = "button";
    deleteButton.textContent = "刪除";
    deleteButton.setAttribute("aria-label", `刪除「${todo.text}」`);
    deleteButton.addEventListener("click", () => deleteTodo(todo.id));

    listItem.append(checkbox, text, deleteButton);
    todoList.append(listItem);
  });

  const incompleteCount = todos.filter((todo) => !todo.completed).length;
  const hasCompletedTodos = todos.some((todo) => todo.completed);
  remainingCount.textContent = `未完成：${incompleteCount} 項`;
  emptyState.hidden = todos.length > 0;
  clearCompletedButton.hidden = !hasCompletedTodos;
}

function addTodo(text) {
  todos.push({
    id: crypto.randomUUID
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random()}`,
    text,
    completed: false,
  });
  saveTodos();
  renderTodos();
}

function toggleTodo(todoId) {
  todos = todos.map((todo) =>
    todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
  );
  saveTodos();
  renderTodos();
}

function deleteTodo(todoId) {
  todos = todos.filter((todo) => todo.id !== todoId);
  saveTodos();
  renderTodos();
}

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = todoInput.value.trim();

  // 空白內容不應該建立沒有意義的待辦事項。
  if (!text) {
    todoInput.focus();
    return;
  }

  addTodo(text);
  todoInput.value = "";
  todoInput.focus();
});

clearCompletedButton.addEventListener("click", () => {
  todos = todos.filter((todo) => !todo.completed);
  saveTodos();
  renderTodos();
});

renderTodos();
