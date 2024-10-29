
import './GanttStyles.css'
import { FrappeGantt } from 'frappe-gantt-react'

export default function GanttChart() {

    let project_begin = '2024-08-1'
    let project_end = '2024-11-16'
    let d1 = '2024-04-01';
    let d2 = new Date();
    d2.setDate(d2.getDate() + 5);
    let d3 = new Date();
    d3.setDate(d3.getDate() + 8);
    let d4 = new Date();
    d4.setDate(d4.getDate() + 20);

    const tasks = [
        {
            id: "Hardware",
            name: "Hardware",
            start: project_begin,
            end: project_end ,
            progress: 100,
            dependencies: "Estructura,Simulación, Prototipo-1, Prototipo-2, Model",
        },
        {
            id: "Estructura",
            name: "Estructura",
            start: project_begin,
            end: project_end,
            progress: 100,
        },
        {
            id: "Simulación",
            name: "Simulación | Proteus",
            start: project_begin,
            end: '2024-08-8',
            progress: 100
            // dependencies: "Task 2, Task 1"
        },
        {
            id: "Prototipo-1",
            name: "PCB #1",
            start: '2024-08-8',
            end: '2024-08-29',
            progress: 100
        },
        {
           id: "Prototipo-2",
           name: "PCB #2",
           start: '2024-09-3',
           end: '2024-09-14',
           progress: 100
        },
        {
            id: "Model",
            name: "3D Model",
            start: '2024-09-13',
            end: '2024-09-18',
            progress: 100
            // dependencies: "Task 2, Task 1"
        },
        {
            id: "Plantas",
            name: "Plantines (Murieron xd)",
            start: '2024-10-7',
            end: "2024-10-15",
            progress: 100
        },
        {
            id: "Software",
            name: "Software",
            start: project_begin,
            end: project_end,
            progress: 100,
            dependencies: "Disparo, MyCodo, Filter,Serial-Data, App, Web"
        },
        {
            id: "Disparo",
            name: "Disparo | Test",
            start: project_begin,
            end: '2024-08-8',
            progress: 100,
        },
        {
            id: "MyCodo",
            name: "MyCodo | Communication Test",
            start: '2024-08-15',
            end: '2024-09-1',
            progress: 100
        },
        {
            id: "Filter",
            name: "Data Filter | Test",
            start: "2024-09-1",
            end: "2024-09-9",
            progress: 100
        },
        {
            id: "Serial-Data",
            name: "Real Serial Data on MyCodo",
            start: "2024-09-9",
            end: "2024-09-15",
            progress: 100
        },
        {
            id: "App",
            name: "App",
            start: project_begin,
            end: project_end,
            progress: 100
            // dependencies: "Task 2, Task 1"
        },
        {
            id: "Web",
            name: "Web App",
            start: project_begin,
            end: project_end,
            progress: 100
        }
    ];

    return (
        <div className='GanntContainer'>
            <hr />
            <h1 className='GanntText'>Seguimiento del Proyecto</h1>
            <div id='GanttDiv'>
                <FrappeGantt
                    tasks={tasks}
                    // viewMode={this.state.mode}
                    onClick={task => console.log(task, "click")}
                    onDateChange={(task, start, end) =>
                        console.log(task, start, end, "date")
                    }
                    onProgressChange={(task, progress) =>
                        console.log(task, progress, "progress")
                    }
                    onTasksChange={tasks => console.log(tasks, "tasks")}
                    viewMode='Month'

                />
            </div>
        </div>
    );
}
