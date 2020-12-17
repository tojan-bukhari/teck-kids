const CSS_Schema = new mongoose.Schema ({
   
    Titles:
    {
        type: String,   
    },
    Videos: {
        type: String,    
    },
    Desceriptions: {
        type: String,     
    },
});

export default mongoose.model('css',CSS_Schema );