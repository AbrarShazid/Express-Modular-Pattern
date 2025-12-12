import { Request, Response } from "express"
import { todosService } from "./todos.service"

const addTodo =async (req: Request, res: Response) => {
  const { user_id, title } = req.body
  try {
    const result = await todosService.addTodo(user_id,title)
    res.status(201).json({
      success: true,
      message: "TO-DO added!",
      data: result.rows[0]
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}
const getTodo=async (req: Request, res: Response) => {
  const user_id = req.params.id
  try {
    const result = await todosService.getTodo(user_id!)
    if (result.rows.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No Task Found"
      })
    }
    res.status(200).json({
      success: true,
      message: "Task fetched",
      data: result.rows
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}
const updateTodo= async (req: Request, res: Response) => {
  const id = req.params.id
  const { user_id, title } = req.body
  try {
    const result = await todosService.updateTodo(user_id,title,id!)
    if (result.rows.length === 0) {
      res.status(404).json({
        success: false,
        message: "Task Not Found"
      })
    }
    res.status(200).json({
      success: true,
      message: "Task updated successfully",
      data: result.rows[0]
    })

  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}
const deleteTodo= async (req: Request, res: Response) => {
  const id = req.params.id
  try {
    const result = await todosService.deleteTodo(id!)
    if (result.rowCount === 0) {
      res.status(404).json({
        success: false,
        message: "Task Not Found"
      })
    }
    res.status(200).json({
      success: true,
      message: "Task deleted successfully",
      data: null
    })

  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}


export const todosController={
  addTodo,
  getTodo,
  updateTodo,
  deleteTodo
}