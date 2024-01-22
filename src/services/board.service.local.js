import { demo_boards } from '../demo-data/board.js'
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

const STORAGE_KEY = 'board'

export const boardService = {
  query,
  getBoardById,
  getGroupById,
  getTaskById,
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
}

window.boardService = boardService

async function query() {
  var boards = await storageService.query(STORAGE_KEY)
  if (!boards || !boards.length) {
    boards = demo_boards
    localStorage.setItem(STORAGE_KEY, JSON.stringify(boards))
  }
  return boards
}

function getBoardById(boardId) {
  return storageService.get(STORAGE_KEY, boardId)
}

function getGroupById(board, groupId) {
  return board.groups.find(group => group.id === groupId)
}

function getTaskById(board, taskId) {
  var task
  for (const group of board.groups) {
    for (const _task of group.tasks) {
      if (_task.id === taskId) task = _task
      if (task) break
    }
    if (task) break
  }
  return task
}

async function remove(boardId) {
  await storageService.remove(STORAGE_KEY, boardId)
}

async function add(board) {
  const addedBoard = await storageService.post(STORAGE_KEY, board)
  return addedBoard
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
  const updatedBoard = await storageService.put(STORAGE_KEY, board)
  return updatedBoard
}

function createBoard(background) {
  return {
    title: '',
    isStarred: false,
    style: { background },
    labels: [],
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

function createTask(title) {
  return {
    id: utilService.makeId(),
    title,
    cover: {
      "imgUrl": "",
      "bgClr": "--yellowSubtleBg"
    },
    description: '',
    checklists: [],
    comments: [],
    members: [
      {
        "_id": "u101",
        "username": "David",
        "fullname": "David Tal Rivlin",
        "imgUrl": "https://res.cloudinary.com/dtty3yxsg/image/upload/v1704892372/david_ei7bic.png",
        "isActive": true
      },
      {
        "_id": "u102",
        "username": "Michael",
        "fullname": "Micahel Lulav",
        "imgUrl": "https://res.cloudinary.com/dtty3yxsg/image/upload/v1704892372/michael_twqbry.png",
        "isActive": true
      },
      {
        "_id": "u103",
        "username": "Amir",
        "fullname": "Amir Greenberg",
        "imgUrl": "https://res.cloudinary.com/dtty3yxsg/image/upload/v1704892372/amir_kunfyq.png",
        "isActive": true
      },
      {
        "_id": "u104",
        "username": "Daniel",
        "fullname": "Daniel Shaked",
        "imgUrl": "https://res.cloudinary.com/dtty3yxsg/image/upload/v1704892372/daniel_zexxsd.png",
        "isActive": true
      },
      {
        "_id": "u105",
        "username": "Bat-El",
        "fullname": "Batel Katiei",
        "imgUrl": "https://res.cloudinary.com/dtty3yxsg/image/upload/v1704892372/batel_dgkuq6.png",
        "isActive": true
      },
      {
        "_id": "u106",
        "username": "Tommy",
        "fullname": "Tommy Irmia",
        "imgUrl": "https://res.cloudinary.com/dtty3yxsg/image/upload/v1704892372/tommy_pnvi1n.png",
        "isActive": true
      },
      {
        "_id": "u107",
        "username": "Netta",
        "fullname": "Netta Lev",
        "imgUrl": "",
        "isActive": true
      },
      {
        "_id": "u108",
        "username": "Dan",
        "fullname": "Dan Haschan",
        "imgUrl": "",
        "isActive": true
      }
    ],
    labels: [
      {
        "id": "l102",
        "title": "Minor",
        "bgColor": "var(--greenBg)",
        "txtColor": "var(--greenTxt)",
        "isDark": false,
        "isActive": false
      },
      {
        "id": "l104",
        "title": "QA 1st phase",
        "bgColor": "var(--yellowSubtleBg)",
        "txtColor": "var(--yellowSubtleTxt)",
        "isDark": false,
        "isActive": false
      },
      {
        "id": "l105",
        "title": "QA 2nd phase",
        "bgColor": "var(--yellowBg)",
        "txtColor": "var(--yellowTxt)",
        "isDark": false,
        "isActive": false
      },
      {
        "id": "l108",
        "title": "Potential risk",
        "bgColor": "var(--orangeBg)",
        "txtColor": "var(--orangeTxt)",
        "isDark": false,
        "isActive": false
      },
      {
        "id": "l111",
        "title": "Urgent",
        "bgColor": "var(--redBg)",
        "txtColor": "var(--redTxt)",
        "isDark": false,
        "isActive": false
      },
      {
        "id": "l114",
        "title": "Pre-production",
        "bgColor": "var(--purpleBg)",
        "txtColor": "var(--purpleTxt)",
        "isDark": false,
        "isActive": false
      },
      {
        "id": "l117",
        "title": "Q4",
        "bgColor": "var(--blueBg)",
        "txtColor": "var(--blueTxt)",
        "isDark": false,
        "isActive": false
      },
      {
        "id": "l120",
        "title": "Q3",
        "bgColor": "var(--skyBg)",
        "txtColor": "var(--skyTxt)",
        "isDark": false,
        "isActive": false
      },
      {
        "id": "l123",
        "title": "Finance",
        "bgColor": "var(--limeBg)",
        "txtColor": "var(--limeTxt)",
        "isDark": false,
        "isActive": false
      },
      {
        "id": "l126",
        "title": "HR",
        "bgColor": "var(--pinkBg)",
        "txtColor": "var(--pinkTxt)",
        "isDark": false,
        "isActive": false
      }
    ],
    date: null,
    archivedAt: NaN,
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

function getDefaultFilter() {
  return {
    keyword: '',
  }
}

function getEmptyComment() {
  return {
    txt: '',
    createdAt: NaN,
    byMember: null,
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