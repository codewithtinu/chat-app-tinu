import User from "../module/user.module.js";
import bcrypt from 'bcryptjs';
// sign in
const signin = async(req, resp) => {
    
    try {
        const {fullName, userName, password, confirmedPassword, gender} = req.body;
        console.log(req.body);
        if(password !== confirmedPassword){
            resp.status(400).json({message: "Passwords do not match"});
        }
         
        const user = await User.findOne({userName});
        console.log('user: ', user);
        if(user){
            resp.status(400).json({message: 'Username already exists'})
        }
        
        

        // password encryption
        let salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        // profile pics
        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;
        // await User.save();
        const newUser = new User({
            fullName,
            userName,
            password : hashPassword,
            gender,
            profilePic: gender === 'male' ? boyProfilePic : girlProfilePic,
        });
        await newUser.save();
        // await newUser.save();
        resp.status(200).json({
            _id : newUser.id,
            fullName : newUser.fullName,
            password: newUser.password,
            confirmedPassword: newUser.confirmedPassword,
            gender:newUser.gender,
            profilePic: newUser.profilePic
        });
    } catch (error) {
        resp.status(500).json({ message: error.message })
        console.log('Internal server error in sign in controller',)
    }

};
// login
const login = (req, resp) => {
    console.log('login controller');
    resp.send('login controller');
};
// logout
const logout = (req, resp) => {
    console.log('logout controller');
    resp.send('logout controller');
};

export {signin, login, logout};