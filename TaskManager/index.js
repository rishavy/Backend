const fs = require('fs') 
const path = require('path') 
const readline = require('readline') 

const tasksFilePath = path.join(__dirname, 'tasks.txt') 

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}) 

function addTask(task) {
    fs.appendFile(tasksFilePath, task + '\n', (err) => {
        if (err) throw err 
        console.log('Task added!') 
        rl.close() 
    }) 
}

function viewTasks(callback) {
    fs.readFile(tasksFilePath, 'utf8', (err, data) => {
        if (err) throw err 
        const tasks = data.trim().split('\n').filter(Boolean) 
        console.log('Tasks:') 
        tasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task}`) 
        }) 
        callback(tasks) 
    }) 
}

function markTaskComplete(index) {
    viewTasks((tasks) => {
        if (index < 1 || index > tasks.length) {
            console.log('Invalid task number') 
            rl.close() 
            return 
        }
        tasks[index - 1] = `[x] ${tasks[index - 1]}` 
        fs.writeFile(tasksFilePath, tasks.join('\n'), (err) => {
            if (err) throw err 
            console.log('Task marked as complete!') 
            rl.close() 
        }) 
    }) 
}

function removeTask(index) {
    viewTasks((tasks) => {
        if (index < 1 || index > tasks.length) {
            console.log('Invalid task number') 
            rl.close() 
            return 
        }
        tasks.splice(index - 1, 1) 
        fs.writeFile(tasksFilePath, tasks.join('\n'), (err) => {
            if (err) throw err 
            console.log('Task removed!') 
            rl.close() 
        }) 
    }) 
}

function showMenu() {
    console.log(`
Choose an action:
1. Add a new task
2. View tasks
3. Mark a task as complete
4. Remove a task
    `) 

    rl.question('Enter your choice: ', (choice) => {
        switch (choice) {
            case '1':
                rl.question('Enter a new task: ', (task) => {
                    addTask(task) 
                }) 
                break 
            case '2':
                viewTasks(() => rl.close()) 
                break 
            case '3':
                rl.question('Enter the number of the task to mark as complete: ', (index) => {
                    markTaskComplete(parseInt(index)) 
                }) 
                break 
            case '4':
                rl.question('Enter the number of the task to remove: ', (index) => {
                    removeTask(parseInt(index)) 
                }) 
                break 
            default:
                console.log('Invalid choice') 
                rl.close() 
        }
    }) 
}

showMenu() 
