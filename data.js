const appData = {
    schemaVersion: 1,

    boards: [
        {
            id: "board-1",
            name: "Development",

            columns: [
                {
                    id: "column-1",
                    name: "To Do",
                    taskIds: ["task-1", "task-2"]
                },
                {
                    id: "column-2",
                    name: "In Progress",
                    taskIds: ["task-3"]
                },
                {
                    id: "column-3",
                    name: "Completed",
                    taskIds: []
                }
            ]
        }
    ],

    tasks: {
        "task-1": {
            id: "task-1",
            title: "Build homepage",
            description: "Create the homepage UI",
            priority: "High",
            deadline: "2026-11-25",
            createdAt: 1795000000000,
            updatedAt: 1795000000000
        },

        "task-2": {
            id: "task-2",
            title: "Create navbar",
            description: "Build responsive navigation",
            priority: "Medium",
            deadline: null,
            createdAt: 1795000000000,
            updatedAt: 1795000000000
        },

        "task-3": {
            id: "task-3",
            title: "Design dashboard",
            description: "Finish dashboard design",
            priority: "Low",
            deadline: null,
            createdAt: 1795000000000,
            updatedAt: 1795000000000
        }
    }
};