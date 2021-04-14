import SUPABASE_CLIENT from "../config"

class WordDataService {
    getAll() {
        return SUPABASE_CLIENT
        .from("Words")
        .select("id,word,definition")
        .order('created_at', { ascending: false })
    }
}

export default new WordDataService();