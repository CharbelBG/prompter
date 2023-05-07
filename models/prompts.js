import {Schema, model, models} from "mongoose";

//each prompt must have a user, we can do it by calling the use model.
const PromptSchema = new Schema({
    creator:{
        type:Schema.Types.ObjectId,
        ref:'User',
    },
    prompt:{
        type:String,
        required:[true, 'Prompt is required'],
    },
    tag:{
        type:String,
        required:[true, 'Tag is required'],
    }
});

const Prompt = models.Prompt || model("Prompt", PromptSchema);
export default Prompt;