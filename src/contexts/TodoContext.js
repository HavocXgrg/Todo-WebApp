import { createContext, useContext } from "react";

export const TodoContext = createContext({
  //creating context with objs and  methods
  todos: [
    {
      id: 1,
      todo: "todo inputs",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

// can be considered as a cutom hook for using context
export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider; //wrapping in a variable for ease of use. not repeating .provider everywhere
