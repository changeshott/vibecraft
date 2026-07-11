"use server";

import { createClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

export async function submitTestimonial(formData: FormData) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { error: "You must be logged in to submit a testimonial." };
  }

  const name = formData.get("name") as string;
  const role = formData.get("role") as string;
  const content = formData.get("content") as string;

  if (!name || !role || !content) {
    return { error: "All fields are required." };
  }

  // Generate a random avatar based on the name
  const avatar = `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(name)}`;

  const { error } = await supabase.from("testimonials").insert({
    user_id: user.id,
    name,
    role,
    content,
    avatar,
  });

  if (error) {
    console.error("Error submitting testimonial:", error);
    return { error: "Failed to submit testimonial. Please try again." };
  }

  revalidatePath("/");

  return { success: true };
}
