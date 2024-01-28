import { demo_boards } from '../demo-data/board.js'
import { utilService } from './util.service.js'
import { httpService } from './http.service.js';
import { userService } from './user.service.js';

export const boardService = {
  query,
  getBoardById,
  getGroupById,
  getListById,
  add,
  update,
  remove,
  createBoard,
  createGroup,
  createTask,
  createLabel,
  createChecklist,
  createTodo,
  getDefaultFilter,
  getEmptyComment,
  getEmptyActivity,
  addGroup,
  getBoardGroupTask,
  getLabel,
  getLabels,
  getTaskLabelsColors,
  getFormattedDate,

  // getGroupById,
  // getTaskById,
}

window.boardService = boardService

async function query() {
  const boards = await httpService.get('board');
  return boards;
}

async function getBoardGroupTask(boardId, groupId, taskId) {
  const board = await httpService.get(`board/${boardId}`)
  const group = board.groups.find(group => group.id === groupId)
  const task = group.tasks.find(task => task.id === taskId)
  return { board, group, task }
}

async function getBoardById(boardId) {
  try {
    const board = await httpService.get(`board/${boardId}`);
    return board;
  } catch (err) {
    console.log('Cannot get board by id', err);
  }
}

async function getLabel(boardId, labelId) {
  const board = await httpService.get(`board/${boardId}`)
  // const board = await storageService.get(STORAGE_KEY, boardId)
  const label = board.labels.find(label => label.id === labelId)
  return label
}

async function getLabels(boardId, txt) {
  const newTxt = txt.toLowerCase()
  const board = await httpService.get(`board/${boardId}`)
  // const board = await storageService.get(STORAGE_KEY, boardId)

  const labels = board.labels.filter(label => {
    return label.shade.toLowerCase().includes(newTxt) ||
      label.title.toLowerCase().includes(newTxt) ||
      label.colorName.toLowerCase().includes(newTxt)
  })
  return labels
}

function getTaskLabelsColors(board, task) {
  var labelsColors = []
  task?.labelIds?.forEach(labelId => {
    board?.labels?.forEach(label => {
      if (label.id === labelId) labelsColors.push({ color: label.color, title: label.title })
    })
  })

  return labelsColors
}

async function getGroupById(boardId, groupId) {
  try {
    const group = await httpService.get(`board/${boardId}/${groupId}`);
    return group;
  } catch (err) {
    console.log('Cannot get group by id', err);
  }
}

async function getListById(boardId, groupId, listId) {
  try {
    const list = await httpService.get(`board/${boardId}/${groupId}/${listId}`);
    return list;
  } catch (err) {
    console.log('Cannot get list by id', err);
  }
}

async function add(board) {
  try {
    const savedBoard = await httpService.post('board', board);
    return savedBoard;
  } catch (err) {
    console.log('Cannot save board', err);
  }
}

async function remove(boardId) {
  try {
    const board = await httpService.delete(`board/${boardId}`);
    return board;
  } catch (err) {
    console.log('Cannot remove board by id', err);
  }
}

async function addGroup(title, boardId) {
  const newGroup = {
    id: utilService.makeId(),
    title,
    tasks: [],
  };
  try {
    const board = await getBoardById(boardId);
    board.groups.push(newGroup);

    update(board);
    return board;
  } catch (err) {
    console.log('Cannot add group', err);
  }
}

async function update(board) {
  try {
    await httpService.put('board', board);
    return board;
  } catch (err) {
    console.log('Cannot update board', err);
  }
}

function createBoard(background) {
  return {
    title: '',
    isStarred: false,
    style: { background },
    labels: [
      {
        "id": "l101",
        "title": "",
        "color": "#4bce97",
        "colorName": "green",
        "shade": ""
      },
      {
        "id": "l102",
        "title": "",
        "color": "#e2b203",
        "colorName": "yellow",
        "shade": ""
      },
      {
        "id": "l103",
        "title": "",
        "color": "#faa53d",
        "colorName": "orange",
        "shade": ""
      },
      {
        "id": "l104",
        "title": "",
        "color": "#f87462",
        "colorName": "red",
        "shade": ""
      },
      {
        "id": "l107",
        "title": "",
        "color": "#e774bb",
        "colorName": "pink",
        "shade": ""
      },
      {
        "id": "l105",
        "title": "",
        "color": "#9f8fef",
        "colorName": "purple",
        "shade": ""
      },
      {
        "id": "l106",
        "title": "",
        "color": "#579dff",
        "colorName": "blue",
        "shade": ""
      }
    ],
    members: [],
    groups: [],
    activities: [],
    cmpsOrder: [],
    archivedAt: NaN,
  }
}

function createGroup(title) {
  return {
    id: utilService.makeId(),
    title,
    tasks: [],
    style: {},
    archivedAt: NaN,
  }
}

function createTask(title = '') {
  return {
    id: utilService.makeId(),
    title,
    status: null, // monday
    priority: null,
    description: '',
    comments: [],
    checklists: [],
    memberIds: [],
    labelIds: [],
    dueDate: null,
    byMember: null,
    style: {
      backgroundColor: '',
      cover: ''
    },
    startDate: null,
    dueDate: null,
    attachment: [],
    createdAt: Date.now()
  }
}

function createLabel(title, color) {
  return {
    id: utilService.makeId(),
    title,
    color,
  }
}

function createChecklist(title) {
  return {
    id: utilService.makeId(),
    title: title || 'Checklist',
    todos: [],
  }
}

function createTodo(title) {
  return {
    id: utilService.makeId(),
    title,
    isDone: false,
  }
}

function getEmptyComment() {
  return {
    txt: '',
    createdAt: NaN,
    byMember: null,
  }
}

function getDefaultFilter() {
  return {
    keyword: '',
  }
}

function getEmptyActivity() {
  return {
    txt: '',
    createdAt: NaN,
    byMember: null,
    group: null,
    task: null,
  }
}

function getFormattedDate(timestamp) {
  const currentDate = new Date()

  const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
  ]
  const dateInMilliseconds = timestamp * 1000
  const date = new Date(dateInMilliseconds)
  const month = monthNames[date.getMonth()]
  const day = date.getDate()
  const year = date.getFullYear()
  var formattedDate = `${month} ${day}${currentDate.getFullYear() !== year ? ', ' + year : ''}`

  return { date, formattedDate }
}