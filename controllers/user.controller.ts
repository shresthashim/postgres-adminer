import { Request, Response } from "express";
import prisma from "../config/prisma";

export async function createUser(req: Request, res: Response): Promise<any> {
  const { name, email, password } = req.body;

  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    return res.status(201).json({
      status: "201",
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      status: "500",
      message: "Error creating user",
    });
  }
}
