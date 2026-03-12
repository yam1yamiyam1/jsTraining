/* ========================================
       CHAOTIC API DATA (LEVEL 1: SAFE NAVIGATION)
       ======================================== */

const SAMPLE_TASKS = [
  {
    id: 1,
    title: 'Complete quarterly report',
    description: 'Finish Q4 2024 financial analysis',
    priority: 'high',
    assignee: { name: 'Alice Johnson', email: 'alice@company.com' },
    dueDate: '2024-12-15',
    completed: false,
    metadata: { department: 'Finance', estimatedHours: 8 },
  },
  {
    id: 2,
    title: 'Fix critical bug in production',
    priority: 'urgent',
    // Missing description, assignee, dueDate - TEST SAFE NAVIGATION!
    completed: false,
  },
  {
    id: 3,
    title: 'Update documentation',
    description: null, // Null description
    priority: 'low',
    assignee: null, // Null assignee
    completed: true,
    metadata: {}, // Empty metadata
  },
  {
    id: 4,
    // Missing title! Edge case
    priority: 'normal',
    assignee: { name: 'Bob Smith' }, // No email
    completed: false,
  },
  {
    id: 5,
    title: 'Review pull requests',
    description: '',
    priority: 'normal',
    assignee: { name: null, email: 'dev@company.com' }, // Null name
    dueDate: '',
    completed: false,
  },
];

/* ========================================
       STATE & GLOBALS
       ======================================== */

let state = {
  tasks: [
    {
      id: 1,
      title: 'tes1',
      description: 'Finish Q4 2024 financial analysis',
      priority: 'high',
      assignee: { name: 'Alice Johnson', email: 'alice@company.com' },
      dueDate: '2024-12-15',
      completed: false,
      metadata: { department: 'Finance', estimatedHours: 8 },
    },
    {
      id: 2,
      title: 'tes2',
      description: 'Finish Q4 2024 financial analysis',
      priority: 'high',
      assignee: { name: 'Alice Johnson', email: 'alice@company.com' },
      dueDate: '2024-12-15',
      completed: false,
      metadata: { department: 'Finance', estimatedHours: 8 },
    },
  ],
  selectedTaskIds: [],
  filters: {
    priorities: [],
    showActive: true,
    showCompleted: false,
  },
  sessionStartTime: Date.now(),
  timerInterval: null,
};

let leakCount = 0;
const activeListeners = new Set();

/* ========================================
       TODO 1: SAFE DATA ACCESS HELPERS
       ======================================== */

// TODO 1.1: Create helper to safely get task title
// Must return 'Untitled Task' if title is null/undefined/empty string
function getTaskTitle({ title }) {
  return title || 'Untitled Task';
}

// TODO 1.2: Create helper to safely get assignee name
// Must return 'Unassigned' if no assignee or assignee.name is missing
function getAssigneeName({ assignee }) {
  // YOUR CODE HERE
  return assignee?.name || 'Unassigned';
}

// TODO 1.3: Create helper to safely get description
// Must return 'No description provided' if missing/null/empty
function getDescription({ description }) {
  // YOUR CODE HERE
  return description || 'No description provided';
}

// TODO 1.4: Create helper to format due date
// Must return 'No due date' if missing, otherwise format as readable date
function formatDueDate({ dueDate }) {
  // YOUR CODE HERE
  return dueDate || 'No due date';
}

/* ========================================
       TODO 2: FORM SUBMISSION (LEVEL 2: PREVENTDEFAULT)
       ======================================== */

// TODO 2.1: Handle add task form submission
// MUST prevent page reload
// MUST validate required fields
// MUST clear form after successful add
function handleAddTaskSubmit(e) {
  // YOUR CODE HERE
  // Remember: e.preventDefault() FIRST!
  e.preventDefault();

  const today = new Date().toISOString().split('T')[0];
  const data = new FormData(e.target);
  let formValues = Object.fromEntries(data);

  if (!formValues.title || formValues.title.length < 5) {
    alert('Error: Task Title must be at least 5 characters long.');
    document.getElementById('taskTitle').focus();
    return;
  }
  if (!formValues.description) {
    alert('Error: Please enter a Description.');
    document.getElementById('taskDescription').focus();
    return;
  }
  if (formValues.description.length > 200) {
    alert('Error: Description is too long. Keep it under 200 characters.');
    document.getElementById('taskDescription').focus();
    return;
  }
  if (!formValues.assignee) {
    alert('Error: Please enter an Assignee.');
    document.getElementById('taskAssignee').focus();
    return;
  }
  if (!formValues.dueDate) {
    alert('Error: Please enter an Due Date.');
    document.getElementById('taskDueDate').focus();
    return;
  }
  if (formValues.dueDate < today) {
    alert('Error: Due Date must be the current or a future date.');
    document.getElementById('taskDueDate').focus();
    return;
  }
  formValues.title =
    formValues.title[0].toUpperCase() + formValues.title.slice(1);
  document.getElementById('taskTitle').value = formValues.title;
  formValues.assignee = { name: formValues.assignee };
  state = {
    tasks: [
      ...state.tasks,
      {
        id: state.tasks.length + 1,
        ...formValues,
        completed: false,
        metadata: {},
      },
    ],
  };
  e.target.reset();
}

// TODO 2.2: Handle form reset
// MUST prevent default reset behavior
// MUST ask for confirmation before clearing
function handleFormReset(e) {
  // YOUR CODE HERE
  e.preventDefault();
  e.target.closest('#addTaskForm').reset();
}

/* ========================================
       TODO 3: TIMER MANAGEMENT (LEVEL 3: CLEANUP)
       ======================================== */

// TODO 3.1: Start session timer
// MUST update display every second
// MUST clean up old interval before starting new one
// MUST store interval ID in state for cleanup
function startTimer() {
  // YOUR CODE HERE
  // Format: HH:MM:SS
  if (state.timerInterval) {
    clearInterval(state.timerInterval);
  }
  let second = 0;
  let minute = 0;
  let hour = 0;
  state.timerInterval = setInterval(() => {
    second++;
    if (second > 59) {
      second = 0;
      minute++;
      if (minute > 59) {
        minute = 0;
        hour++;
      }
    }
    const hh = String(hour).padStart(2, '0');
    const mm = String(minute).padStart(2, '0');
    const ss = String(second).padStart(2, '0');
    document.getElementById('timerDisplay').textContent = `${hh}:${mm}:${ss}`;
  }, 1000);
}
startTimer();
// TODO 3.2: Stop and cleanup timer
// MUST clear interval
// MUST set state.timerInterval to null
function stopTimer() {
  clearInterval(state.timerInterval);
  state.timerInterval = null;
}

// TODO 3.3: Reset timer
// MUST stop existing timer
// MUST reset start time
// MUST restart timer
function resetTimer() {
  stopTimer();
  document.getElementById('timerDisplay').textContent = `00:00:00`;
  startTimer();
}

document.getElementById('taskList').innerHTML = Object.entries(state.tasks).map(
  (t) => {
    return `
  <div class="task-card" data-task-id="##">
    <div class="task-header">
      <div class="task-title">${t.title}</div>
      <div class="task-meta">
        <span>👤 Name</span>
        <span>📅 Date</span>
      </div>
    </div>
    <div class="task-description">Description</div>
    <div class="task-footer">
      <div class="task-tags">
        <span class="tag tag-high">HIGH</span>
      </div>
      <div class="task-actions">
        <button class="btn-primary" data-action="complete">Complete</button>
        <button class="btn-secondary" data-action="view">View</button>
        <button class="btn-danger" data-action="delete">Delete</button>
      </div>
    </div>
  </div>
`;
  }
);

/* ========================================
       TODO 4: EVENT DELEGATION (LEVEL 3: DELEGATION)
       ======================================== */

// TODO 4.1: Setup task list event delegation
// MUST attach ONE listener to parent (#taskList)
// MUST handle clicks on:
//   - Task card (select/deselect)
//   - Complete button
//   - Delete button
//   - View details button
// MUST use e.target.closest() to find elements
function setupTaskListDelegation(e) {
  // YOUR CODE HERE
  // Hint: Use data-task-id and data-action attributes
  e.stopPropagation();
  console.log(e.currentTarget);
}

/* ========================================
       TODO 5: MODAL MANAGEMENT (LEVEL 3: CLEANUP)
       ======================================== */

// TODO 5.1: Open modal with task details
// MUST add document-level click listener (click outside to close)
// MUST add document-level keydown listener (Escape to close)
// MUST track these listeners for cleanup
function openTaskModal(taskId) {
  // YOUR CODE HERE
  // Remember: Named functions for listeners!
}

// TODO 5.2: Close modal and cleanup listeners
// MUST remove ALL document-level listeners
// MUST clear listener tracking
function closeTaskModal() {
  // YOUR CODE HERE
  // This is CRITICAL - memory leak if not done!
}

/* ========================================
       TODO 6: FILTER MANAGEMENT
       ======================================== */

// TODO 6.1: Handle priority filter changes
// MUST use event delegation on #priorityFilters
// MUST update state.filters.priorities array
function setupPriorityFilters() {
  // YOUR CODE HERE
}

// TODO 6.2: Handle status filter changes
// MUST listen to both checkboxes
// MUST update state.filters.showActive and showCompleted
function setupStatusFilters() {
  // YOUR CODE HERE
}

// TODO 6.3: Filter tasks based on current filters
// MUST handle all filter combinations
// MUST safely access task properties
function getFilteredTasks() {
  // YOUR CODE HERE
  return state.tasks; // Replace with actual filtering
}

/* ========================================
       TODO 7: TASK OPERATIONS
       ======================================== */

// TODO 7.1: Add new task
// MUST generate unique ID
// MUST add to state.tasks immutably
// MUST re-render
function addTask(taskData) {
  // YOUR CODE HERE
}

// TODO 7.2: Toggle task completion
// MUST update immutably
// MUST re-render
function toggleTaskCompletion(taskId) {
  // YOUR CODE HERE
}

// TODO 7.3: Delete task
// MUST remove from state.tasks immutably
// MUST remove from selectedTaskIds if present
// MUST re-render
function deleteTask(taskId) {
  // YOUR CODE HERE
}

// TODO 7.4: Delete selected tasks
// MUST delete all tasks in state.selectedTaskIds
// MUST clear selection after deletion
function deleteSelectedTasks() {
  // YOUR CODE HERE
}

// TODO 7.5: Toggle task selection
// MUST add/remove from state.selectedTaskIds immutably
// MUST re-render
function toggleTaskSelection(taskId) {
  // YOUR CODE HERE
}

/* ========================================
       TODO 8: RENDERING
       ======================================== */

// TODO 8.1: Render task list
// MUST safely access all task properties
// MUST show empty state if no filtered tasks
// MUST apply 'selected' class to selected tasks
// MUST apply 'completed' class to completed tasks
function renderTaskList() {
  const filteredTasks = getFilteredTasks();
  const taskList = document.getElementById('taskList');

  // YOUR CODE HERE
  // Remember: Use data-task-id and data-action attributes for delegation!
}

// TODO 8.2: Update stats display
// MUST calculate total, active, completed counts
// MUST handle edge cases safely
function updateStats() {
  // YOUR CODE HERE
}

// TODO 8.3: Render task detail modal
// MUST safely access ALL task properties
// MUST format data nicely
function renderTaskDetail(taskId) {
  // YOUR CODE HERE
}

/* ========================================
       TODO 9: LIFECYCLE & CLEANUP
       ======================================== */

// TODO 9.1: Initialize app
// MUST start timer
// MUST setup all event listeners
// MUST render initial state
function initApp() {
  // YOUR CODE HERE
  // Setup form listeners
  // Setup task list delegation
  // Setup filter listeners
  // Setup modal listeners
  // Start timer
  // Initial render
}

// TODO 9.2: Cleanup on "unmount" (simulate React unmount)
// MUST stop timer
// MUST remove ALL event listeners
// MUST clear any pending operations
// Note: Call this when navigating away (test with window.onbeforeunload)
function cleanupApp() {
  // YOUR CODE HERE
  console.log('App cleanup complete - no memory leaks!');
}

/* ========================================
       TODO 10: LEAK DETECTION (BONUS)
       ======================================== */

// TODO 10.1: Track active listeners
// Add listener tracking to detect leaks
function trackListener(element, event, handler, description) {
  const key = `${description}-${Date.now()}`;
  activeListeners.add(key);
  leakCount++;
  updateLeakDetector();

  element.addEventListener(event, handler);

  return () => {
    element.removeEventListener(event, handler);
    activeListeners.delete(key);
    leakCount--;
    updateLeakDetector();
  };
}

function updateLeakDetector() {
  const detector = document.getElementById('leakDetector');
  const countEl = document.getElementById('leakCount');

  countEl.textContent = leakCount;

  if (leakCount > 0) {
    detector.classList.add('show');
    if (leakCount > 3) {
      detector.classList.add('leak');
    } else {
      detector.classList.remove('leak');
    }
  } else {
    detector.classList.remove('show', 'leak');
  }
}

/* ========================================
       SAMPLE DATA LOADER
       ======================================== */

document.getElementById('loadSampleBtn').addEventListener('click', () => {
  state.tasks = [...SAMPLE_TASKS];
  renderTaskList();
  updateStats();
});

/* ========================================
       INITIALIZE APP
       ======================================== */

// TODO: Call initApp() when ready
// initApp();

// TODO: Setup cleanup on page unload
// window.addEventListener('beforeunload', cleanupApp);
