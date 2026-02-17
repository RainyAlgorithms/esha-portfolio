from fastapi import FastAPI
from supabase import create_client, Client
import os

app = FastAPI()

# Initialize Supabase (Use Environment Variables!)
url: str = os.environ.get("NEXT_PUBLIC_SUPABASE_URL")
key: str = os.environ.get("NEXT_PUBLIC_SUPABASE_ANON_KEY")
supabase: Client = create_client(url, key)

@app.get("/api/experience")
def get_experience():
    # Fetches your work history for the Timeline
    response = supabase.table("experience").select("*").order("start_date", desc=True).execute()
    return response.data

@app.get("/api/projects")
def get_projects():
    # Fetches projects for the Bento Grid
    response = supabase.table("projects").select("*").execute()
    return response.data
    