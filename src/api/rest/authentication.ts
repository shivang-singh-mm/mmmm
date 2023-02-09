// import { Response, Request,Errback } from "express";
// import fg from 'fs'

// export const signupRm = (req: Request, res: Response) =>{
//     // const {email, password} = req.body
//     try{
//         const {email, password} = req.body
//         const query = `
//         INSERT INTO users (email, firstName, lastName, age)
//         VALUES ('shiv', firstName, lastName, age)
//         `;
//         client.query(query,(err: any,res: Response)=>{
//             if(err){
//                 return res.status(400).json({
//                     sucess: false,   
//                 })
//             }
//             res.status(200).json({
//                 sucess: true,   
//             })
//             // userAgent.end()
//         })
        
//     }
//     catch(err){
//         console.log(err)
//     }
// }

// export const authRm = (req: Request, res: Response) =>{
//     // const {email, password} = req.body
//     try{
//         const {email, password} = req.body
//         const query = `
//         SELECT *
//         FROM users
//         WHERE email=email
//         `;
//         client.query(query,(err: any,res: Response)=>{
//             if(err){
//                 return res.status(400).json({
//                     sucess: false,   
//                 })
//             }
//             const query = `
//             SELECT *
//             FROM users
//             WHERE email=email
//             `;
//             client.query(query,(err: any,res: Response)=>{
//                 if(err){
//                     return res.status(400).json({
//                         sucess: false
//                     })
//                 }
//                 res.status(200).json({
//                     sucess: true,   
//                 })
//                 // userAgent.end()  
//             })
//             // userAgent.end()
//         })
//     }
//     catch(err){
//         console.log(err)
//     }
// }
