import { pool } from "../db.js"

export const getProducts = async (req, res) => {
    try{
        (await pool).query("SELECT * FROM products ORDER BY createdAt ASC").then(([products]) => {
            res.json(products)
        });
    }catch(error){
        return res.status(505).json({message: error.message})
    }
}
export const getProduct = async (req, res) => {
    try {
        (await pool).query("SELECT * FROM products WHERE id = ?", [req.params.id]).then(([product]) => {
            return product.length <= 0 ? res.json("Product not found") : res.json(product);
        })
    } catch (error) {
        return res.status(505).json({message: error.message})
    }
    
}
export const createProduct = async (req, res) => {
    try {
        const {title, description} = req.body;
        const result = (await pool).query("INSERT INTO products(title, description) VALUES (?, ?)", 
        [title, description]);
        console.log(result);
        res.json({
            id: result.insertId,
            title,
            description
        }) 
    } catch (error) {
        
    }
    
}
export const updateProduct = async (req, res) => {
    try {
        (await pool).query("UPDATE products SET ? WHERE id = ?", [req.body, req.params.id]).then(([product]) => {
            return product.affectedRows == 0 ? res.status(404).json("Product not found") : res.json(product)
        });
    } catch (error) {
        return res.status(505).json({message: error.message})
    }
    
}
export const deleteProduct = async (req, res) => {
    try {
        (await pool).query("DELETE FROM products WHERE id = ?", [req.params.id]).then(([product]) => {
            return product.affectedRows == 0 ? res.status(404).json("Product not found/Was deleted") : res.sendStatus(204)
        });
    } catch (error) {
        return res.status(505).json({message: error.message})
    }
    
}