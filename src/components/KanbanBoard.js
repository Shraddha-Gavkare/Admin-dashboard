import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Box, Paper, Typography } from '@mui/material';

const initialTasks = {
  todo: { name: 'To Do', items: ['Task 1', 'Task 2'] },
  inProgress: { name: 'In Progress', items: ['Task 3'] },
  done: { name: 'Done', items: ['Task 4'] },
};

const KanbanBoard = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceColumn = tasks[source.droppableId];
    const destColumn = tasks[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);

    setTasks({
      ...tasks,
      [source.droppableId]: { ...sourceColumn, items: sourceItems },
      [destination.droppableId]: { ...destColumn, items: destItems },
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Box display="flex" justifyContent="space-between">
        {Object.entries(tasks).map(([columnId, column]) => (
          <Paper key={columnId} style={{ width: '30%', padding: '16px' }}>
            <Typography variant="h6">{column.name}</Typography>
            <Droppable droppableId={columnId}>
              {(provided) => (
                <Box ref={provided.innerRef} {...provided.droppableProps} padding="8px">
                  {column.items.map((item, index) => (
                    <Draggable key={item} draggableId={item} index={index}>
                      {(provided) => (
                        <Paper
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={{ padding: '16px', margin: '8px 0', ...provided.draggableProps.style }}
                        >
                          {item}
                        </Paper>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </Box>
              )}
            </Droppable>
          </Paper>
        ))}
      </Box>
    </DragDropContext>
  );
};

export default KanbanBoard;
