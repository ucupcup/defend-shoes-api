import { prisma } from "config";
import { CreateUserDTO } from "./users.dto";

export const createUser = async (data: CreateUserDTO) => {
  return await prisma.users.create({
    data: {
      name: data.name,
      email: data.email,
      password: data.password,
      phone_number: data.phone_number,
    },
  });
};
