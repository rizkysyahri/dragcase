"use server";

import { db } from "@/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const getAuthStatus = async () => {
  try {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user?.id || !user.email) {
      return { success: false, isLoggedIn: false, message: "User not logged in" };
    }

    const existingUser = await db.user.findFirst({
      where: { id: user.id },
    });

    if (!existingUser) {
      await db.user.create({
        data: {
          id: user.id,
          email: user.email,
        },
      });
    }

    return { success: true, isLoggedIn: true, user };
  } catch (error) {
    console.error("Error in getAuthStatus:", error);
    return { success: false, isLoggedIn: false, message: "An unexpected error occurred" };
  }
};
