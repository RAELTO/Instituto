const getAllCourses = (req, res) => {
    res.send("Get all Courses");
};

const getOneCourse = (req, res) => {
    res.send(`Get course ${req.params.id}`);
};

const createNewCourse = (req, res) => {
    res.send(`Create course ${req.params.id}`);
};

const updateOneCourse = (req, res) => {
    res.send(`Update course ${req.params.id}`);
};

const deleteOneCourse = (req, res) => {
    res.send(`Delete course ${req.params.id}`);
};

module.exports = {
    getAllCourses,
    getOneCourse,
    createNewCourse,
    updateOneCourse,
    deleteOneCourse
};