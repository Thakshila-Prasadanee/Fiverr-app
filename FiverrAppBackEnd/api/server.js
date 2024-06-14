import express from "express";

const app = express()

app.listene(8000, ()=>{
    console.log("backend server is running!");
})