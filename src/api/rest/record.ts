import express,{ Request, Response  } from "express";
// import {Prisma} from '@prisma/client'
import prisma from '../../data/index'


// const recordInitializer = async (req: Request,res: Response)=>{
//     try{
//         const {status} = req.body

//         const user = await prisma.record_status.create({
//             data: {
//                 status: status
//             },
//         });

//     }
//     catch(err){
//         return res.status(400).json({message: "Random message"})
//     }
    
// }

const recordUpdate = async(req: Request, res: Response)=>{
    try{
        const {id,status} = req.body
        const user = await prisma.record_status.update({
            where:{
                user_id: id
            },
            data:{
                status: status
            }
        })
    }
    catch(err){
        return res.status(400).json({message: "Random message"})
    }
}


