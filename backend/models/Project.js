import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Project title is required"],
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    shortDescription: {
      type: String,
      required: true,
      maxlength: 200,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    thumbnail: {
      type: String,
      required: true,
    },

    images: [
      {
        type: String,
      },
    ],

    technologies: [
      {
        type: String,
        trim: true,
      },
    ],

    features: [
      {
        type: String,
        trim: true,
      },
    ],

    githubUrl: {
      type: String,
      default: "",
    },

    liveUrl: {
      type: String,
      default: "",
    },

    featured: {
      type: Boolean,
      default: false,
    },
    category: {
      type: String,
      default: "Full Stack",
    },

    order: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ["Draft", "Published"],
      default: "Published",
    },
    metaTitle: {
  type: String,
  default: "",
},

metaDescription: {
  type: String,
  default: "",
},
  },
  {
    timestamps: true,
  },
);

const Project =
  mongoose.models.Project || mongoose.model("Project", projectSchema);

export default Project;
