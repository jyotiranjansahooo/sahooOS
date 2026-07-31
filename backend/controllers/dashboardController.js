import ProjectModel from "../models/ProjectModel.js";

export const getDashboardStats = async (req, res) => {
  try {
    const totalProjects = await ProjectModel.countDocuments();

    const featuredProjects = await ProjectModel.countDocuments({
      featured: true,
    });

    const draftProjects = await ProjectModel.countDocuments({
      status: "Draft",
    });

    const recentProjects = await ProjectModel.find()
      .sort({ createdAt: -1 })
      .limit(5);

    res.status(200).json({
      success: true,
      stats: {
        totalProjects,
        featuredProjects,
        draftProjects,
      },
      recentProjects,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to load dashboard",
    });
  }
};