import { Router } from "express";
import { todosController } from "./todos.controller";

const router=Router()


router.post('/',todosController.addTodo)
router.get('/:id',todosController.getTodo)
router.put('/:id',todosController.updateTodo)
router.delete('/:id',todosController.deleteTodo)

export const todosRoute=router