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
  console.log(board, group, task)
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
        "isActive": false
      },
      {
        "_id": "u102",
        "username": "Michael",
        "fullname": "Micahel Lulav",
        "imgUrl": "https://res.cloudinary.com/dtty3yxsg/image/upload/v1704892372/michael_twqbry.png",
        "isActive": false
      },
      {
        "_id": "u103",
        "username": "Amir",
        "fullname": "Amir Greenberg",
        "imgUrl": "https://res.cloudinary.com/dtty3yxsg/image/upload/v1704892372/amir_kunfyq.png",
        "isActive": false
      },
      {
        "_id": "u104",
        "username": "Daniel",
        "fullname": "Daniel Shaked",
        "imgUrl": "https://res.cloudinary.com/dtty3yxsg/image/upload/v1704892372/daniel_zexxsd.png",
        "isActive": false
      },
      {
        "_id": "u105",
        "username": "Bat-El",
        "fullname": "Batel Katiei",
        "imgUrl": "https://res.cloudinary.com/dtty3yxsg/image/upload/v1704892372/batel_dgkuq6.png",
        "isActive": false
      },
      {
        "_id": "u106",
        "username": "Tommy",
        "fullname": "Tommy Irmia",
        "imgUrl": "https://res.cloudinary.com/dtty3yxsg/image/upload/v1704892372/tommy_pnvi1n.png",
        "isActive": false
      },
      {
        "_id": "u107",
        "username": "Netta",
        "fullname": "Netta Lev",
        "imgUrl": "",
        "isActive": false
      },
      {
        "_id": "u108",
        "username": "Dan",
        "fullname": "Dan Haschan",
        "imgUrl": "",
        "isActive": false
      }
    ],
    labels: [
      {
        "id": "l102",
        "title": "Minor",
        "bgColor": "var(--greenBg)",
        "txtColor": "var(--greenTxt)",
        "isDark": false
      },
      {
        "id": "l104",
        "title": "QA 1st phase",
        "bgColor": "var(--yellowSubtleBg)",
        "txtColor": "var(--yellowSubtleTxt)",
        "isDark": false
      },
      {
        "id": "l105",
        "title": "QA 2nd phase",
        "bgColor": "var(--yellowBg)",
        "txtColor": "var(--yellowTxt)",
        "isDark": false
      },
      {
        "id": "l108",
        "title": "Potential risk",
        "bgColor": "var(--orangeBg)",
        "txtColor": "var(--orangeTxt)",
        "isDark": false
      },
      {
        "id": "l111",
        "title": "Urgent",
        "bgColor": "var(--redBg)",
        "txtColor": "var(--redTxt)",
        "isDark": false
      },
      {
        "id": "l114",
        "title": "Pre-production",
        "bgColor": "var(--purpleBg)",
        "txtColor": "var(--purpleTxt)",
        "isDark": false
      },
      {
        "id": "l117",
        "title": "Q4",
        "bgColor": "var(--blueBg)",
        "txtColor": "var(--blueTxt)",
        "isDark": false
      },
      {
        "id": "l120",
        "title": "Q3",
        "bgColor": "var(--skyBg)",
        "txtColor": "var(--skyTxt)",
        "isDark": false
      },
      {
        "id": "l123",
        "title": "Finance",
        "bgColor": "var(--limeBg)",
        "txtColor": "var(--limeTxt)",
        "isDark": false
      },
      {
        "id": "l126",
        "title": "HR",
        "bgColor": "var(--pinkBg)",
        "txtColor": "var(--pinkTxt)",
        "isDark": false
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

//Not in use:

// function getGroupById(board, groupId) {
//     return board.groups.find(group => group.id === groupId)
// }

// function getTaskById(board, taskId) {
//     var task
//     for (const group of board.groups) {
//         for (const _task of group.tasks) {
//             if (_task.id === taskId) task = _task
//             if (task) break
//         }
//         if (task) break
//     }
//     return task
// }