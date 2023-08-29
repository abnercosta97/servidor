import { Request, Response } from "express";

export function dayofmounth(req:Request, res:Response){
    const day = new Date().getDate();
    res.send({day});   
}

export function mounth(req:Request, res:Response){
    const mounth = new Date().getMonth()+1;
    res.send({mounth});   
}

export function year(req:Request, res:Response){
    const year = new Date().getFullYear();
    res.send({year});   
}