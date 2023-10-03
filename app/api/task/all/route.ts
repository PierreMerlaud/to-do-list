import Task from "@/app/models/tasks";
import { connectToDB } from "@/app/utils/database";

import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  try {
    await connectToDB();

    const tasks = await Task.find({});

    // Set Cache-Control header to disable caching
    request.headers.set(
      "Cache-Control",
      "no-cache, no-store, max-age=0, must-revalidate"
    );

    return NextResponse.json(tasks, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json("Failed to fetch all tasks", { status: 500 });
  }
};
