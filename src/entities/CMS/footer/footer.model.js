import mongoose from "mongoose";

const linkSchema = new mongoose.Schema(
    {
        label: { type: String, trim: true, default: "" },
        url: { type: String, trim: true, default: "" },
    },
    { _id: false }
);

const socialSchema = new mongoose.Schema(
    {
        twitter: { type: String, default: "", trim: true },
        facebook: { type: String, default: "", trim: true },
        linkedin: { type: String, default: "", trim: true },
    },
    { _id: false }
);

const footerSchema = new mongoose.Schema(
    {
        logo: { type: String, required: true },
        description: { type: String, required: true, trim: true },
        email: { type: String, required: true, trim: true },
        phone: { type: String, required: true, trim: true },
        quickLinks: { type: [linkSchema], default: [] },
        consultingLinks: { type: [linkSchema], default: [] },
        contactLinks: { type: [linkSchema], default: [] },
        copyright: { type: String, required: true, trim: true },
        socialLinks: { type: socialSchema, default: () => ({}) },
    },
    { timestamps: true }
);

export const Footer = mongoose.model("Footer", footerSchema);
