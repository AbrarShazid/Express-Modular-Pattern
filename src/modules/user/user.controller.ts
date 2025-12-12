import { Request, Response } from "express"
import { pool } from "../../config/db"
import { userServices } from "./user.service"

const createUser = async (req: Request, res: Response) => {
  const { name, email, age, address } = req.body
  try {
    const result = await userServices.createUser(name,email,address,age)
    res.status(201).json({
      success: true,
      message: "Data Inserted Successfully",
      data: result.rows[0]
    })

  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

const getUser=async (req: Request, res: Response) => {
  try {
    const result = await userServices.getUser()
    res.status(200).json({
      success: true,
      message: "Users Retrieved successfully",
      data: result.rows
    })

  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message
    })

  }
}


const getSingleUser=async (req: Request, res: Response) => {
  const id = req.params.id
  try {
    const result = await userServices.getSingleUser(id!)
    if (result.rows.length === 0) {
      res.status(404).json({
        success: false,
        message: "User Not Found"
      })
    }
    res.status(200).json({
      success: true,
      message: "User fetched",
      data: result.rows[0]
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

const updateUser=async (req: Request, res: Response) => {
  const id = req.params.id
  const { name, email, age, address } = req.body
  try {
    const result = await userServices.updateUser(name,email,age,address,id!)

    if (result.rows.length === 0) {
      res.status(404).json({
        success: false,
        message: "User Not Found"
      })
    }
    res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: result.rows[0]
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}


const deleteUser= async (req: Request, res: Response) => {
  const id = req.params.id
  try {
    const result =await userServices.deleteUser(id!)
    if (result.rowCount === 0) {
      res.status(404).json({
        success: false,
        message: "User Not Found"
      })
    }
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
      data: null
    })
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

export const userControllers={
  createUser,
  getUser,
  getSingleUser ,
  updateUser,
  deleteUser
}