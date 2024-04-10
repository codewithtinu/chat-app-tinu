import User from "../module/user.module.js";

const getAllUser = async(req, res) => {
    try {
        let loggedInUser = req.user._id;
        let filterUsers = await User.find({_id: {$ne: loggedInUser}});

        res.status(201).json(filterUsers);
        
    } catch (error) {
        console.error("Error in Users controller", error.message);
        res.status(500).json({ error: "Internal server error" });
    }

};

export {getAllUser}