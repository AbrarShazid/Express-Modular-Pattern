import { pool } from "../../config/db"

const addTodo = async (user_id: number, title: string) => {
  const result = pool.query(`
    INSERT INTO todos(user_id,title) VALUES($1, $2) RETURNING *
  `, [user_id, title])
  return result
}

const getTodo = async (user_id: string) => {
  const result = await pool.query(`
        SELECT * FROM todos WHERE user_id=$1
      `, [user_id]);
  return result
}

const updateTodo=async(user_id:number,title:string,id:string)=>{
 const result=  await pool.query(`
      UPDATE todos SET
              user_id=$1,
              title=$2,
              updated_at=NOW()
      WHERE id=$3
      RETURNING *
      `, [user_id, title, id])
      return result
}

const deleteTodo=async(id:string)=>{
  const result= await pool.query(`
        DELETE FROM todos WHERE id=$1
      `, [id])

      return result
}


export const todosService = {
  addTodo,
  getTodo,
  updateTodo,
  deleteTodo

}

