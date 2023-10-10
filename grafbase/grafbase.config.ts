import { g, auth, config } from "@grafbase/sdk";

const User = g.model("User", {
    name: g.string().length({ min: 2, max: 20 }), //username's length will be from 2-20 letters
    email: g.string().unique(), //email will be unique(no duplicate value)
    avatarUrl: g.url(), //url to avatar img
    description: g.string().optional(), //user description
    githubUrl: g.url().optional(), //url to github page (optional)
    linkedInUrl: g.url().optional(), //url to linkedin page (optional)
    projects: g.relation(() => Project).list().optional(),
});

const Project = g.model("Project", {
    title: g.string().length({ min: 3 }), //title of the project that has minimum length is 3
    description: g.string(), //description of the project
    image: g.url(), //url to project img
    liveSiteUrl: g.url(),
    githubUrl: g.url(), //url to github page
    category: g.string().search(), //category of the project
    createdBy: g.relation(() => User),
});

export default config({
    schema: g,
});
