import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoIds : [],
  todoList : [],
  selected : {},
}

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    setList: (state = initialState, action) => {
      state.todoList = action.payload;
      state.todoIds = action.payload.map(item => {
        return item.id;
      });
    },

    setSelected: (state = initialState, action) => {
      state.selected = action.payload;
    },

    setTodo: (state = initialState, action) => {
      action.payload.items = [];
      state.todoList.push(action.payload);
      state.todoIds.push(action.payload.id);
    },

    setItem: (state = initialState, action) => {
      const index = state.todoIds.indexOf(action.payload[0]);
      state.todoList[index].items.push(action.payload[1]);
    },

    updateItem: (state = initialState, action) => {
      const parentIndex = state.todoIds.indexOf(action.payload[0]);
      const childIndex = state.todoList[parentIndex].items.map(item => {return item.id}).indexOf(action.payload[1]);
      state.todoList[parentIndex].items[childIndex] = action.payload[2];
    },

    moveItem: (state = initialState, action) => {
      const parentIndex = state.todoIds.indexOf(action.payload[1]);
      const childIndex = state.todoList[parentIndex].items.map(item => {return item.id}).indexOf(action.payload[2]);
      let nextParentIndex;
      if(action.payload[0] === 'right') {
        nextParentIndex = parentIndex + 1;
      } else if(action.payload[0] === 'left') {
        nextParentIndex = parentIndex - 1;
      }
      state.todoList[parentIndex].items.splice(childIndex, 1);
      state.todoList[nextParentIndex].items.push(action.payload[3]);
    },

    deleteItem: (state = initialState, action) => {
      const parentIndex = state.todoIds.indexOf(action.payload[0]);
      const childIndex = state.todoList[parentIndex].items.map(item => {return item.id}).indexOf(action.payload[1]);
      state.todoList[parentIndex].items.splice(childIndex, 1);
    }
  }
})

export const { setList, setSelected, setTodo, setItem, updateItem, moveItem, deleteItem } = boardSlice.actions;

export default boardSlice.reducer;