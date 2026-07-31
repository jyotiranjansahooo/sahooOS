import ProjectModel from "../models/ProjectModel.js";

// =====================================
// GET ALL PROJECTS
// =====================================
export const getProjects = async (req, res) => {
  try {
    const projects = await ProjectModel.find().sort({
      order: 1,
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: projects.length,
      projects,
    });
  } catch (error) {
    console.error("Get Projects Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch projects",
    });
  }
};

// =====================================
// GET SINGLE PROJECT
// =====================================
export const getProject = async (req, res) => {
  try {
    const { id } = req.params;

    const project = await ProjectModel.findById(id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    res.status(200).json({
      success: true,
      project,
    });
  } catch (error) {
    console.error("Get Project Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch project",
    });
  }
};

// =====================================
// CREATE PROJECT
// =====================================
export const createProject = async (req, res) => {
  try {
    const project = await ProjectModel.create(req.body);

    res.status(201).json({
      success: true,
      message: "Project created successfully",
      project,
    });
  } catch (error) {
    console.error("Create Project Error:", error);

    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// =====================================
// UPDATE PROJECT
// =====================================
export const updateProject = async (req, res) => {
  try {
    const { id } = req.params;

    const project = await ProjectModel.findByIdAndUpdate(
      id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Project updated successfully",
      project,
    });
  } catch (error) {
    console.error("Update Project Error:", error);

    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// =====================================
// DELETE PROJECT
// =====================================
export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;

    const project = await ProjectModel.findById(id);

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    await project.deleteOne();

    res.status(200).json({
      success: true,
      message: "Project deleted successfully",
    });
  } catch (error) {
    console.error("Delete Project Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to delete project",
    });
  }
};