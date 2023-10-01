import Task from "@/app/models/tasks";

import { connectToDB } from "@/app/utils/database";

import { NextResponse } from "next/server";

import { IDeleteTaskRequestParam } from "@/app/types";

export const PATCH = async (
  request: Request,
  { params }: IDeleteTaskRequestParam
) => {
  try {
    await connectToDB();
    const existingTask = await Task.findById(params.id);

    if (!existingTask) {
      return NextResponse.json("Task not found", { status: 404 });
    }
    existingTask.completed = true;
    await existingTask.save();

    return NextResponse.json("Task completed successfully", { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Error completing task", { status: 500 });
  }
};
