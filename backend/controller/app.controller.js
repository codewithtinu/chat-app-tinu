import User from "../module/user.module.js";
import bcrypt from 'bcryptjs';
import generateTokenAndcookies from "../utilities/generateTokenAndcookies.js";
// sign in
const signin = async(req, resp) => {
    
    try {
        const {fullName, userName, password, confirmedPassword, gender} = req.body;
        // console.log(req.body);
        if(password !== confirmedPassword){
            resp.status(400).json({message: "Passwords do not match"});
        }
         
        const user = await User.findOne({userName});
        // console.log('user: ', user);
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
        if(newUser){
        await newUser.save();
        // generate jwt token
        generateTokenAndcookies(newUser._id, resp);
        resp.status(200).json({
            _id : newUser.id,
            fullName : newUser.fullName,
            password: newUser.password,
            confirmedPassword: newUser.confirmedPassword,
            gender:newUser.gender,
            profilePic: newUser.profilePic
        });
    }
    } catch (error) {
        resp.status(500).json({ message: error.message })
        console.log('Internal server error in sign in controller',)
    }

};
// login
const login = async(req, resp) => {
    // console.log('login controller');
    // resp.send('login controller');

    try {

        const {userName, password} = req.body;
        console.log('userName: ', userName);
        console.log('password: ', password);
        let user = await User.findOne({userName});
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        
        if(!user || !isPasswordMatch){
            resp.status(400).json({message:'Invalid credentials!'})
        }

        resp.status(200).json({message: 'User login successfully'})
        generateTokenAndcookies(user._id, resp);

        resp.send(200).json({
            _id: user.id,
            fullName: user.fullName,
            userName: user.userName,
            password: user.password,
            gender: user.gender,
            profilePic: user.profilePic
        })
        
    } catch (error) {
        resp.status(500).json({ message: error.message })
        console.log('Internal server error in login controller')
    }
};
// logout
const logout = async(req, resp) => {
    // console.log('logout controller');
    // resp.send('logout controller');
    try{
        const {userName} = req.body;
        const user = User.findOne({userName});
        // delete req.session.userName;
        generateTokenAndcookies(user._id, {maxAge: 0});

    }catch (error) {
        resp.status(500).json({ message: error.message })
        console.log('Internal server error in logout controller')
    }
};

export {signin, login, logout};