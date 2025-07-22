import supabaseClient from "@/utils/Supabase";

export async function getJobs(token) {
  const supabase = await supabaseClient(token);

  let query = supabase.from("jobs").select("*");

  const { data, error } = await query;

  if (error) {
    console.error("error fetching jobs", error);
    return null;
  }
  return data;
}
