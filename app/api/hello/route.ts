import { NextResponse } from "next/server"

export async function POST(req:any, res:any) {

    console.log("hi")
    // return new Response("hello")
    // res.status(200).send("Hello")
    return NextResponse.json("done")
}