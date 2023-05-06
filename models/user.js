import {Schema, model, models} from "mongoose";

const UserSchema = new Schema({
    email:{
        type:String,
        unique:[true, 'Email already exists'],
        required:[true, 'Email is required'],
    },
    username:{
        type:String,
        required:[true, 'username is required'],
        match:[/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "username invalid, it should containt 8-20 alphanumeric letters and be unique!"]
    },
    image:String,
});


//since this code will be called each time(lambda functions) we need to check before we create..
const User = models.User || model("User", UserSchema);

export default User;