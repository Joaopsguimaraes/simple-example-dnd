import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import "./global.css";

const cards = [
  { id: 1, name: "card 1" },
  { id: 2, name: "card 2" },
  { id: 3, name: "card 3" },
  { id: 4, name: "card 4" },
  { id: 5, name: "card 5" },
];


export function App() {
  const [todos, setTodos] = useState(cards);

  function handleOnDragend(result: any){
    const items = Array.from(todos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0,reorderedItem);
    setTodos(items);
  }

  return (
    <DragDropContext onDragEnd={handleOnDragend}>
      <div className="w-52 items-center justify-center flex flex-col gap-8">
        <p className="flex justify-center text-lg">TODO</p>
        <Droppable droppableId="todo">
          {(provided) => (
            <ul
              className="p-4 flex flex-col gap-4 w-full bg-zinc-800"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {todos.map((card, index) => {
                return (
                  <Draggable
                    key={card.id}
                    draggableId={card.name}
                    index={index}
                  >
                    {(provided) => (
                      <li
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                        className="p-8 border flex items-center justify-center bg-black  border-zinc-100"
                      >
                        {card.name}
                      </li>
                    )}
                  </Draggable>
                );
              })}
            </ul>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}
