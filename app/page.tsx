import type { ReactNode } from "react";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Cpu,
  FileCheck2,
  Mail,
  Microscope,
  Wrench,
} from "lucide-react";
import AssetFrame from "@/components/AssetFrame";

const LINKEDIN = "https://www.linkedin.com/in/anurag-mishra-b25733340/";
const TIRARE = "https://tirare.tech";
const TIRARE_ARCHIVE = "https://tirare-webpage.github.io/";
const EMAIL = "anuragfromtirare@gmail.com";
const RESEARCH_PAPER = "https://drive.google.com/file/d/1XBd-PEDUR0sacBVPBr6hy2ZznNF6v-A9/view?usp=sharing";

const evolution = [
  {
    id: "01",
    title: "The reference vehicle",
    tag: "REAL-WORLD CONSTRAINTS",
    src: "/assets/cad/reality.glb",
    note: "The existing cargo tricycle establishes the design envelope: its solid rear axle, chain line, frame, cargo bed, brakes and repair context.",
  },
  {
    id: "02",
    title: "The first power path",
    tag: "EARLY ARCHITECTURE",
    src: "/assets/cad/first-attempt.glb",
    note: "An early attempt to introduce electric drive into the vehicle. It remains part of the record because the path from first idea to workable architecture matters.",
  },
  {
    id: "03",
    title: "The constraint collision",
    tag: "ARCHITECTURE REVISION",
    src: "/assets/cad/constraint-collision.glb",
    note: "The existing drivetrain's one-way behaviour, axle constraints and packaging needs forced a reconsideration of how rider input and powered drive should interact.",
  },
  {
    id: "04",
    title: "The current platform",
    tag: "UNDER DEVELOPMENT",
    src: "/assets/cad/current-platform.glb",
    note: "The current direction places MRII at the driven-sprocket interface. Vehicle-level mounting, reliability, serviceability and failure behaviour still need testing.",
  },
];

const recognitions = [
  { kind: "FUNDING / ENTREPRENEURSHIP", title: "Bharat Innovation Challenge 2.0 · LPU", detail: "Received ₹50,000 in award support for Tirare at the Grand Finale at Lovely Professional University." },
  { kind: "FUNDING / ENTREPRENEURSHIP", title: "E-Pitch Café 2026 · CiPD, IIIT Delhi", detail: "Selected as a funded finalist in the Proof-of-Concept track; ₹1 lakh in prototype-stage support for Tirare." },
  { kind: "ENGINEERING / TEAM LEADERSHIP", title: "F1 in Schools · Team Seraphis", detail: "Team leader and engineer; the team qualified for the National Finals." },
  { kind: "ROBOTICS", title: "World Robot Olympiad · Future Engineers", detail: "National-level selection and competition work in autonomous-vehicle design." },
  { kind: "ROBOTICS / 2025", title: "Robotics for Good · Youth Challenge India", detail: "Selected at the national level." },
  { kind: "WRITING", title: "Queen’s Commonwealth Essay Competition", detail: "Bronze Medal." },
  { kind: "LEADERSHIP", title: "Student Innovation Council", detail: "Head of the council at Ambience Public School." },
  { kind: "CLIMATE COMMUNICATION", title: "Climate Cardinals", detail: "Delhi State Lead." },
  { kind: "ENTREPRENEURSHIP", title: "Conrad Challenge", detail: "Selected for the challenge." },
  { kind: "INVESTMENT COMPETITION", title: "Wharton Global High School Investment Competition", detail: "Team-based investment simulation; competition performance, not personal investment returns." },
  { kind: "SPACE DESIGN", title: "International Space Settlement pathway", detail: "Invited to an international qualifying team pathway." },
  { kind: "TECHNICAL CREDENTIAL", title: "GitHub Foundations", detail: "Foundations credential." },
];

const projects = [
  {
    id: "01",
    category: "ENGINEERING / TEAM LEADERSHIP",
    title: "F1 in Schools",
    subtitle: "Team Seraphis",
    description: "Team leader and engineer on a competition car developed against demanding design, manufacturing, performance and presentation constraints. The team reached the National Finals.",
    src: "/stories/f1-seraphis/f1-car.jpg",
    kind: "image" as const,
    path: "/stories/f1-seraphis/f1-car.jpg",
  },
  {
    id: "02",
    category: "AUTONOMOUS SYSTEMS",
    title: "Robotics",
    subtitle: "WRO Future Engineers",
    description: "Work on autonomous-vehicle design, mechanical layout, sensing, navigation and iterative testing for competition environments.",
    src: "/stories/robotics/robot-build.jpg",
    kind: "image" as const,
    path: "/stories/robotics/robot-build.jpg",
  },
  {
    id: "03",
    category: "SOCIAL INNOVATION",
    title: "Robotics for Good",
    subtitle: "Youth Challenge India · 2025",
    description: "Selected at the national level for a challenge connecting robotics with practical social problems.",
    src: "/stories/robotics/robotics-for-good.jpg",
    kind: "image" as const,
    path: "/stories/robotics/robotics-for-good.jpg",
