import SUPABASE_CLIENT from "../config"

class WordDataService {
    getAll() {
        return SUPABASE_CLIENT.from("Words").select("id,word,definition")
    }
}

export default new WordDataService();